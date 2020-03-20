import React, { createContext, useReducer, useContext } from 'react'
import burgerReducer from './reducers/burger'
import axios from 'axios'

// Initial state
const initialState = {
    ingredients: null,
    price: 5000,
    error: null,
    loading: true,
    makingBurger: false
}

// Create context
export const BurgerContext = createContext()

// Provider component
export const BurgerProvider = ({ children }) => {
    const [{ ingredients, price, error, loading }, dispatch] = useReducer(burgerReducer, initialState)

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

export const useBurgerContext = () => useContext(BurgerContext)