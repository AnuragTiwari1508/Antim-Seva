"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Youtube,
  Facebook,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("contact");
  const router = useRouter();

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
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-amber-50 "
        >
          <div className="w-full mx-auto py-10 px-4 text-left">
            {/* Back Navigation */}
            <button
              onClick={() => router.push("/")}
              className="flex items-center text-amber-700 hover:text-amber-800 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>

            <h1 className="text-4xl md:text-5xl text-amber-700 font-bold mb-3">
              Contact Us
            </h1>
            <p className="text-base md:text-xl">
              Contact Antim Seva Indore We’re here for you 24x7, offering
              complete support for funeral arrangements, Shav Vahan, Antim
              Sanskar Samagri, and all related services in Indore. If you or
              your family need help, please reach out — our compassionate team
              will respond immediately and assist with every detail.
            </p>
            <p className="text-base md:text-xl mt-3">
              हम आपकी सेवा के लिए 24/7 उपलब्ध हैं — अंतिम सेवा इंदौर संपर्क
              करें। हम शव वाहन, अंतिम संस्कार सामग्री और संपूर्ण अंतिम संस्कार
              सेवाएँ सम्मान और संवेदना के साथ प्रदान करते हैं। किसी भी सहायता के
              लिए तुरंत संपर्क करें।
            </p>
          </div>
        </motion.section>

        {/* Contact Information */}
        <section className="py-8">
          <div className="w-full mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-amber-900 mb-12"
            >
              Get in Touch
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-stretch">
              {[
                {
                  icon: (
                    <Phone className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  ),
                  title: "Phone",
                  detail: "+91 91796 77292",
                  btnText: "Call Now",
                  link: "tel:+919179677292",
                  color: "amber",
                },
                {
                  icon: (
                    <Mail className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  ),
                  title: "Email",
                  detail: "info@antimseva.in",
                  btnText: "Send Email",
                  link: "mailto:info@antimseva.in",
                  color: "blue",
                },
                {
                  icon: (
                    <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  ),
                  title: "WhatsApp",
                  detail: "+91 91796 77292",
                  btnText: "WhatsApp",
                  link: "https://wa.me/919179677292",
                  color: "green",
                },
                {
                  icon: (
                    <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  ),
                  title: "Location",
                  detail: "Indore, MP",
                  btnText: "Get Directions",
                  link: "#",
                  color: "purple",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-white rounded-lg p-8 shadow-lg hover:scale-105 transition-transform"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-600 mb-3">{item.detail}</p>
                  <a
                    href={item.link}
                    className={`inline-block mt-4 bg-${item.color}-600 text-white px-6 py-2 rounded-lg hover:bg-${item.color}-700 transition`}
                  >
                    {item.btnText}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Hours */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-amber-50"
        >
          <div className="w-full mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              Service Hours
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Emergency Services */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <Clock className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
                <p className="text-lg mb-4">Available 24/7, all year round</p>
                <p className="font-semibold text-green-600">Always Available</p>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <Phone className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <p className="text-lg mb-4">For inquiries & consultations</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 4:00 PM</li>
                  <li>
                    Sunday:{" "}
                    <span className="text-amber-600">Emergency Only</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Coverage Area */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="w-full mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              Service Coverage Area
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-8">
                Areas We Serve
              </h3>

              <div className="grid grid-cols-2 gap-2 text-left justify-items-center">
                <div>
                  <h4 className="font-bold text-lg text-amber-900 mb-3">
                    Currently Available In
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li style={{ fontSize: "22px", fontWeight: "bold" }}>
                      • INDORE
                    </li>
                    {/* <li>• Dhar</li>
                    <li>• Bhopal</li>
                    <li>• Ujjain</li>
                    <li>• Dewas</li> */}
                  </ul>
                </div>
                {/* <div>
                  <h4 className="font-bold text-lg text-amber-900 mb-3">
                    Extended Areas
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pithampur</li>
                    <li>• Mhow</li>
                    <li>• Khargone</li>
                    <li>• Khandwa</li>
                  </ul>
                </div> */}
                <div>
                  <h4 className="font-bold text-lg text-amber-900 mb-3">
                    Future Coverage
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dewas , Ujjain </li>
                    <li>• Dhar , Khargone , Khandwa </li>
                    <li>• Bhopal </li>
                    <li>• All over Madhya Pradesh</li>
                    <li>• Neighboring states</li>
                    {/* <li>• Special arrangements</li>
                    <li>• Interstate support</li> */}
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href="tel:+919179677292"
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Social Media Links */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="py-16 bg-amber-50"
        >
          <div className="w-full mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              Connect With Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/antimsevaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transition-all"
                >
                  <Instagram className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Instagram</h3>
                  <p className="text-sm opacity-90 text-center">
                    Follow us for updates
                  </p>
                  <ExternalLink className="w-4 h-4 mt-2" />
                </motion.a>

                {/* YouTube */}
                <motion.a
                  href="https://youtube.com/@antimsevaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-red-600 text-white rounded-lg hover:shadow-xl transition-all"
                >
                  <Youtube className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">YouTube</h3>
                  <p className="text-sm opacity-90 text-center">
                    Watch our videos
                  </p>
                  <ExternalLink className="w-4 h-4 mt-2" />
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="https://facebook.com/profile.php?id=61581180671518"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-blue-600 text-white rounded-lg hover:shadow-xl transition-all"
                >
                  <Facebook className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Facebook</h3>
                  <p className="text-sm opacity-90 text-center">
                    Like our page
                  </p>
                  <ExternalLink className="w-4 h-4 mt-2" />
                </motion.a>

                {/* Linktree */}
                <motion.a
                  href="https://linktr.ee/Antimseva"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-green-600 text-white rounded-lg hover:shadow-xl transition-all"
                >
                  <ExternalLink className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Linktree</h3>
                  <p className="text-sm opacity-90 text-center">
                    All our links
                  </p>
                  <ExternalLink className="w-4 h-4 mt-2" />
                </motion.a>
              </div>

              <div className="text-center mt-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-amber-900 font-medium">
                  Stay connected with Antim Seva for the latest updates and
                  support
                </p>
                <p className="text-amber-700 text-sm mt-2">
                  अंतिम सेवा के साथ जुड़े रहें नवीनतम अपडेट के लिए
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Emergency Contact */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <div className="w-full mx-auto px-4">
            <div className="bg-red-600 text-white rounded-xl p-10 text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">🚨 Emergency Helpline</h2>
              <p className="text-lg mb-6">
                For immediate assistance, call our 24/7 emergency helpline
              </p>
              <a
                href="tel:+919179677292"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-gray-100 transition"
              >
                📞 +91 91796 77292
              </a>
              <p className="text-md mt-4 text-red-100">
                Available round the clock - कभी भी कॉल करें
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </>
  );
}
