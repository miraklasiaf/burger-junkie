import React, { useEffect, lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Home from '../screens/Home'
import CheckoutForm from '../screens/Checkout/CheckoutForm'
import NotFound from '../screens/NotFound'
import Logout from '../screens/Auth/Logout'
import Toolbar from './Navigation/Toolbar'
import Sidebar from './Navigation/Sidebar'
import Footer from './Footer'
import Spinner from '../components/Spinner'
import { useAuthState, useAuthDispatch } from '../context/AuthContext'
import { AppHeader, AppMain, MainWrapper, AppFooter } from './styles'
import ErrorBoundary from 'react-error-boundary'
import PropTypes from 'prop-types'

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
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <AppHeader>
        <Toolbar />
      </AppHeader>

      <Sidebar />

      <AppMain>
        <MainWrapper>
          <Suspense fallback={<Spinner />}>
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
    </ErrorBoundary>
  )
}

const MyFallbackComponent = ({ componentStack, error }) => (
  <div>
    <p><strong>Oops! An error occured!</strong></p>
    <p>Here’s what we know…</p>
    <p><strong>Error:</strong> {error.toString()}</p>
    <p><strong>Stacktrace:</strong> {componentStack}</p>
  </div>
)

MyFallbackComponent.propTypes = {
  componentStack: PropTypes.node,
  error: PropTypes.object
}
