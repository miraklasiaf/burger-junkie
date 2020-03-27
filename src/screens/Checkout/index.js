import React from 'react'
import { Redirect } from '@reach/router'
import PropTypes from 'prop-types'
import CheckoutSummary from './CheckoutSummary'
import { useBurgerState } from '../../context/BurgerContext'
import { useOrderState } from '../../context/OrderContext'

export default function Checkout ({ navigate, children }) {
  const { ingredients } = useBurgerState()
  const { purchased } = useOrderState()

  const handleCancel = () => {
    navigate('/', {
      replace: true
    })
  }

  const handleCheckout = () => {
    navigate('/checkout/form', {
      replace: true
    })
  }

  let summary = <Redirect to='/' noThrow />

  if (ingredients) {
    const redirectPurchase = purchased && <Redirect to='/' noThrow />
    summary = (
      <>
        {redirectPurchase}
        <CheckoutSummary
          ingredients={ingredients}
          cancel={handleCancel}
          checkout={handleCheckout}
        />
        {children}
      </>
    )
  }

  return (
    <div className='bg-blue-100 flex flex-col items-center justify-center px-5 pt-5 pb-64 border-content'>
      <h1 className='text-center text-blue-900 text-lg'>
        Checkout Page
      </h1>
      {summary}
    </div>
  )
}

Checkout.propTypes = {
  navigate: PropTypes.func,
  children: PropTypes.node
}
