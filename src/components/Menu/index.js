import React from 'react'
import Control from './Control'
import { useBurgerContext } from '../../context/GlobalState'

const types = [
    {name: 'Salad', label: 'salad'},
    {name: 'Bacon', label: 'bacon'},
    {name: 'Cheese', label: 'cheese'},
    {name: 'Meat', label: 'meat'}
]

export const Menu = () => {
    const { ingredients, price, addIngredient, deleteIngredient } = useBurgerContext()
    const disabledButton = { ...ingredients }

    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0
    }

    return (
      <div className="bg-blue-200 w-full max-w-sm flex flex-col justify-center p-5 border-content rounded-lg mt-2">
        <p className="text-center text-blue-900 pb-6 font-bold select-none">
          Price: <span className="text-blue-700">Rp. {price}</span>
        </p>
        {types.map(types => (
          <Control
            key={types.name}
            label={types.name}
            add={() => addIngredient(types.label)}
            delete={() => deleteIngredient(types.label)}
            disabled={disabledButton[types.label]}
          />
        ))}
        <div className="flex justify-center pt-2">
          <button className="bg-blue-600 rounded-lg px-3 py-2 text-blue-100 text-sm">
            ORDER NOW
          </button>
        </div>
      </div>
    )
}
