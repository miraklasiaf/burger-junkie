import React, { createContext, useContext, useCallback } from 'react'
import authReducer from './reducers/auth'
import axios from 'axios'
import PropTypes from 'prop-types'
import useReducerWithLog from '../utils/useReducerWithLog'

// Initial state
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirectPath: '/'
}

// Create context
export const AuthStateContext = createContext()
export const AuthDispatchContext = createContext()

// Provider component
export const AuthProvider = ({ children }) => {
  const [
    { token, userId, error, loading, redirectPath },
    dispatch
  ] = useReducerWithLog(authReducer, initialState)

  /*
   *
   */
  const authentication = async (email, password, isSignup) => {
    try {
      dispatch({ type: 'AUTH_START', payload: true })
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`
      if (isSignup) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`
      }
      const authData = {
        email,
        password,
        returnSecureToken: true
      }

      const res = (await axios.post(url, authData)).data

      const expirationDate = new Date(
        new Date().getTime() + res.expiresIn * 1000
      )
      window.localStorage.setItem('expirationDate', expirationDate)
      window.localStorage.setItem('token', res.idToken)
      window.localStorage.setItem('userId', res.localId)
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: { idToken: res.idToken, userId: res.localId }
      })
      createTimeout(res.expiresIn)
    } catch (err) {
      dispatch({ type: 'AUTH_FAILED', payload: err.response.data.error })
    }
  }

  const logout = useCallback(() => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('expirationDate')
    window.localStorage.removeItem('userId')
    dispatch({ type: 'AUTH_LOGOUT' })
  }, [dispatch])

  const createTimeout = useCallback(
    expirationTime => {
      setTimeout(() => {
        logout()
      }, expirationTime * 1000)
    },
    [logout]
  )

  const redirectAuth = path =>
    dispatch({ type: 'AUTH_REDIRECT', payload: path })

  const checkAuthState = useCallback(() => {
    const token = window.localStorage.getItem('token')
    const expirationDate = new Date(
      window.localStorage.getItem('expirationDate')
    )
    if (token && expirationDate > new Date()) {
      const userId = window.localStorage.getItem('userId')
      dispatch({ type: 'AUTH_SUCCESS', payload: { idToken: token, userId } })
      createTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
    } else {
      logout()
    }
  }, [dispatch, createTimeout, logout])

  return (
    <AuthStateContext.Provider
      value={{
        token,
        userId,
        error,
        loading,
        redirectPath,
        loggedIn: token !== null
      }}
    >
      <AuthDispatchContext.Provider
        value={{
          authentication,
          redirectAuth,
          logout,
          checkAuthState
        }}
      >
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext)
export const useAuthDispatch = () => useContext(AuthDispatchContext)

AuthProvider.propTypes = {
  children: PropTypes.node
}
