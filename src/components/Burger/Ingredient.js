import React from 'react'
import { BreadTop, BreadBottom, Meat, Bacon, Salad, Cheese } from './styles'

export default function Ingredient({ type }) {
    let ingredient = null

    switch (type) {
        case 'bread-bottom':
            ingredient = <BreadBottom />
            break
        case 'bread-top':
            ingredient = <BreadTop />
            break
        case 'meat':
            ingredient = <Meat />
            break
        case 'cheese':
            ingredient = <Cheese />
            break
        case 'bacon':
            ingredient = <Bacon />
            break
        case 'salad':
            ingredient = <Salad />
            break
        default:
            ingredient = null
    }

    return ingredient
}
