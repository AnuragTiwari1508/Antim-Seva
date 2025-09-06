"use client"

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("contact")
  
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto">
              We're here for you 24/7 during your time of need
            </p>
            <p className="text-lg text-amber-200 mt-4">
              हम आपकी सेवा के लिए 24/7 उपलब्ध हैं
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-red-600 text-white rounded-lg p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Emergency Helpline</h2>
            <p className="text-xl mb-6">For immediate assistance, call our 24/7 emergency helpline</p>
            <a 
              href="tel:+919179677292"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-gray-100 transition"
            >
              📞 +91 91796 77292
            </a>
            <p className="text-lg mt-4 text-red-100">Available round the clock - कभी भी कॉल करें</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <Phone className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phone</h3>
              <p className="text-lg text-gray-700 mb-2">+91 91796 77292</p>
              <p className="text-sm text-gray-500">24/7 Available</p>
              <a 
                href="tel:+919179677292"
                className="inline-block mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
              >
                Call Now
              </a>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <Mail className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <p className="text-lg text-gray-700 mb-2">info@antimseva.com</p>
              <p className="text-sm text-gray-500">Quick Response</p>
              <a 
                href="mailto:info@antimseva.com"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Email
              </a>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
              <p className="text-lg text-gray-700 mb-2">+91 91796 77292</p>
              <p className="text-sm text-gray-500">Instant Support</p>
              <a 
                href="https://wa.me/919179677292"
                className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                WhatsApp
              </a>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg">
              <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
              <p className="text-lg text-gray-700 mb-2">Indore, MP</p>
              <p className="text-sm text-gray-500">Serving the community</p>
              <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Service Hours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Clock className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Services</h3>
              <p className="text-lg text-gray-700 mb-4">Available 24 hours a day, 7 days a week</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Sunday:</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Holidays:</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h3>
              <p className="text-lg text-gray-700 mb-4">For general inquiries and consultations</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-semibold text-amber-600">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Service Coverage Area</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Areas We Serve</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-lg text-amber-900 mb-3">Primary Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Indore City</li>
                  <li>• Bhopal</li>
                  <li>• Ujjain</li>
                  <li>• Dewas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-900 mb-3">Extended Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pithampur</li>
                  <li>• Mhow</li>
                  <li>• Khargone</li>
                  <li>• Khandwa</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-900 mb-3">Emergency Coverage</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• All of Madhya Pradesh</li>
                  <li>• Neighboring states</li>
                  <li>• Special arrangements</li>
                  <li>• Interstate support</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don't see your area listed? Contact us - we may still be able to help!
              </p>
              <a 
                href="tel:+919179677292"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}
