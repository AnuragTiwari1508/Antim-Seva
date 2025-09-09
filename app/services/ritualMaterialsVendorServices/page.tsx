"use client"
import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from "@/components/footer"
import { motion } from "framer-motion"

function RitualMaterialsVendorServices() {
  const [activeSection, setActiveSection] = useState("services")
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Dummy Vendor Data
  const vendors = [
    {
      id: 1,
      name: "Shri Ram Pooja Bhandar",
      experience: 10,
      location: "Indore, M.P.",
      priceRange: "₹500 - ₹5000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDLKIs_J5AkcJGgFubND4m5m8X8HxEJOkKA&s",
      materials: ["Pooja Samagri", "Kalash", "Diya", "Agarbatti", "Flowers"],
    },
    {
      id: 2,
      name: "Moksha Pooja Store",
      experience: 7,
      location: "Bhopal, M.P.",
      priceRange: "₹300 - ₹4000",
      image: "https://media.istockphoto.com/id/1309555498/photo/a-rural-scene-of-a-shop-outside-a-hindu-ganesha-temple-which-sells-puja-ritual-items-such-as.jpg?s=170667a&w=0&k=20&c=K9XbKworsm2dD9NNGsldSQSyUlSj4IRaKG42VzmijJw=",
      materials: ["Pooja Thali", "Roli", "Chandan", "Kalava", "Coconut"],
    },
    {
      id: 3,
      name: "Joshi Pooja Bazaar",
      experience: 12,
      location: "Ujjain, M.P.",
      priceRange: "₹800 - ₹6000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDLKIs_J5AkcJGgFubND4m5m8X8HxEJOkKA&s",
      materials: ["Navgrah Samagri", "Shankh", "Dhoop", "Pooja Clothes"],
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

      <div className="max-w-7xl mx-auto px-4 py-8 bg-amber-50">

        {/* Heading Animation */}
        <motion.h3
          className="text-2xl font-bold text-amber-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Affiliated Ritual Material Provider Vendors
        </motion.h3>

        {/* Paragraph Animation */}
        <motion.p
          className='mb-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our trusted ritual material vendors provide all the essential items required for religious ceremonies and pujas.
          From samagri, flowers, and incense to sacred vessels and attire, everything is arranged with authenticity and care.
          Their support ensures that families have complete and hassle-free access to the right materials for performing rituals
          with devotion and respect.
        </motion.p>

        {/* Vendor Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          {vendors.map((vendor) => (
            <motion.div
              key={vendor.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Left Side Image + Overlay Name */}
              <div className="relative md:w-1/3">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm md:text-base font-semibold px-3 py-1 rounded">
                  {vendor.name}
                </div>
              </div>

              {/* Right Side Content */}
              <div className="p-4 md:w-2/3 flex flex-col flex-grow">
                <p className="text-sm text-gray-600">Experience: {vendor.experience} years</p>
                <p className="text-sm text-gray-600">Location: {vendor.location}</p>
                <p className="text-sm text-green-600 font-semibold">Price Range: {vendor.priceRange}</p>

                {/* Materials */}
                <div className="mt-3 flex-grow">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Available Materials:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {vendor.materials.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium self-start"
                >
                  <a href="https://wa.me/9179677292?text=I want to contact Ritual Material Vendor">
                    Contact Us
                  </a>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Register Button */}
      <div className="flex justify-center my-6 ">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormOpen(true)}
          className="bg-amber-700 hover:bg-amber-800 mx-5 w-full text-white py-2 px-6 rounded-lg shadow-md"
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
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsFormOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-amber-900 mb-4">Register as Ritual Materials Provider Vendor</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Shop / Vendor Name" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Owner Name" className="w-full border p-2 rounded" />
              <input type="number" placeholder="Experience (years)" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Location" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Materials you provide" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Price Range" className="w-full border p-2 rounded" />
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
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

export default RitualMaterialsVendorServices



