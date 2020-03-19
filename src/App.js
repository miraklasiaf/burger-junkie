import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './screens/Home'
import Order from './screens/Order'
import Checkout from './screens/Checkout'
import Auth from './screens/Auth'
import { GlobalProvider, BurgerProvider } from './context/GlobalState'

export default function App() {
  return (
    <GlobalProvider>
      <BurgerProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/auth' element={<Auth />} />
              <Route path="/order" element={<Order />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout>
        </Router>
      </BurgerProvider>
    </GlobalProvider>
  )
}