import React from 'react'
import PropTypes from 'prop-types'

export const OrderSummary = ({ ingredients, price }) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span className='capitalize'>{igKey}</span>: {ingredients[igKey]}
        </li>
      )
    })

  return (
    <>
      <p className='mb-2'>A delicious burger with the following ingredients</p>
      <div className='bg-blue-200 px-10 py-3'>
        <ul>
          {ingredientSummary}
        </ul>
      </div>
      <p className='font-bold mt-2 text-gray-700'>Total Price: Rp {price} </p>
    </>
  )
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}
