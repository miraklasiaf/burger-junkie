import React from 'react'
import { NavLink } from './styles'
import { useAuthState } from '../../context/AuthContext'

export const NavItem = () => {
  const { loggedIn } = useAuthState()

  let order = null
  let auth = <NavLink className='block flex items-center hover:text-blue-300' to='auth'>Login</NavLink>
  if (loggedIn) {
    order = <NavLink className='block flex items-center hover:text-blue-300 mr-5' to='order'>Order</NavLink>
    auth = <NavLink to='logout'>Logout</NavLink>
  }

  return (
    <>
      <NavLink
        className='block flex items-center hover:text-blue-300 mr-5'
        to='/'
      >
                Burger
      </NavLink>
      {order}
      {auth}
    </>
  )
}
