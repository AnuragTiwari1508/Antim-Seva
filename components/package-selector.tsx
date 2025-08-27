"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, Star } from "lucide-react"
import { packagePricing } from "@/data/products"

interface PackageSelectorProps {
  onPackageSelect: (packageId: string, items: any[]) => void
}

export default function PackageSelector({ onPackageSelect }: PackageSelectorProps) {
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

  const handlePackageSelect = (pkg: any) => {
    setSelectedPackage(pkg.id)
    onPackageSelect(pkg.id, pkg.items)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ritual Packages / अनुष्ठान पैकेज</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            संपूर्ण अंतिम संस्कार के लिए विशेष पैकेज - बेहतर मूल्य पर सभी आवश्यक सामग्री
          </p>
        </div>

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
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Included Items ({pkg.id === "package1" ? "29" : pkg.id === "package2" ? "42" : "67"}):
                  </h4>
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
                <Button
                  onClick={() => handlePackageSelect(pkg)}
                  className={`w-full ${
                    selectedPackage === pkg.id
                      ? "bg-green-600 hover:bg-green-700"
                      : pkg.popular
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "bg-amber-900 hover:bg-amber-800"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {selectedPackage === pkg.id ? "Selected / चुना गया" : "Select Package / पैकेज चुनें"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need custom items? / कस्टम सामग्री चाहिए?</p>
          <p className="text-sm text-gray-500">You can add individual items after selecting a package</p>
        </div>
      </div>
    </section>
  )
}
