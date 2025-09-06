"use client"

import { Car, User, Package, Clock, Phone, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("services")
  
  const services = [
    {
      icon: Car,
      title: "Shav Vahan Services",
      titleHindi: "शव वाहन सेवा",
      description: "Dignified transportation services with modern, clean vehicles equipped for respectful transfer of the deceased.",
      features: ["Clean and sanitized vehicles", "24/7 availability", "Trained staff", "Respectful handling"]
    },
    {
      icon: User,
      title: "Pandit Ji Services", 
      titleHindi: "पंडित जी सेवा",
      description: "Experienced and knowledgeable pandits to guide and perform all religious ceremonies according to Hindu traditions.",
      features: ["Experienced pandits", "Complete ritual guidance", "Sanskrit mantras", "Custom ceremonies"]
    },
    {
      icon: Package,
      title: "Ritual Materials",
      titleHindi: "पूजा सामग्री",
      description: "Complete collection of all necessary items required for proper antim sanskar and religious ceremonies.",
      features: ["Authentic materials", "Complete packages", "Quality assured", "Timely delivery"]
    },
    {
      icon: Clock,
      title: "Emergency Support",
      titleHindi: "आपातकालीन सहायता", 
      description: "Round-the-clock emergency assistance and immediate response for urgent funeral service requirements.",
      features: ["24/7 availability", "Immediate response", "Emergency hotline", "Quick arrangements"]
    },
    {
      icon: Heart,
      title: "Family Support",
      titleHindi: "पारिवारिक सहायता",
      description: "Compassionate guidance and emotional support to help families navigate through difficult times.",
      features: ["Emotional support", "Process guidance", "Documentation help", "Caring staff"]
    },
    {
      icon: Phone,
      title: "Consultation",
      titleHindi: "परामर्श सेवा",
      description: "Free consultation to understand your specific needs and provide customized service recommendations.",
      features: ["Free consultation", "Custom planning", "Budget options", "Expert advice"]
    }
  ]

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto">
              Complete funeral and last journey services with dignity, respect, and compassion
            </p>
            <p className="text-lg text-amber-200 mt-4">
              सम्पूर्ण अंतिम संस्कार सेवाएं - श्रद्धा और सम्मान के साथ
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <service.icon className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-lg text-amber-700 font-medium">{service.titleHindi}</p>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            How We Serve You / हमारी सेवा प्रक्रिया
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">Contact our 24/7 helpline for immediate assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600">Free consultation to understand your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Arrangement</h3>
              <p className="text-gray-600">We arrange all necessary services and materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">Complete support throughout the entire process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-amber-900 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-amber-100 mb-6">
              Our compassionate team is available 24/7 to help you during this difficult time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919179677292" 
                className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-50 transition"
              >
                Call Now: +91 91796 77292
              </a>
              <a 
                href="mailto:info@antimseva.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-amber-900 transition"
              >
                Email Us
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
