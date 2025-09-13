"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, Star, Store, Globe } from "lucide-react"
import { packagePricing } from "@/data/products"

export default function PackagePage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const packages = [
    {
      id: "package1",
      ...packagePricing.package1,
      popular: false,
      savings: 0,
      originalPrice: packagePricing.package1.basePrice + 200,
    },
    {
      id: "package2",
      ...packagePricing.package2,
      popular: true,
      savings: 500,
      originalPrice: packagePricing.package2.basePrice + 500,
    },
    {
      id: "package3",
      ...packagePricing.package3,
      popular: false,
      savings: 900,
      originalPrice: packagePricing.package3.basePrice + 900,
    },
  ]

  const handleOnlinePackageSelect = (pkg: any) => {
    setSelectedPackage(pkg.id)
    // Add to cart logic will go here
    console.log("Selected package for online purchase:", pkg)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Back to Home */}
        <div className="text-center mb-6">
          <Link href="/" className="text-amber-600 hover:text-amber-700 underline text-lg">
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ritual Packages / अनुष्ठान पैकेज</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            संपूर्ण अंतिम संस्कार के लिए विशेष पैकेज - बेहतर मूल्य पर सभी आवश्यक सामग्री
          </p>
          
          {/* Dual Purchase Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Globe className="w-5 h-5 mr-2" />
              Buy Online (Current Page)
            </Button>
            
            <div className="text-gray-500 font-medium">OR</div>
            
            <Link href="/package/offline">
              <Button 
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg"
              >
                <Store className="w-5 h-5 mr-2" />
                Buy Offline
              </Button>
            </Link>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative ${pkg.popular ? "ring-2 ring-amber-500 shadow-xl scale-105" : "shadow-lg"} ${
                selectedPackage === pkg.id ? "ring-2 ring-green-500" : ""
              } hover:shadow-xl transition-all duration-300`}
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
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-amber-900">₹{pkg.basePrice}</span>
                    {pkg.savings > 0 && (
                      <span className="text-lg text-gray-500 line-through">₹{pkg.originalPrice}</span>
                    )}
                  </div>
                  {pkg.savings > 0 && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Save ₹{pkg.savings}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 mt-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">4.8 Rating</span>
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  <h4 className="font-semibold text-gray-900 mb-3">Included Items ({pkg.items.length}):</h4>
                  {pkg.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.nameHindi}</div>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-5 h-5 object-cover rounded"
                          />
                        ) : (
                          <div className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center">
                            <span className="text-xs text-amber-600">•</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <div className="w-full space-y-2">
                  <Button
                    onClick={() => handleOnlinePackageSelect(pkg)}
                    className={`w-full ${
                      selectedPackage === pkg.id
                        ? "bg-green-600 hover:bg-green-700"
                        : pkg.popular
                          ? "bg-amber-500 hover:bg-amber-600"
                          : "bg-amber-900 hover:bg-amber-800"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {selectedPackage === pkg.id ? "Selected / चुना गया" : "Add to Cart Online"}
                  </Button>
                  
                  <Link href="/package/offline" className="block">
                    <Button 
                      variant="outline"
                      className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      <Store className="w-4 h-4 mr-2" />
                      Book Offline / ऑफलाइन बुक करें
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need custom items? / कस्टम सामग्री चाहिए?</p>
          <p className="text-sm text-gray-500">You can add individual items after selecting a package</p>
        </div>
      </div>
    </div>
  )
}