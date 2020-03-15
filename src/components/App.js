import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { 
  AppContainer, 
  AppHeader, 
  AppMain, 
  MainWrapper, ContentWrapper, ContentContainer, AppFooter } from './styles'
import Nav from './Nav'
import Footer from './Footer'
import Home from '../screens/Home'
import Order from '../screens/Order'
import Checkout from '../screens/Checkout'

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Nav />
      </AppHeader>

      <AppMain>
        <MainWrapper>
          <ContentWrapper>
            <ContentContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </ContentContainer>
          </ContentWrapper>
        </MainWrapper>
      </AppMain>

      <AppFooter>
        <Footer />
      </AppFooter>
    </AppContainer>
  )
}

export default App;
