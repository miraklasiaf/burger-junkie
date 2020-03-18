import React, { useContext, useEffect } from 'react'
import { Burger } from '../../components/Burger'
import { Menu } from '../../components/Menu'
import { GlobalContext } from '../../context/GlobalState'

export default function Home() {
    const { ingredients, error, getIngredients } = useContext(GlobalContext)
    
    useEffect(() => {
      getIngredients()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let burger = error ? <p className="text-center text-blue-900">Ingredients can't be loaded</p> : <p>Loading...</p>

    if(ingredients){
      burger = (
        <>
          <Burger ingredients={ingredients} />
          <Menu />
        </>
      )
    }

    return (
      <div className="bg-blue-100 h-full flex flex-col items-center justify-center px-5 pt-1 pb-6 border-context lg:flex-row">
        <h1 className='text-center text-blue-900 text-lg'>The Best Burger in town!</h1>
        {burger}
      </div>
    )
}
