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
  const [isProcessing, setIsProcessing] = useState(false)

  // Load Razorpay script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }
  
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
    console.log('🔍 Validating form...', formData)
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

    console.log('📋 Validation result:', { errors, isValid: Object.keys(errors).length === 0 })
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🔄 Form submitted!', { formData, total, cartItems })
    
    if (!validateForm()) {
      console.log('❌ Form validation failed', validationErrors)
      // Scroll to first error
      const firstErrorField = document.querySelector('.border-red-500')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    console.log('✅ Form validation passed, processing payment...')
    setIsProcessing(true)

    try {
      if (formData.paymentMethod === 'cash') {
        console.log('💰 Processing cash on delivery...')
        // Handle Cash on Delivery
        await handleCashOnDelivery()
      } else {
        console.log('💳 Processing online payment...')
        // Handle Online Payment
        await handleOnlinePayment()
      }
    } catch (error) {
      console.error('❌ Payment processing error:', error)
      alert('Payment processing failed. Please try again. / भुगतान प्रक्रिया असफल। कृपया पुनः प्रयास करें।')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCashOnDelivery = async () => {
    // Save order to database (you can add API call here)
    console.log("Cash on Delivery Order:", { 
      items: cartItems, 
      total, 
      customerInfo: {
        ...formData,
        deliveryLocation: formData.locationAddress || `${formData.location.lat}, ${formData.location.lng}`
      },
      paymentMethod: 'cash',
      paymentStatus: 'pending'
    })
    
    // Show success message
    alert("आपका ऑर्डर सफलतापूर्वक दर्ज हो गया है! हम जल्द ही आपसे संपर्क करेंगे। / Your order has been placed successfully! We will contact you soon.")
    
    // Close checkout and clear cart
    onComplete()
  }

  const handleOnlinePayment = async () => {
    try {
      // Load Razorpay script
      const razorpayLoaded = await loadRazorpay()
      if (!razorpayLoaded) {
        throw new Error('Razorpay SDK failed to load')
      }

      // Create order
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          currency: 'INR'
        })
      })

      const order = await response.json()

      if (!response.ok) {
        throw new Error(order.error || 'Failed to create order')
      }

      // Configure Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_lEQBZ5fwEMtoMF',
        amount: order.amount,
        currency: order.currency,
        name: 'Antim Sewa',
        description: 'Religious Ceremony Items',
        order_id: order.id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#92400e'
        },
        handler: async (response: any) => {
          try {
            // Verify payment
            const verificationResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
              })
            })

            if (verificationResponse.ok) {
              // Save successful order
              console.log("Online Payment Order:", { 
                items: cartItems, 
                total, 
                customerInfo: {
                  ...formData,
                  deliveryLocation: formData.locationAddress || `${formData.location.lat}, ${formData.location.lng}`
                },
                paymentMethod: 'online',
                paymentStatus: 'completed',
                paymentId: response.razorpay_payment_id
              })
              
              alert("भुगतान सफल! आपका ऑर्डर कन्फर्म हो गया है। / Payment successful! Your order is confirmed.")
              onComplete()
            } else {
              throw new Error('Payment verification failed')
            }
          } catch (error) {
            console.error('Payment verification error:', error)
            alert('Payment verification failed. Please contact support. / भुगतान सत्यापन असफल। कृपया सहायता से संपर्क करें।')
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
          }
        }
      }

      // @ts-ignore
      const razorpay = new window.Razorpay(options)
      razorpay.open()

    } catch (error) {
      console.error('Online payment error:', error)
      throw error
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
          <div className="p-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-amber-800">
                Guest Checkout Available / गेस्ट चेकआउट उपलब्ध
              </h3>
              <p className="text-amber-700 text-sm mb-4">
                You can checkout as a guest or login for a faster experience / 
                आप गेस्ट के रूप में चेकआउट कर सकते हैं या तेज़ अनुभव के लिए लॉगिन कर सकते हैं
              </p>
              <div className="flex justify-center gap-4 mb-4">
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
              <div className="text-center">
                <Button 
                  onClick={() => setIsCheckoutOpen(false)}
                  variant="link"
                  className="text-amber-800 hover:text-amber-900"
                >
                  Continue as Guest / गेस्ट के रूप में जारी रखें
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Show form for both authenticated and guest users for testing */}
        {(isAuthenticated || !isAuthenticated) ? (

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
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 text-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Processing... / प्रक्रिया जारी...
                      </div>
                    ) : formData.paymentMethod === 'cash' ? (
                      'Place Order / ऑर्डर करें'
                    ) : (
                      'Proceed to Pay / भुगतान करें'
                    )}
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
        ) : null}
      </div>
    </div>
  )
}