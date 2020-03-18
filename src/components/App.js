import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Home from '../screens/Home'
import Order from '../screens/Order'
import Checkout from '../screens/Checkout'
import { GlobalProvider } from '../context/GlobalState'
import {
  AppContainer,
  AppHeader,
  AppMain,
  MainWrapper,
  AppFooter,
  FooterWrapper,
} from './styles'

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <AppContainer>
          <AppHeader>
            <Nav />
          </AppHeader>

          <AppMain>
            <MainWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </MainWrapper>
          </AppMain>

          <AppFooter>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </AppFooter>
        </AppContainer>
      </Router>
    </GlobalProvider>
  )
}