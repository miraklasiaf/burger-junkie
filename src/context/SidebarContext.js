import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import useReducerWithLog from '../utils/useReducerWithLog'

// Create context
export const SidebarContext = createContext()

// Initial state
const initialState = {
  isSidebarOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// Provider component
export const SidebarProvider = ({ children }) => {
  const [{ isSidebarOpen }, dispatch] = useReducerWithLog(reducer, initialState)

  const setSidebar = isActive =>
    dispatch({ type: 'SET_SIDEBAR', payload: isActive })

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext)

SidebarProvider.propTypes = {
  children: PropTypes.node
}
