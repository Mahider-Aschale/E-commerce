

import { Routes, Route } from "react-router-dom"

import HomePage from './pages/homePage';
import Women from './pages/women'
import ProductList from './pages/productList';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/cartPage'
import CheckoutPage from './pages/checkout'
import './App.css'

export default function App() {
return(
     <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} /> 
    </Routes>
     </>
);
}

