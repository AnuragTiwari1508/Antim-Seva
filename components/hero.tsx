import { Button } from "@/components/ui/button"
import { Heart, Shield, Clock } from "lucide-react"

interface HeroProps {
  setActiveSection?: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps = {}) {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 leading-tight">
              सम्मान के साथ
              <br />
              <span className="text-orange-600">अंतिम विदाई</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              जब जीवन का सबसे कठिन क्षण आता है, हम आपके साथ खड़े हैं। सभी आवश्यक सामग्री और सेवाएं एक ही स्थान पर, पूर्ण श्रद्धा और सम्मान
              के साथ।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Heart className="w-8 h-8 text-red-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">सेवा भाव</h4>
                  <p className="text-sm text-gray-600">पूर्ण श्रद्धा से</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">तत्काल सेवा</h4>
                  <p className="text-sm text-gray-600">24/7 उपलब्ध</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-green-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">विश्वसनीय</h4>
                  <p className="text-sm text-gray-600">गुणवत्ता सुनिश्चित</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-900 hover:bg-amber-800 text-white px-8"
                onClick={() => setActiveSection?.('packages')}
              >
                अभी ऑर्डर करें
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-900 text-amber-900 hover:bg-amber-50 px-8 bg-transparent"
                onClick={() => setActiveSection?.('services')}
              >
                सेवाएं देखें
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="/products/logo.png?height=400&width=500"
                alt="Respectful funeral services"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">पूर्ण सम्मान के साथ</h3>
                <p className="text-gray-600">धार्मिक विधि-विधान के अनुसार सभी आवश्यक सामग्री</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
