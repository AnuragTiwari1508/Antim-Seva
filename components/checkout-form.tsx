"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, CreditCard, Banknote } from "lucide-react"
import IndoreMap from "./indore-map"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

interface CheckoutFormProps {
  cartItems: any[]
  total: number
  onClose: () => void
  onComplete: () => void
}

export default function CheckoutForm({ cartItems, total, onClose, onComplete }: CheckoutFormProps) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
    location: { lat: 22.7196, lng: 75.8577 }, // Default to Indore center
    locationAddress: "", // Human-readable address
  })
  
  // Pre-fill form with user data if authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        address: user.address || prev.address
      }))
    }
  }, [isAuthenticated, user])
  
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  
  const handleLocationSelect = (location: { lat: number; lng: number }, address?: string) => {
    setFormData(prev => ({
      ...prev,
      location,
      locationAddress: address || ""
    }))
    
    // Clear validation error when location is selected
    if (validationErrors.location) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors.location
        return newErrors
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handlePaymentMethodChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
    }))
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required / नाम आवश्यक है"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required / फोन नंबर आवश्यक है"
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid 10-digit phone number / कृपया 10 अंकों का सही फोन नंबर दर्ज करें"
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address / कृपया वैध ईमेल पता दर्ज करें"
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required / पता आवश्यक है"
    }

    if (!formData.location || (!formData.location.lat && !formData.location.lng)) {
      errors.location = "Please select your location on the map / कृपया मानचित्र पर अपना स्थान चुनें"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Process the order
      console.log("Order submitted:", { 
        items: cartItems, 
        total, 
        customerInfo: {
          ...formData,
          deliveryLocation: formData.locationAddress || `${formData.location.lat}, ${formData.location.lng}`
        }
      })
      
      // Show success message
      alert("Your order has been placed successfully! / आपका ऑर्डर सफलतापूर्वक दर्ज कर लिया गया है!")
      
      // Close checkout and clear cart
      onComplete()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-amber-900 text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Checkout / चेकआउट</h2>
            <button onClick={onClose} className="p-1 hover:bg-amber-800 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {!isAuthenticated ? (
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Please login to continue / जारी रखने के लिए कृपया लॉगिन करें</h3>
            <p className="mb-4 text-gray-600">You need to be logged in to place an order / ऑर्डर करने के लिए आपको लॉगिन करना होगा</p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => router.push('/login')}
                className="bg-amber-900 hover:bg-amber-800 text-white"
              >
                Login / लॉगिन
              </Button>
              <Button 
                onClick={() => router.push('/register')}
                variant="outline"
                className="border-amber-900 text-amber-900 hover:bg-amber-50"
              >
                Register / रजिस्टर
              </Button>
            </div>
          </div>
        ) : (

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Information Form */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Information / ग्राहक जानकारी</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name / पूरा नाम *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className={validationErrors.name ? "border-red-500" : ""}
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number / फोन नंबर *</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className={validationErrors.phone ? "border-red-500" : ""}
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address / ईमेल पता</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className={validationErrors.email ? "border-red-500" : ""}
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address">Detailed Address / विस्तृत पता *</Label>
                  <Textarea 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                    className={validationErrors.address ? "border-red-500" : ""}
                  />
                  {validationErrors.address && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.address}</p>
                  )}
                </div>

                <div>
                  <Label>Payment Method / भुगतान विधि *</Label>
                  <RadioGroup 
                    value={formData.paymentMethod} 
                    onValueChange={handlePaymentMethodChange}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                        <Banknote className="w-4 h-4" />
                        Cash on Delivery / डिलीवरी पर नकद भुगतान
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-4 h-4" />
                        Online Payment / ऑनलाइन भुगतान
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 text-lg">
                    Place Order / ऑर्डर करें
                  </Button>
                </div>
              </form>
            </div>

            {/* Map and Order Summary */}
            <div className="space-y-6">
              {/* Map for location selection */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Select Your Location / अपना स्थान चुनें *</h3>
                <p className="text-sm text-gray-600 mb-2">Click on the map to select your location in Indore / इंदौर में अपना स्थान चुनने के लिए मानचित्र पर क्लिक करें</p>
                <IndoreMap 
                  onLocationSelect={handleLocationSelect}
                  initialLocation={formData.location}
                  error={validationErrors.location}
                />
                
                {/* Display selected location address */}
                {formData.locationAddress && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-green-800 mb-1">
                          Delivery Location / डिलीवरी का स्थान:
                        </p>
                        <p className="text-sm text-green-700">{formData.locationAddress}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Order Summary / ऑर्डर सारांश</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.name} {item.nameHindi && `(${item.nameHindi})`} x {item.quantity}
                        </span>
                        <span className="font-semibold">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-amber-900">
                      <span>Total Amount / कुल राशि:</span>
                      <span>₹{total}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Free delivery in Indore / इंदौर में मुफ्त डिलीवरी</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}