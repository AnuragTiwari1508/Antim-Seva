"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductCatalog from "@/components/product-catalog"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Cart from "@/components/cart"

import UserOptions from "@/components/user-options"
import PackageSelector from "@/components/package-selector"
import IndividualProducts from "@/components/individual-products"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Add state for user options and selected items
  const [userOptions, setUserOptions] = useState({})
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedItems, setSelectedItems] = useState({})

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p))
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateCartItem = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {activeSection === "home" && (
          <>
            <Hero />
            <UserOptions onOptionsChange={setUserOptions} />
            <PackageSelector
              onPackageSelect={(packageId, items) => {
                setSelectedPackage(packageId)
                // Clear individual selections when package is selected
                setSelectedItems({})
                
                // Add package to cart automatically
                const packageData = {
                  id: packageId,
                  name: packageId === "package1" ? "Basic Package" : packageId === "package2" ? "Standard Package" : "Premium Package",
                  nameHindi: packageId === "package1" ? "मूलभूत पैकेज" : packageId === "package2" ? "मानक पैकेज" : "प्रीमियम पैकेज",
                  price: packageId === "package1" ? 899 : packageId === "package2" ? 1499 : 2299,
                  type: "package"
                }
                addToCart(packageData)
              }}
            />
            <IndividualProducts
              selectedItems={selectedItems}
              onItemChange={(itemId, quantity) => {
                setSelectedItems((prev) => ({
                  ...prev,
                  [itemId]: quantity,
                }))
              }}
              addToCart={addToCart}
            />
          </>
        )}
        {activeSection === "products" && <ProductCatalog addToCart={addToCart} />}
        {activeSection === "packages" && (
          <>
            <UserOptions onOptionsChange={setUserOptions} />
            <PackageSelector
              onPackageSelect={(packageId, items) => {
                setSelectedPackage(packageId)
                setSelectedItems({})
                
                // Add package to cart automatically
                const packageData = {
                  id: packageId,
                  name: packageId === "package1" ? "Basic Package" : packageId === "package2" ? "Standard Package" : "Premium Package",
                  nameHindi: packageId === "package1" ? "मूलभूत पैकेज" : packageId === "package2" ? "मानक पैकेज" : "प्रीमियम पैकेज",
                  price: packageId === "package1" ? 899 : packageId === "package2" ? 1499 : 2299,
                  type: "package"
                }
                addToCart(packageData)
              }}
            />
            <IndividualProducts
              selectedItems={selectedItems}
              onItemChange={(itemId, quantity) => {
                setSelectedItems((prev) => ({
                  ...prev,
                  [itemId]: quantity,
                }))
              }}
              addToCart={addToCart}
            />
          </>
        )}
        {activeSection === "services" && <Services />}
        {activeSection === "about" && <AboutUs />}
        {activeSection === "faq" && <FAQ />}
      </main>

      <Footer />
      <WhatsAppButton />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        updateItem={updateCartItem}
        total={getTotalPrice()}
        clearCart={clearCart}
      />
    </div>
  )
}
