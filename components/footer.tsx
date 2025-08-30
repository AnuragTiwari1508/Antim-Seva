import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
             src="/products/logo.png"   // <-- place your logo file in public folder and change the name here
             alt="Antim Seva Logo"
             className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full"
            // className="w-8 h-8 md:w-12 md:h-12 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-xl"
            />
              <div>
                <h3 className="text-xl font-bold">Antim Seva</h3>
                <p className="text-sm text-amber-200">अंतिम संस्कार सेवा</p>
              </div>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              सम्मान और श्रद्धा के साथ अंतिम संस्कार की सभी आवश्यक सामग्री और सेवाएं। आपके कठिन समय में हमारा साथ।
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact / संपर्क</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-300" />
                <span className="text-sm">+91 91796 77292</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-300" />
                <span className="text-sm">info@antimseva.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-300 mt-1" />
                <span className="text-sm">
                  123 Main Street, Indore
                  <br />
                  Madhya Pradesh, 452001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-300" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links / त्वरित लिंक</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                  Products / उत्पाद
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                  Packages / पैकेज
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                  Services / सेवाएं
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                  Emergency / आपातकाल
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                  FAQ / प्रश्न
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services / सेवाएं</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-amber-100">Ritual Materials / पूजा सामग्री</span>
              </li>
              <li>
                <span className="text-sm text-amber-100">Pandit Services / पंडित सेवा</span>
              </li>
              <li>
                <span className="text-sm text-amber-100">Emergency Delivery / आपातकालीन डिलीवरी</span>
              </li>
              <li>
                <span className="text-sm text-amber-100">Asthi Visarjan / अस्थि विसर्जन</span>
              </li>
              <li>
                <span className="text-sm text-amber-100">24/7 Support / सहायता</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-amber-200">© 2024 Antim Seva. All rights reserved. / सभी अधिकार सुरक्षित।</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
