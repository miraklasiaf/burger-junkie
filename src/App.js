import React, { useEffect } from 'react';
import { Router } from '@reach/router'
import Layout from './components/Layout'
import Home from './screens/Home'
import Order from './screens/Order'
import Checkout from './screens/Checkout'
import Auth from './screens/Auth'
import Logout from './screens/Auth/Logout'
import NotFound from './screens/NotFound'
import { useAuthContext } from './context/AuthContext';

export default function App() {
  const { loggedIn, checkAuthState } = useAuthContext()

  useEffect(() => {
    checkAuthState()
  }, [checkAuthState])

  return (
    <Layout>
      <Router>
        <Home path='/' />
        <Auth path='/auth' />
        { loggedIn && <Order path='/order' /> }
        { loggedIn && <Checkout path='/checkout' /> }
        { loggedIn && <Logout path='logout' /> }
        <NotFound default />
      </Router>
    </Layout>
  )
}