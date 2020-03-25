import React, { createContext, useReducer, useContext, useCallback } from 'react'
import reducer from './reducers/burger'
import axios from 'axios'
import PropTypes from 'prop-types'

// Initial state
const initialState = {
  ingredients: null,
  price: 5000,
  error: null,
  loading: true,
  makingBurger: false
}

// Create context for state and actions
export const BurgerStateContext = createContext()
export const BurgerDispatchContext = createContext()

// Provider component
export const BurgerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getIngredients = useCallback(async () => {
    try {
      const res = (await axios.get('https://burger-junkie.firebaseio.com/ingredients.json')).data
      dispatch({ type: 'SET_INGREDIENTS', payload: res })
    } catch (err) {
      dispatch({ type: 'SET_INGREDIENTS_ERROR', payload: err })
    }
  }, [dispatch])

  const addIngredient = ingredient => dispatch({ type: 'ADD_INGREDIENT', payload: ingredient })
  const deleteIngredient = ingredient => dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient })

  return (
    <BurgerStateContext.Provider value={state}>
      <BurgerDispatchContext.Provider value={{ getIngredients, addIngredient, deleteIngredient }}>
        {children}
      </BurgerDispatchContext.Provider>
    </BurgerStateContext.Provider>
  )
}

export const useBurgerState = () => {
  const context = useContext(BurgerStateContext)
  if (context === undefined) {
    throw new Error('useBurgerState must be used within a BurgerProvider')
  }
  return context
}

export const useBurgerDispatch = () => {
  const context = useContext(BurgerDispatchContext)
  if (context === undefined) {
    throw new Error('useBurgerDispatch must be used within a BurgerProvider')
  }
  return context
}

BurgerProvider.propTypes = {
  children: PropTypes.node
}
