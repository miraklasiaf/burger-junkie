import React from 'react'
import Control from './Control'
import { useBurgerState, useBurgerDispatch } from '../../context/BurgerContext'
import { useAuthContext } from '../../context/AuthContext'
import { MenuContainer, ButtonWrapper, PriceWrapper } from './styles'

const types = [
  { name: 'Salad', label: 'salad' },
  { name: 'Bacon', label: 'bacon' },
  { name: 'Cheese', label: 'cheese' },
  { name: 'Meat', label: 'meat' }
]

export const Menu = ({ purchase, isPurchasable }) => {
  const { ingredients, price } = useBurgerState()
  const { addIngredient, deleteIngredient } = useBurgerDispatch()
  const { loggedIn } = useAuthContext()

  const disabledButton = { ...ingredients }

  for (const key in disabledButton) {
    disabledButton[key] = disabledButton[key] <= 0
  }

  return (
    <MenuContainer>
      <PriceWrapper>
          Price: <span className='text-blue-800'>Rp. {price}</span>
      </PriceWrapper>

      {types.map(types => (
        <Control
          key={types.name}
          label={types.name}
          add={() => addIngredient(types.label)}
          remove={() => deleteIngredient(types.label)}
          disabled={disabledButton[types.label]}
        />
      ))}

      <ButtonWrapper>
        <button
          className={isPurchasable
            ? 'bg-blue-700 rounded-lg px-3 py-2 text-blue-100 text-sm'
            : 'bg-blue-700 rounded-lg px-3 py-2 text-blue-500 text-sm cursor-not-allowed'}
          onClick={purchase}
          disabled={!isPurchasable}
        >
          {loggedIn ? 'ORDER NOW' : 'Sign Up to Order'}
        </button>
      </ButtonWrapper>
    </MenuContainer>
  )
}
