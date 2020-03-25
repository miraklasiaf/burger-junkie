import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import Auth from '../screens/Auth'
import Home from '../screens/Home'
import Order from '../screens/Order'
import Checkout from '../screens/Checkout'
import NotFound from '../screens/NotFound'
import Logout from '../screens/Auth/Logout'
import Toolbar from './Navigation/Toolbar'
import Sidebar from './Navigation/Sidebar'
import Footer from './Footer'
import { useAuthState, useAuthDispatch } from '../context/AuthContext'
import { AppHeader, AppMain, MainWrapper, AppFooter } from './styles'

export default function App () {
  const { loggedIn } = useAuthState()
  const { checkAuthState } = useAuthDispatch()

  useEffect(() => {
    checkAuthState()
  }, [checkAuthState])

  return (
    <>
      <AppHeader>
        <Toolbar />
      </AppHeader>

      <Sidebar />

      <AppMain>
        <MainWrapper>
          <Router>
            <Home path='/' />
            <Auth path='/auth' />
            {loggedIn && <Order path='/order' />}
            {loggedIn && <Checkout path='/checkout' />}
            {loggedIn && <Logout path='logout' />}
            <NotFound default />
          </Router>
        </MainWrapper>
      </AppMain>

      <AppFooter>
        <Footer />
      </AppFooter>
    </>
  )
}
