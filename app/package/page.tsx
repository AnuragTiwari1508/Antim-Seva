"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Store, ArrowRight, Phone, MessageCircle } from "lucide-react"

export default function PackagePage() {
  const [activeSection, setActiveSection] = useState("services")

  return (
    <>
    {/* Header */}
    <Header
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            cartItemsCount={0}
            onCartClick={() => { }}
          />
    
    {/* Redirect Message Section */}
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Funeral Packages / अंतिम संस्कार पैकेज
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have updated our service to provide you with better products and pricing
            <br />
            <span className="text-amber-700 font-medium">हमने बेहतर उत्पाद और मूल्य प्रदान करने के लिए अपनी सेवा को अपडेट किया है</span>
          </p>
        </div>

        {/* Package Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Basic Package */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-xl text-amber-900 mb-2">
                Basic Package
              </CardTitle>
              <p className="text-gray-600">मूलभूत पैकेज</p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <div className="text-3xl font-bold text-amber-900">₹5,100</div>
                <p className="text-sm text-gray-600">+ Delivery Charges</p>
                
                <div className="space-y-2 text-left bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900">Includes:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Essential Items Only</li>
                    <li>• Basic Requirements</li>
                    <li>• Quality Assured</li>
                    <li>• Home Delivery</li>
                  </ul>
                </div>
              </div>

              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                onClick={() => {
                  const packageData = {
                    name: 'Basic Package',
                    price: 5100,
                    originalPrice: 5500,
                    description: 'Essential funeral package with all basic items'
                  };
                  localStorage.setItem('selectedPackage', JSON.stringify(packageData));
                  window.location.href = '/package/product';
                }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Package / पैकेज देखें
              </Button>
            </CardContent>
          </Card>

          {/* Standard Package */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 ring-2 ring-orange-400">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular / सबसे लोकप्रिय
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl text-orange-900 mb-2">
                Standard Package
              </CardTitle>
              <p className="text-gray-600">मानक पैकेज</p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-3xl font-bold text-orange-900">₹7,500</div>
                  <div className="text-lg text-gray-500 line-through">₹8,000</div>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Save ₹500
                </div>
                
                <div className="space-y-2 text-left bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Includes:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All Basic Items +</li>
                    <li>• Additional Puja Materials</li>
                    <li>• Premium Quality</li>
                    <li>• Priority Delivery</li>
                  </ul>
                </div>
              </div>

              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
                onClick={() => {
                  const packageData = {
                    name: 'Standard Package',
                    price: 7500,
                    originalPrice: 8000,
                    description: 'Popular package with all basic items plus additional puja materials'
                  };
                  localStorage.setItem('selectedPackage', JSON.stringify(packageData));
                  window.location.href = '/package/product';
                }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Package / पैकेج देखें
              </Button>
            </CardContent>
          </Card>

          {/* Premium Package */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-purple-900 mb-2">
                Premium Package
              </CardTitle>
              <p className="text-gray-600">प्रीमियम पैकेज</p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-3xl font-bold text-purple-900">₹11,000</div>
                  <div className="text-lg text-gray-500 line-through">₹11,900</div>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Save ₹900
                </div>
                
                <div className="space-y-2 text-left bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">Includes:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Complete Set</li>
                    <li>• All Premium Items</li>
                    <li>• Luxury Quality</li>
                    <li>• Same Day Delivery</li>
                  </ul>
                </div>
              </div>

              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
                onClick={() => {
                  const packageData = {
                    name: 'Premium Package',
                    price: 11000,
                    originalPrice: 11900,
                    description: 'Complete premium package with all luxury items and same day delivery'
                  };
                  localStorage.setItem('selectedPackage', JSON.stringify(packageData));
                  window.location.href = '/package/product';
                }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Package / पैकेज देखें
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Funeral Samagri Basic Kit Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Funeral Samagri - Basic Kit
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Complete funeral kit with all 38 essential items
              <br />
              <span className="text-amber-800 font-medium">सभी 38 आवश्यक वस्तुओं के साथ पूर्ण अंतिम संस्कार किट</span>
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-3xl font-bold text-amber-900">₹5,100</div>
              <div className="text-gray-600">+ Delivery (₹100-300)</div>
            </div>
            
            <Link href="/funeral-samagri">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                <Package className="w-5 h-5 mr-2" />
                View Basic Kit / किट देखें
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Need Help Choosing? / चयन में सहायता चाहिए?
          </h3>
          <p className="text-gray-600 mb-8">
            Our team is available 24/7 to help you during this difficult time
            <br />
            <span className="text-sm">इस कठिन समय में सहायता के लिए हमारी टीम 24/7 उपलब्ध है</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919179677292"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 91796 77292
            </a>
            <a
              href="https://wa.me/9179677292"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
    </>
  )
}