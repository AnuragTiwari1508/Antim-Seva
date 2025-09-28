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

        {/* Main Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Basic Kit Option */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-xl text-amber-900 mb-2">
                Funeral Samagri - Basic Kit
              </CardTitle>
              <p className="text-gray-600">मूलभूत अंतिम संस्कार किट</p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <div className="text-3xl font-bold text-amber-900">₹5,100</div>
                <p className="text-sm text-gray-600">+ Delivery Charges (₹100-300)</p>
                
                <div className="space-y-2 text-left bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900">Includes:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All 38 Essential Items</li>
                    <li>• High Quality Guaranteed</li>
                    <li>• Complete Kit - Nothing Missing</li>
                    <li>• Fast Home Delivery</li>
                  </ul>
                </div>
              </div>

              <Link href="/funeral-samagri" className="block">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Basic Kit / किट देखें
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Offline Option */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl text-orange-900 mb-2">
                Offline Booking
              </CardTitle>
              <p className="text-gray-600">ऑफलाइन बुकिंग</p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  For custom requirements or personal consultation
                </p>
                <p className="text-gray-600 text-sm">
                  कस्टम आवश्यकताओं या व्यक्तिगत परामर्श के लिए
                </p>
                
                <div className="space-y-2 text-left bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Personal Consultation</li>
                    <li>• Custom Package Options</li>
                    <li>• Direct Service</li>
                    <li>• Immediate Support</li>
                  </ul>
                </div>
              </div>

              <Link href="/package/offline" className="block">
                <Button 
                  variant="outline"
                  className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 py-3 text-lg"
                >
                  <Store className="w-5 h-5 mr-2" />
                  Book Offline / ऑफलाइन बुक करें
                </Button>
              </Link>
            </CardContent>
          </Card>
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