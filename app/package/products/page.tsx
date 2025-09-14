"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react"
import IndividualProducts from "@/components/individual-products"
import ProductCatalog from "@/components/product-catalog"

interface CartItem {
  id: string
  name: string
  nameHindi?: string
  price: number
  quantity: number
  type?: string
}

function PackageProductsContent() {
  const searchParams = useSearchParams()
  const selectedPackage = searchParams.get('package')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showProducts, setShowProducts] = useState(false)

  // If no package is selected, redirect back to package selection
  useEffect(() => {
    if (!selectedPackage) {
      window.location.href = '/package'
    }
  }, [selectedPackage])

  const addToCart = (item: any) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateCartQuantity = (id: string, change: number) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change)
          return newQuantity === 0 ? null : { ...item, quantity: newQuantity }
        }
        return item
      }).filter(Boolean) as CartItem[]
    })
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Package Selected</h2>
          <p className="text-gray-600 mb-6">Please select a package first to add products.</p>
          <Link href="/package">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Select Package
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/package">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Packages
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Add Additional Products</h1>
              <p className="text-gray-600">Selected Package: <span className="font-semibold text-amber-600">{selectedPackage}</span></p>
            </div>
          </div>
          
          {cartItems.length > 0 && (
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">
                Total: ₹{getTotalPrice()}
              </p>
              <p className="text-sm text-gray-600">
                {cartItems.reduce((total, item) => total + item.quantity, 0)} items
              </p>
            </div>
          )}
        </div>

        {/* Package Confirmation */}
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Package Selected: {selectedPackage}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700 mb-4">
              Your package includes all essential items for the ceremony. You can add additional products below if needed.
            </p>
            <Button 
              onClick={() => setShowProducts(!showProducts)}
              className="bg-amber-600 hover:bg-amber-700"
            >
              {showProducts ? 'Hide Products' : 'Want to add more products?'}
              <Plus className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Products Section */}
        {showProducts && (
          <div className="space-y-8">
            {/* Shopping Cart Summary */}
            {cartItems.length > 0 && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Additional Items ({cartItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          {item.nameHindi && (
                            <p className="text-sm text-gray-600">{item.nameHindi}</p>
                          )}
                          <p className="text-sm text-green-600 font-medium">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCartQuantity(item.id, -1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCartQuantity(item.id, 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Additional Products Total:</span>
                        <span className="font-bold text-lg text-green-600">₹{getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Individual Products */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Individual Products</h2>
              <IndividualProducts 
                addToCart={addToCart}
                cartItems={cartItems}
              />
            </div>

            {/* Product Catalog */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Categories</h2>
              <ProductCatalog addToCart={addToCart} />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-12 flex gap-4 justify-center">
          <Link href="/package">
            <Button variant="outline" size="lg">
              Change Package
            </Button>
          </Link>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Proceed to Checkout
            {cartItems.length > 0 && (
              <span className="ml-2 bg-green-800 text-white px-2 py-1 rounded-full text-xs">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function PackageProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <PackageProductsContent />
    </Suspense>
  )
}