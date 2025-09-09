"use client"
import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from "@/components/footer"
import { motion } from "framer-motion"

function PanditServices() {
  const [activeSection, setActiveSection] = useState("services")
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Dummy Pandit Data
  const pandits = [
    {
      id: 1,
      name: "Pandit Ram Kumar Sharma",
      age: 45,
      experience: 3,
      location: "Indore, M.P.",
      charges: "₹2500",
      image: "https://english.onlinekhabar.com/wp-content/uploads/2024/02/pandit-priest.jpg",
      services: ["Puja", "Havan", "Satyanarayan Katha", "Grih Pravesh"],
    },
    {
      id: 2,
      name: "Pandit Gopal Mishra",
      age: 38,
      experience: 3,
      location: "Bhopal, M.P.",
      charges: "₹2000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7lhmpnQJC_dOdUalgin4kL-6IA_gpNNSHA&s",
      services: ["Marriage", "Mundan Sanskar", "Navagrah Shanti", "Katha"],
    },
    {
      id: 3,
      name: "Pandit Harish Joshi",
      age: 50,
      experience: 3,
      location: "Ujjain, M.P.",
      charges: "₹3000",
      image: "https://english.onlinekhabar.com/wp-content/uploads/2024/02/pandit-priest.jpg",
      services: ["Pitra Dosh Nivaran", "Shradh", "Kal Sarp Dosh Puja"],
    },
    {
      id: 4,
      name: "Pandit Rajesh Tiwari",
      age: 42,
      experience: 4,
      location: "Jabalpur, M.P.",
      charges: "₹2200",
      image: "https://english.onlinekhabar.com/wp-content/uploads/2024/02/pandit-priest.jpg",
      services: ["Marriage", "Naamkaran", "Navagrah Shanti", "Vastu Shanti"],
    },
  ]

  return (
    <>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemsCount={0}
        onCartClick={() => { }}
      />

      {/* Pandit Ji Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 bg-amber-50">
        <h3 className="text-2xl font-bold text-amber-900 mb-6">Our Affiliated Pandit Ji</h3>
        <p className='mb-5'>
          Our affiliated Pandit Ji provide authentic and traditional guidance for all kinds of religious rituals and ceremonies. From pujas, havans, and kathas to special rites like marriage, grih pravesh, and shanti path, they ensure that every ritual is performed with devotion and according to Vedic traditions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pandits.map((pandit, index) => (
            <motion.div
              key={pandit.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Left Side Image + Overlay Name */}
              <div className="relative md:w-2/3">
                <img
                  src={pandit.image}
                  alt={pandit.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm md:text-base font-semibold px-3 py-1 rounded">
                  {pandit.name}
                </div>
              </div>

              {/* Right Side Content */}
              <div className="p-4 md:w-2/3 flex flex-col flex-grow">
                <p className="text-sm text-gray-600">Age: {pandit.age}</p>
                <p className="text-sm text-gray-600">Location: {pandit.location}</p>
                <p className="text-sm text-green-600 font-semibold">Charges: {pandit.charges}</p>

                {/* Services */}
                <div className="mt-3 flex-grow">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Services:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {pandit.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium self-start"
                >
                  <a href="https://wa.me/9179677292?text=I want to book Pandit Ji">Book Now</a>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Register Button */}
      <div className="flex justify-center my-4 mx-5 ">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormOpen(true)}
          className="bg-amber-700 hover:bg-amber-800 w-full text-white py-2 px-6 rounded-lg shadow-md"
        >
          Register with us
        </motion.button>
      </div>

      {/* Popup Form */}
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative mx-2"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 font-bold"
              onClick={() => setIsFormOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-amber-900 mb-4">Register as Pandit Ji</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
              <input type="number" placeholder="Age" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Location" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Experience (years)" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Services you offer" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Charges" className="w-full border p-2 rounded" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  )
}

export default PanditServices




