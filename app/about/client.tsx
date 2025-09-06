"use client"

import { Heart, Shield, Clock, MapPin, Phone, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function AboutPageClient() {
  const [activeSection, setActiveSection] = useState("about")
  
  return (
    <>
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemsCount={0}
        onCartClick={() => {}}
      />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="bg-amber-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Antim Seva
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
                सम्मान और श्रद्धा के साथ अंतिम संस्कार की सभी आवश्यक सामग्री और सेवाएं
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Antim Seva was founded with a simple yet profound mission: to provide dignified, 
                  compassionate funeral services during life's most difficult moments. We understand 
                  that losing a loved one is one of the most challenging experiences a family can face.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  हमारी सेवा का उद्देश्य परिवारों को इस कठिन समय में सहारा देना है। हम धार्मिक 
                  विधि-विधान के अनुसार सभी आवश्यक सामग्री और सेवाएं प्रदान करते हैं।
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-gray-700">Provide compassionate support to grieving families</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-500 mt-1" />
                    <span className="text-gray-700">Ensure dignified and respectful funeral services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-green-500 mt-1" />
                    <span className="text-gray-700">Available 24/7 for immediate assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-lg p-8 shadow-md">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Compassion</h3>
                <p className="text-gray-600">
                  We approach every family with empathy, understanding, and genuine care during their time of loss.
                </p>
              </div>
              <div className="text-center bg-white rounded-lg p-8 shadow-md">
                <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dignity</h3>
                <p className="text-gray-600">
                  Every service is conducted with the utmost respect and dignity, honoring the memory of your loved one.
                </p>
              </div>
              <div className="text-center bg-white rounded-lg p-8 shadow-md">
                <Clock className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Availability</h3>
                <p className="text-gray-600">
                  We're here for you 24/7, ensuring that help is always available when you need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-amber-900 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-amber-100">+91 91796 77292</p>
                  <p className="text-sm text-amber-200">Available 24/7</p>
                </div>
                <div className="text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-amber-100">info@antimseva.in</p>
                  <p className="text-sm text-amber-200">Quick Response</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-amber-100">Indore, Madhya Pradesh</p>
                  <p className="text-sm text-amber-200">Serving the community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
