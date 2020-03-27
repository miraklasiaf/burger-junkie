import React from 'react'
import { Burger } from '../../components/Burger'
import PropTypes from 'prop-types'

export default function CheckoutSummary ({ ingredients, cancel, checkout }) {
  return (
    <div className='flex flex-col items-center w-full mt-8'>
      <h1 className='text-gray-700 text-xl'>We hope it tastes well!</h1>
      <div className='flex justify-center w-full'>
        <Burger ingredients={ingredients} />
      </div>
      <div className='flex mt-8'>
        <button className='bg-red-700 rounded-lg px-3 py-2 text-white mr-3' onClick={cancel}>Cancel</button>
        <button className='bg-blue-700 rounded-lg px-3 py-2 text-white' onClick={checkout}>Continue</button>
      </div>
    </div>
  )
}

CheckoutSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired
}
