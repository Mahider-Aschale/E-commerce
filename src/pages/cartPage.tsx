/* "use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Trash2, Plus, Minus } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 12.0
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 */          {/* Cart Items */}/* 
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden sm:table-cell">Price</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4 hidden sm:table-cell">Total</th>
                    <th className="p-4 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="p-4">
                        <div className="flex items-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded mr-4"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="text-sm text-gray-600">
                              <p>Color: {item.color}</p>
                              <p>Size: {item.size}</p>
                              <p className="sm:hidden">Price: ${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4 hidden sm:table-cell">${item.price.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex justify-center border border-gray-300 w-32 mx-auto">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
                          >
                            <Minus size={16} />
                          </button>
                          <div className="flex-1 h-10 flex items-center justify-center">{item.quantity}</div>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="text-right p-4 hidden sm:table-cell">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link to="/products" className="text-gray-600 hover:text-black flex items-center">
                ← Continue Shopping
              </Link>
              <button className="btn btn-outline">Update Cart</button>
            </div>
          </div>

          {/* Order Summary */
         /* <div>
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="btn btn-primary w-full mb-4">Proceed to Checkout</button>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Have a promo code?</h3>
                <div className="flex">
                  <input type="text" placeholder="Enter code" className="flex-grow border p-2 focus:outline-none" />
                  <button className="bg-black text-white px-4 py-2 font-medium">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
 */

import { useCart } from "./CartContext"
import { Link } from "react-router-dom"
import { Trash2, Plus, Minus } from "lucide-react"

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 12.0
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden sm:table-cell">Price</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4 hidden sm:table-cell">Total</th>
                    <th className="p-4 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map((item) => (
                    <tr key={item.id + item.size}>
                      <td className="p-4">
                        <div className="flex items-center">
                          
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4 hidden sm:table-cell">${item.price.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex justify-center border border-gray-300 w-32 mx-auto">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-10 h-10 flex items-center justify-center border-r border-gray-300">
                            <Minus size={16} />
                          </button>
                          <div className="flex-1 h-10 flex items-center justify-center">{item.quantity}</div>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-10 h-10 flex items-center justify-center border-l border-gray-300">
                            <Plus size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="text-right p-4 hidden sm:table-cell">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-4 text-center">
                        <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-500">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <Link to="/products" className="text-gray-600 hover:text-black flex items-center">
                ← Continue Shopping
              </Link>
              <button className="btn btn-outline">Update Cart</button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                  <span>Total</span><span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="btn btn-primary w-full mb-4">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
