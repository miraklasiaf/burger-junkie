import React from 'react'
import { NavLink } from './styles'
import { useAuthContext } from '../../context/AuthContext'

export const NavItem = () => {
  const { loggedIn } = useAuthContext()

  return (
    <>
      <NavLink
        className='block flex items-center hover:text-blue-300 mr-5'
        to='/'
      >
                Burger
      </NavLink>
      {loggedIn &&
        <NavLink
          className='block flex items-center hover:text-blue-300 mr-5'
          to='order'
        >
                        Order
        </NavLink>}
      {loggedIn ? <NavLink to='logout'>Logout</NavLink> : 
        <NavLink
          className='block flex items-center hover:text-blue-300'
          to='auth'
        >
                    Login
        </NavLink>}
    </>
  )
}
