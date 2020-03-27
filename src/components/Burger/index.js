import React from 'react'
import Ingredient from './Ingredient'
import PropTypes from 'prop-types'

export const Burger = ({ ingredients }) => {
  //  Transform ingredient from object to array
  //  Logic from academind course
  let formatIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />
      }) // [x,y]
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (formatIngredients.length === 0) {
    formatIngredients = <p className='text-sm sm:text-base text-blue-900 select-none'>Add some ingredients!</p>
  }

  return (
    <div className='w-full max-w-sm h-64 p-5 overflow-auto text-center bg-blue-200 rounded-lg'>
      <Ingredient type='bread-top' />
      {formatIngredients}
      <Ingredient type='bread-bottom' />
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
}
