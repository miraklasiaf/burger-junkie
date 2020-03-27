import React, { createContext, useReducer, useContext, useCallback } from 'react'
import reducer from './reducers/order'
import axios from 'axios'
import PropTypes from 'prop-types'

// Initial state
const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

// Create context for state and actions
export const OrderStateContext = createContext()
export const OrderDispatchContext = createContext()

// Provider component
export const OrderProvider = ({ children }) => {
  const [{ orders, loading, purchased }, dispatch] = useReducer(reducer, initialState)

  const getOrders = useCallback(async (token, userId) => {
    try {
      dispatch({ type: 'FETCH_ORDER_START' })
      const query = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
      const res = (await axios.get(`https://burger-junkie.firebaseio.com/orders.json${query}`)).data
      const fetchOrders = []
      for (const key in res) {
        fetchOrders.push({
          id: key,
          ...res[key]
        })
      }
      dispatch({ type: 'FETCH_ORDER_SUCCESS', payload: fetchOrders })
    } catch (err) {
      console.log(err)
      dispatch({ type: 'FETCH_ORDER_FAILED', payload: err.response.data.error })
    }
  }, [dispatch])

  const purchase = async (orderData, token) => {
    try {
      dispatch({ type: 'PURCHASE_START' })
      const res = (await axios.post(`https://burger-junkie.firebaseio.com/orders.json?auth=${token}`, orderData)).data
      const newOrder = {
        ...orderData,
        id: res.name
      }
      dispatch({ type: 'PURCHASE_SUCCESS', payload: newOrder })
    } catch (err) {
      dispatch({ type: 'PURCHASE_FAILED' })
    }
  }

  const initPurchase = () => dispatch({ type: 'PURCHASE_INIT' })

  return (
    <OrderStateContext.Provider value={{ orders, loading, purchased }}>
      <OrderDispatchContext.Provider value={{ initPurchase, getOrders, purchase }}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderStateContext.Provider>
  )
}

export const useOrderState = () => {
  const context = useContext(OrderStateContext)
  if (context === undefined) {
    throw new Error('useOrderState must be used within a OrderProvider')
  }
  return context
}

export const useOrderDispatch = () => {
  const context = useContext(OrderDispatchContext)
  if (context === undefined) {
    throw new Error('useOrderDispatch must be used within a OrderProvider')
  }
  return context
}

OrderProvider.propTypes = {
  children: PropTypes.node
}
