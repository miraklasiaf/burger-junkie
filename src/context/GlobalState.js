import React, { createContext, useReducer, useContext } from 'react'
import uiReducer from './reducers/ui'

// Initial state
const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
  error: null,
  loading: true,
}

// Create context
export const GlobalContext = createContext()

// Provider component
export const GlobalProvider = ({children}) => {
  const [{isSidebarOpen, isModalOpen}, dispatch] = useReducer(uiReducer, initialState)

  const setSidebar = (isActive) => dispatch({type: 'SET_SIDEBAR', payload: isActive})
  const setModal = (isActive) => dispatch({ type: 'SET_MODAL', payload: isActive })

  return (
    <GlobalContext.Provider value={{isSidebarOpen, isModalOpen, setModal, setSidebar}}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
