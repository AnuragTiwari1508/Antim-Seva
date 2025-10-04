"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProductCatalog from "@/components/product-catalog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Plus, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Cart from "@/components/cart"

export default function PackageProductPage() {
  const router = useRouter()
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [showProducts, setShowProducts] = useState(false)
  const [packageAddedToCart, setPackageAddedToCart] = useState(false)
  const { addToCart, cartItems, updateCartItem, removeFromCart, getTotalPrice, openCart, isCartOpen, closeCart, clearCart } = useCart()

  useEffect(() => {
    // Get selected package from localStorage
    const packageData = localStorage.getItem('selectedPackage')
    if (packageData) {
      const parsed = JSON.parse(packageData)
      // Check if data is not too old (1 hour)
      if (parsed.timestamp && Date.now() - parsed.timestamp < 3600000) {
        setSelectedPackage(parsed)
      } else {
        // Redirect to package page if data is old
        router.push('/package')
      }
    } else {
      // Redirect to package page if no data
      router.push('/package')
    }
  }, [router])

  // Add package to cart automatically when package is selected
  useEffect(() => {
    if (selectedPackage && !packageAddedToCart) {
      const packageId = `package-${selectedPackage.name.toLowerCase().replace(/\s+/g, '-')}`
      const existingPackage = cartItems.find(item => item.id === packageId)
      
      if (!existingPackage) {
        // Add the selected package as a single item to cart
        const packageItem = {
          id: packageId,
          name: selectedPackage.name,
          nameHindi: selectedPackage.nameHindi,
          price: selectedPackage.price,
          quantity: 1,
          type: 'package'
        }
        addToCart(packageItem)
      }
      setPackageAddedToCart(true)
    }
  }, [selectedPackage, cartItems, addToCart, packageAddedToCart])

  const handleAddProduct = (product: any) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      nameHindi: product.nameHindi,
      price: product.price,
      quantity: 1,
      type: 'individual-product'
    }
    addToCart(cartItem)
  }

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId)
  }

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    updateCartItem(productId, quantity)
  }

  // Get additional products (non-package items) from cart
  const getAdditionalProducts = () => {
    return cartItems.filter(item => item.type === 'individual-product')
  }

  // Get package item from cart  
  const getPackageItem = () => {
    return cartItems.find(item => item.type === 'package')
  }

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          <p className="text-gray-600">Please wait while we load your package details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Header */}
      <Header
        activeSection="packages"
        setActiveSection={() => {}}
        cartItemsCount={cartItems.length}
        onCartClick={openCart}
      />
      
      {/* Package Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => router.push('/package')}
                className="flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Packages / पैकेज पर वापस जाएं
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {selectedPackage?.name} / {selectedPackage?.nameHindi}
                </h1>
                <p className="text-gray-600">Add more products to customize your package / अपने पैकेज को कस्टमाइज़ करने के लिए और उत्पाद जोड़ें</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Package Items: {selectedPackage.items?.length || 0} + Additional: {getAdditionalProducts().length}</p>
              <p className="text-lg font-bold text-amber-600">Total: ₹{getTotalPrice()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Package Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {selectedPackage.items?.map((item: any, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        ✓
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.nameHindi}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Items */}
                {getAdditionalProducts().length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Additional Items:</h4>
                    <div className="space-y-2">
                      {getAdditionalProducts().map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            +{item.quantity}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-gray-500">₹{item.price} each</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 p-0"
                            >
                              -
                            </Button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <Button
                    onClick={() => setShowProducts(!showProducts)}
                    variant="outline"
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {showProducts ? "Hide Products" : "Want to add some more products?"}
                  </Button>
                </div>

                <Button 
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => openCart()}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Cart & Checkout (₹{getTotalPrice()})
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2">
            {showProducts ? (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Add More Products</h2>
                  <p className="text-gray-600">Browse our complete collection to add more items to your package</p>
                </div>
                <ProductCatalog addToCart={handleAddProduct} />
              </div>
            ) : (
              <div className="text-center py-16">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Package Selected</h3>
                <p className="text-gray-600 mb-6">
                  Your {selectedPackage.name} package is ready. Click "Add More Products" to browse additional items.
                </p>
                <Button
                  onClick={() => setShowProducts(true)}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={closeCart}
        items={cartItems}
        updateItem={updateCartItem}
        total={getTotalPrice()}
        clearCart={clearCart}
      />
    </div>
  )
}