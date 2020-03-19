import React, { createContext, useReducer, useContext } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  isSidenavActive: false,
  error: null,
  loading: true,
}

const stateBurger = {
  ingredients: null,
  price: 5000,
  error: null,
  loading: true,
}

// Create context
export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()
export const BurgerContext = createContext()

// Provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const setSidenav = (isActive) => dispatch({type: 'SET_SIDENAV', payload: isActive})

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={{ setSidenav }}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export const BurgerProvider = ({children}) => {
  const [{ingredients, price, error, loading}, dispatch] = useReducer(AppReducer, stateBurger)

  const getIngredients = async () => {
    try {
      const res = (await axios.get('https://burger-junkie.firebaseio.com/ingredients.json')).data
      dispatch({ type: 'SET_INGREDIENTS', payload: res })
    } catch (err) {
      dispatch({ type: 'SET_INGREDIENTS_ERROR', payload: err })
    }
  }
  const addIngredient = ingredient => dispatch({ type: 'ADD_INGREDIENT', payload: ingredient })
  const deleteIngredient = ingredient => dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient })

  return (
    <BurgerContext.Provider value={{
      ingredients,
      price,
      error,
      loading,
      getIngredients, 
      addIngredient, 
      deleteIngredient 
    }}>
        {children}
    </BurgerContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)
export const useGlobalDispatch = () => useContext(GlobalDispatchContext)

export const useBurgerContext = () => useContext(BurgerContext)