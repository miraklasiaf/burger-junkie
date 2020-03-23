import React, { useEffect, useState } from 'react'
import { Burger } from '../../components/Burger'
import { Menu } from '../../components/Menu'
import { Modal } from '../../components/Modal'
import { OrderSummary } from './OrderSummary' 
import { useBurgerContext } from '../../context/BurgerContext'

export default function Home() {
    const { ingredients, error, getIngredients, price } = useBurgerContext()
    const [isModalOpen, setModalOpen] = useState(false)
    
    useEffect(() => {
      getIngredients()
    }, [getIngredients])

    let burger = error ? <p className="text-center text-blue-900">Ingredients can't be loaded</p> : <p>Loading...</p>
    let order = null
    if(ingredients){
      burger = (
        <>
          <Burger ingredients={ingredients} />
          <Menu setModal={() => setModalOpen(true)} />
        </>
      )
      order = (
        <OrderSummary ingredients={ingredients} price={price} />
      )
    }

    return (
      <div className="bg-blue-100 h-screen flex flex-col items-center justify-center px-5 border-context">
        <h1 className='text-center text-blue-900 text-md sm:text-xl pb-5'>The Best Burger in town!</h1>
        <Modal isModalActive={isModalOpen} closeModal={() => setModalOpen(false)}>
          {order}
        </Modal>
        {burger}
      </div>
    )
}
