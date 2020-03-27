import React, { useEffect } from 'react'
import { useAuthState } from '../../context/AuthContext'
import { useOrderDispatch, useOrderState } from '../../context/OrderContext'
import OrderSummary from './OrderSummary'
import Spinner from '../../components/Spinner'

export default function Order () {
  const { getOrders } = useOrderDispatch()
  const { orders, loading } = useOrderState()
  const { token, userId } = useAuthState()

  console.log(loading)

  useEffect(() => {
    getOrders(token, userId)
  }, [getOrders, token, userId])

  let result = <Spinner />
  if (!loading) {
    result = (
      <>
        {orders.map(order => (
          <OrderSummary
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </>
    )
  }

  return (
    <div className='bg-blue-100 flex flex-col items-center justify-center px-5 pt-5 pb-64 border-content'>
      <h1 className='text-center text-blue-900 text-lg'>
                Order Page
      </h1>
      {result}
    </div>
  )
}
