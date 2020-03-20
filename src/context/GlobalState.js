import React, { createContext, useReducer, useContext } from 'react'
import uiReducer from './reducers/ui'

// Initial state
const initialState = {
  isSidebarActive: false,
  error: null,
  loading: true,
}

// Create context
export const GlobalContext = createContext()

// Provider component
export const GlobalProvider = ({children}) => {
  const [{isSidebarActive}, dispatch] = useReducer(uiReducer, initialState)

  const setSidebar = (isActive) => dispatch({type: 'SET_SIDEBAR', payload: isActive})

  return (
    <GlobalContext.Provider value={{isSidebarActive, setSidebar}}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
