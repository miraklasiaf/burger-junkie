import React, { useEffect } from 'react'
import { useAuthState, useAuthDispatch } from '../../context/AuthContext'
import { useBurgerState } from '../../context/BurgerContext'
import { Redirect } from '@reach/router'
import { AuthForm } from './AuthForm'

export default function Auth () {
  const { makingBurger } = useBurgerState()
  const { token, redirectPath, error } = useAuthState()
  const { redirectAuth } = useAuthDispatch()

  useEffect(() => {
    if (!makingBurger && redirectPath !== '/') {
      redirectAuth()
    }
  }, [makingBurger, redirectPath, redirectAuth])

  let errorMessage = null
  if (error) {
    errorMessage = <p className='text-center text-lg text-gray-600'>{error.message}</p>
  }

  let redirect = null
  if (token !== null) {
    redirect = <Redirect to={redirectPath} noThrow />
  }

  return (
    <div className='bg-blue-100 flex flex-col items-center justify-center px-5 pt-5 pb-56 border-context'>
      {redirect}
      <h1 className='text-center text-blue-900 text-lg'>
        Authentication page
      </h1>
      {errorMessage}

      <AuthForm />
    </div>
  )
}
