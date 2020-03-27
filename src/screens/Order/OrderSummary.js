import React from 'react'
import PropTypes from 'prop-types'

export default function OrderSummary ({ ingredients, price }) {
  const ingredientOrder = []

  for (const ingredientName in ingredients) {
    ingredientOrder.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    })
  }

  const ingredientOutput = ingredientOrder.map(ig => {
    return (
      <span key={ig.name} className='capitalize inline-block mx-1 border-b'>{ig.name}({ig.amount})</span>
    )
  })

  return (
    <div className='w-full text-gray-700 flex flex-col items-center mt-5 hover:bg-gray-400 border-b'>
      <div className='flex justify-center text-sm'>
        <p>Ingredients: {ingredientOutput} </p>
      </div>
      <div className='flex justify-center'>
        <strong>Price: <strong>Rp. {price}</strong></strong>
      </div>
    </div>
  )
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.number
}
