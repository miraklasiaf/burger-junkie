import React from 'react'
import Ingredient from './Ingredient'

export const Burger = ({ ingredients }) => {
    // Transform ingredient from object to array
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
        formatIngredients = <p className='text-base text-blue-100'>Add some ingredients!</p>
    }

    return (
        <div className="flex flex-col items-center">
            <Ingredient type='bread-top' />
            {formatIngredients}
            <Ingredient type='bread-bottom' />
        </div>
    )
}
