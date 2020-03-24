import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router'
import { Burger } from '../../components/Burger'
import { Menu } from '../../components/Menu'
import { Modal } from '../../components/Modal'
import { OrderSummary } from './OrderSummary'
import { useBurgerState, useBurgerDispatch } from '../../context/BurgerContext'
import { useAuthContext } from '../../context/AuthContext'
import { MainContainer } from './styles'

export default function Home () {
  const { ingredients, error, price } = useBurgerState()
  const { getIngredients } = useBurgerDispatch()
  const { loggedIn, redirectAuth } = useAuthContext()
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    getIngredients()
  }, [getIngredients])

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handlePurchasing = () => {
    if (loggedIn) {
      setModalOpen(!isModalOpen)
    } else {
      redirectAuth('/checkout')
      navigate('/auth')
    }
  }

  const handlePuchaseButton = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => { return ingredients[igKey] })
      .reduce((sum, el) => sum + el, 0)

    return sum > 0
  }

  let burger = error ? <p className='text-center text-blue-900'>Ingredients can't be loaded</p> : <p>Loading...</p>
  let order = null
  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients} />
        <Menu
          openModal={handleModalOpen}
          purchase={handlePurchasing}
          isPurchasable={handlePuchaseButton(ingredients)}
        />
      </>
    )
    order = (
      <OrderSummary ingredients={ingredients} price={price} />
    )
  }

  return (
    <MainContainer>
      <h1 className='text-center text-blue-900 text-md sm:text-xl pb-5'>
        The Best Burger in town!
      </h1>
      <Modal
        active={isModalOpen}
        closeModal={handleModalClose}
        title='Your Order'
      >
        {order}
      </Modal>
      {burger}
    </MainContainer>
  )
}
