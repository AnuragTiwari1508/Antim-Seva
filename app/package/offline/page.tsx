"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { offlineShops, OfflineShop } from "@/data/offline-shops"
import { packagePricing } from "@/data/products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Clock, User, Phone, Star, Store, ArrowLeft, Package, Loader2, CheckCircle, Copy, Share2, Calendar } from "lucide-react"
import Image from "next/image"

export default function OfflinePackagePage() {
  const { data: session } = useSession()
  const [selectedShop, setSelectedShop] = useState<OfflineShop | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showTokenSuccess, setShowTokenSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [generatedToken, setGeneratedToken] = useState("")
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    phone: session?.user?.phone || "",
    address: session?.user?.address || "",
    preferredDate: "",
    notes: ""
  })

  const packages = [
    {
      id: "package1",
      ...packagePricing.package1,
      popular: false,
    },
    {
      id: "package2", 
      ...packagePricing.package2,
      popular: true,
    },
    {
      id: "package3",
      ...packagePricing.package3,
      popular: false,
    },
  ]

  const handleShopSelect = (shop: OfflineShop) => {
    setSelectedShop(shop)
  }

  const handlePackageSelect = (pkg: any) => {
    setSelectedPackage(pkg)
    if (selectedShop) {
      setShowBookingForm(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/offline-package", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          shopId: selectedShop?.id,
          shopName: selectedShop?.name,
          customerDetails: formData,
          packageDetails: selectedPackage
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create booking")
      }

      setGeneratedToken(data.tokenNumber)
      setShowBookingForm(false)
      setShowTokenSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCopyToken = async () => {
    try {
      await navigator.clipboard.writeText(generatedToken)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy token:', err)
    }
  }

  const resetAll = () => {
    setSelectedShop(null)
    setSelectedPackage(null)
    setShowBookingForm(false)
    setShowTokenSuccess(false)
    setGeneratedToken("")
    setError("")
  }

  // Step 1: Shop Selection
  if (!selectedShop) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-8">
            <Link href="/package">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Packages
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Offline Shop</h1>
            <p className="text-lg text-gray-600">Select a shop to book your ritual materials offline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offlineShops.map((shop) => (
              <Card key={shop.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleShopSelect(shop)}>
                <div className="relative h-48 w-full">
                  <Image
                    src={shop.photo}
                    alt={shop.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-500">
                    Available
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900">{shop.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.5 Rating • {shop.speciality}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <User className="w-4 h-4 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Shopkeeper</p>
                      <p className="text-sm text-gray-600">{shop.shopkeeperName}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Address</p>
                      <p className="text-sm text-gray-600">{shop.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{shop.timings}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{shop.contact}</span>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-4">
                    Select Shop / दुकान चुनें
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Step 2: Package Selection
  if (selectedShop && !selectedPackage && !showBookingForm) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-8">
            <Button variant="outline" className="mb-4" onClick={() => setSelectedShop(null)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop Selection
            </Button>
            
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Select Package</h1>
              <p className="text-lg text-gray-600 mb-4">Choose a ritual package for {selectedShop.name}</p>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">{selectedShop.name}</p>
                      <p className="text-sm text-blue-700">{selectedShop.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`hover:shadow-lg transition-all cursor-pointer ${
                  pkg.popular ? "ring-2 ring-amber-500 shadow-xl scale-105" : "shadow-lg"
                }`}
                onClick={() => handlePackageSelect(pkg)}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1">
                    Most Popular / सबसे लोकप्रिय
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">
                    {pkg.name}
                    <div className="text-sm font-normal text-gray-600 mt-1">{pkg.nameHindi}</div>
                  </CardTitle>

                  <div className="text-center">
                    <span className="text-3xl font-bold text-amber-900">₹{pkg.basePrice}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8 Rating</span>
                  </div>
                </CardHeader>

                <CardContent className="px-6">
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <h4 className="font-semibold text-gray-900 mb-3">Items ({pkg.items.length}):</h4>
                    {pkg.items.slice(0, 5).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                    {pkg.items.length > 5 && (
                      <p className="text-xs text-gray-500">+{pkg.items.length - 5} more items</p>
                    )}
                  </div>
                </CardContent>

                <CardContent className="pt-0">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    <Package className="w-4 h-4 mr-2" />
                    Select Package / पैकेज चुनें
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Booking Form
  if (showBookingForm) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="mb-8">
            <Button variant="outline" className="mb-4" onClick={() => setShowBookingForm(false)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Package Selection
            </Button>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Booking</h1>
            <p className="text-lg text-gray-600">Fill in your details to get your token</p>
          </div>

          <div className="space-y-6">
            {/* Shop & Package Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    Selected Shop
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{selectedShop?.name}</p>
                    <p className="text-sm text-gray-600">{selectedShop?.address}</p>
                    <p className="text-sm text-gray-600">Contact: {selectedShop?.contact}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Selected Package
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{selectedPackage?.name}</p>
                    <p className="text-sm text-gray-600">Items: {selectedPackage?.items?.length || 0}</p>
                    <p className="text-sm text-gray-600">Price: ₹{selectedPackage?.basePrice}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Customer Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address (optional)"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredDate">Preferred Collection Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or notes (optional)"
                      rows={3}
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating Token...
                      </>
                    ) : (
                      "Submit & Get Token"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Step 4: Token Success
  if (showTokenSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-2" />
                <h2 className="text-2xl font-bold text-gray-900">Token Generated!</h2>
                <p className="text-gray-600">Your offline booking has been confirmed</p>
              </div>

              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-center">
                    <Badge variant="secondary" className="text-2xl px-4 py-2 bg-amber-100 text-amber-800">
                      {generatedToken}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Store className="w-4 h-4 text-gray-500" />
                    <span>{selectedShop?.name}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Package className="w-4 h-4 text-gray-500" />
                    <span>{selectedPackage?.name}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Booked: {new Date().toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    onClick={handleCopyToken}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>

                <Link href="/package">
                  <Button 
                    onClick={resetAll}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Book Another Package
                  </Button>
                </Link>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Important:</strong> Please save this token number. Show it at the shop when collecting your items.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}