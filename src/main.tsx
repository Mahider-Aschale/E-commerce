import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./compont/CartContext"
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter> {/* Wrap your app here */}
  <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
</React.StrictMode>)


