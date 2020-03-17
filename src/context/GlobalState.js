import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  ingredients: [],
  orders: [],
  token: null,
  userId: null,
  error: null,
  loading: true,
  authRedirectPath: '/'
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  async function getIngredients() {
    try {
      const res = (await axios.get('https://burger-junkie.firebaseio.com/ingredients.json')).data
      dispatch({type: 'SET_INGREDIENTS', payload: res })
    } catch (err) {
      dispatch({type: 'SET_INGREDIENTS_ERROR', payload: err.response.data.error })
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      })
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config)

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        ingredients: state.ingredients,
        orders: state.orders,
        error: state.error,
        loading: state.loading,
        token: state.token,
        userId: state.userId,
        getIngredients,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
