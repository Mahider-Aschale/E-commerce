"use client"

import { useState } from "react"
import { Filter, Grid, List } from "lucide-react"
import ProductCard from "../compont/productCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { Product } from "../type"
import { Link } from "react-router-dom"
const ProductListPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")


  // Mock products data
  const products: Product[] = [
    {id: 1,
      name: "Modern habsha",
      price: 8900,
      image: "/image/women-1.jpg",
      rating:4.1,
      reviewCount: 131,
      category: "women",
    },
{
      id: 2,
      name: "Classic Abaya",
      price: 7200,
      image: "/image/women-2.jpg",
      rating: 4.5,
      reviewCount:98,
      category: "women",
    }, 
    {
      id: 3,
      name: "modern habsha",
      price: 8500,
      image: "/image/women-3.jpg",
      rating: 4.2,
      reviewCount: 342,
      category: "women",
    },
    {
      id: 4,
      name: "modern habsha",
      price: 6900,
      image: "/image/women-4.jpg",
      rating: 4.9,
      reviewCount: 122,
      category: "women",
    },
    {
      id: 5,
      name: "Modern Ethiopian Suit",
      price: 9500,
      image: "/image/men-1.jpg",
      rating: 4.7,
      reviewCount: 2,
      category: "men",
    },
    {
      id: 6,
      name: "White Traditional Shirt",
      price: 4200,
      image: "/image/men-2.jpg",
      rating: 4.2,
      reviewCount: 54,
      category: "men",
    },
   
    {
      id: 7,
      name: "Embroidered habsha",
      price: 11000,
      image: "/image/men-3.jpg",
      rating: 4.8,
      reviewCount: 87,
      category: "men",
    },  
    {
      id: 8,
      name: "Casual Linen Shirt",
      price: 7500,
      image: "/image/men-4.jpg",
      rating: 4.0,
      reviewCount: 39,
      category: "men",
    
  }]

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Category</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="category-clothing" />
            <Label htmlFor="category-clothing">Clothing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="category-shoes" />
            <Label htmlFor="category-shoes">Shoes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="category-accessories" />
            <Label htmlFor="category-accessories">Accessories</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Price</h3>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="price-all" />
            <Label htmlFor="price-all">All Prices</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="under-50" id="price-under-50" />
            <Label htmlFor="price-under-50">Under $50</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50-100" id="price-50-100" />
            <Label htmlFor="price-50-100">$50 - $100</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="over-100" id="price-over-100" />
            <Label htmlFor="price-over-100">Over $100</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm">
            XS
          </Button>
          <Button variant="outline" size="sm">
            S
          </Button>
          <Button variant="outline" size="sm">
            M
          </Button>
          <Button variant="outline" size="sm">
            L
          </Button>
          <Button variant="outline" size="sm">
            XL
          </Button>
          <Button variant="outline" size="sm">
            XXL
          </Button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Color</h3>
        <div className="flex flex-wrap gap-2">
          <Button className="w-8 h-8 rounded-full p-0 bg-black" variant="outline" />
          <Button className="w-8 h-8 rounded-full p-0 bg-white" variant="outline" />
          <Button className="w-8 h-8 rounded-full p-0 bg-gray-500" variant="outline" />
          <Button className="w-8 h-8 rounded-full p-0 bg-red-500" variant="outline" />
          <Button className="w-8 h-8 rounded-full p-0 bg-blue-500" variant="outline" />
          <Button className="w-8 h-8 rounded-full p-0 bg-green-500" variant="outline" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-1 py-6 flex  justify-between">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <h2 className="font-bold text-lg mb-6">Filters</h2>
            <FilterContent />
          </SheetContent>
        </Sheet>

        {/* Filters Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-bold text-lg mb-6">Filters</h2>
              <FilterContent />
            </CardContent>
          </Card>
        </div>

    
              
              

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                        />
                      </div>
                      <div className="sm:w-2/3 p-6 flex flex-col">
                        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm ml-1">{product.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                        </div>
                        <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
                        
                        <div className="mt-auto flex space-x-2">
                          <Button>Add to Cart</Button>
                          <Link to="/product:id" className="btn btn-primary">
                              View Details
                           </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
    
  )
}

export default ProductListPage

