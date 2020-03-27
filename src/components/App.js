import React, { useEffect, lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Home from '../screens/Home'
import CheckoutForm from '../screens/Checkout/CheckoutForm'
import NotFound from '../screens/NotFound'
import Logout from '../screens/Auth/Logout'
import Toolbar from './Navigation/Toolbar'
import Sidebar from './Navigation/Sidebar'
import Footer from './Footer'
import { useAuthState, useAuthDispatch } from '../context/AuthContext'
import { AppHeader, AppMain, MainWrapper, AppFooter } from './styles'

const Auth = lazy(() => {
  return import('../screens/Auth')
})

const Order = lazy(() => {
  return import('../screens/Order')
})

const Checkout = lazy(() => {
  return import('../screens/Checkout')
})

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
          <Suspense fallback={<p>Loading...</p>}>
            <Router>
              <Home path='/' />
              <Auth path='/auth' />
              {loggedIn && <Order path='order' />}
              {loggedIn &&
                <Checkout path='checkout'>
                  <CheckoutForm path='form' />
                </Checkout>}
              {loggedIn && <Logout path='logout' />}
              <NotFound default />
            </Router>
          </Suspense>
        </MainWrapper>
      </AppMain>

      <AppFooter>
        <Footer />
      </AppFooter>
    </>
  )
}
