"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  updateQuantity: (id: number, newQuantity: number) => void
  removeItem: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

 
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCartItems(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      )
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id && item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }
      return [...prev, newItem]
    })
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    )
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
