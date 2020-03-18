import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  ingredients: null,
  totalPrice: 5000,
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

  /* 
   *  Burger Actions
   */
  async function getIngredients() {
    try {
      const res = (await axios.get('https://burger-junkie.firebaseio.com/ingredients.json')).data
      dispatch({type: 'SET_INGREDIENTS', payload: res })
    } catch (err) {
      dispatch({type: 'SET_INGREDIENTS_ERROR', payload: err})
    }
  }
  const addIngredient = ingredient => dispatch({type: 'ADD_INGREDIENT', payload: ingredient})
  const deleteIngredient = ingredient => dispatch({type: 'DELETE_INGREDIENT', payload: ingredient})

  /*
   *  Auth Actions
   */

  return (
    <GlobalContext.Provider
      value={{
        ingredients: state.ingredients,
        orders: state.orders,
        error: state.error,
        loading: state.loading,
        token: state.token,
        userId: state.userId,
        price: state.totalPrice,
        getIngredients,
        addIngredient,
        deleteIngredient
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
