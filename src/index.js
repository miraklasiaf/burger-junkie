import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { AuthProvider } from './context/AuthContext'
import { OrderProvider } from './context/OrderContext'
import { BurgerProvider } from './context/BurgerContext'
import { SidebarProvider } from './context/SidebarContext'

const ui = (
  <AuthProvider>
    <SidebarProvider>
      <BurgerProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </BurgerProvider>
    </SidebarProvider>
  </AuthProvider>
)
const container = document.getElementById('root')

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000)
    ReactDOM.render(ui, container)
  })
} else {
  ReactDOM.render(ui, container)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
