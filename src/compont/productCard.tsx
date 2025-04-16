import { Link } from "react-router-dom"
import { Heart } from "lucide-react"
import type { Product } from "../type"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative mb-4 overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image }
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"/>
          </Link> 
       
        <button
          className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>

      <div>
        <Link to={`/product/${product.id}`} className="block mb-1">
          <h3 className="text-lg font-medium">{product.name}</h3>
        </Link>
        <div className="flex justify-between items-center">
          <p className="font-bold">{product.price.toFixed(2)} ETB</p>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="text-sm ml-1 text-gray-500">{product.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
