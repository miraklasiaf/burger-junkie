import React, { createContext, useReducer, useContext } from 'react'
import authReducer from './reducers/auth'
import axios from 'axios'

// Initial state
const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    redirectPath: '/'
}

// Create context
export const AuthContext = createContext()

// Provider component
export const AuthProvider = ({children}) => {
    const [{ token, userId, error, loading, redirectPath }, dispatch] = useReducer(authReducer, initialState)

    /*
     * 
     */
    const authentication = async (email, password, isSignup) => {
        try {
            dispatch({type: 'AUTH_START', payload: true})
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPKiYvvgZuvQp80yWnzhCElew_9-VnNv4'
            if (isSignup) {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPKiYvvgZuvQp80yWnzhCElew_9-VnNv4'
            }
            const authData = { 
                email, 
                password, 
                returnSecureToken: true 
            }

            const res = (await axios.post(url, authData)).data
            console.log(res)

            const expirationDate = new Date(new Date().getTime() + (res.expiresIn * 1000))
            localStorage.setItem('expirationDate', expirationDate)
            localStorage.setItem('token', res.idToken)
            localStorage.setItem('userId', res.localId)
            dispatch({type: 'AUTH_SUCCESS', idToken: res.idToken, userId: res.localId})
            createTimeout(res.expiresIn)
        } catch (err) {
            dispatch({type: 'AUTH_FAILED', error: err.response.data.error})
        }
    }

    const createTimeout = (expirationTime) => {
        setTimeout(() => {
            logout()
        }, expirationTime * 1000);
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('userId')
        dispatch({type: 'AUTH_LOGOUT'})
    }

    const redirectAuth = path => dispatch({type: 'AUTH_REDIRECT', payload: path})
    
    const checkAuthState = () => {
        const idToken = localStorage.getItem('token')
        const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if (token && (expirationDate > new Date())) {
            const userId = localStorage.getItem('userId')
            dispatch({type:'AUTH_SUCCESS', idToken, userId})
            createTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
        } else {
            logout()
        }
    }


    return (
        <AuthContext.Provider value={{
            token,
            userId,
            error,
            loading,
            redirectPath,
            loggedIn: token !== null,
            authentication,
            redirectAuth,
            logout,
            checkAuthState
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)