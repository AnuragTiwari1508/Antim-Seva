import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Users, Clock, Heart, Shield } from "lucide-react"

export default function Services() {
  const phoneNumber = "919179677292"; // WhatsApp number
  const displayNumber = "+91 91796 77292";

  const handleCallClick = () => {
    window.open(`tel:${displayNumber}`, "_self");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("नमस्ते! मैं Antim Seva की सेवाओं के बारे में जानकारी चाहता/चाहती हूँ। कृपया मार्गदर्शन करें।");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Pandit Services",
      titleHindi: "पंडित सेवाएं",
      description: "Experienced pandits for proper ritual ceremonies",
      descriptionHindi: "उचित धार्मिक विधि-विधान के लिए अनुभवी पंडित",
      price: "From ₹500",
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Asthi Visarjan",
      titleHindi: "अस्थि विसर्जन",
      description: "Sacred immersion services at holy rivers",
      descriptionHindi: "पवित्र नदियों में अस्थि विसर्जन की सेवा",
      price: "From ₹2000",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Emergency Delivery",
      titleHindi: "आपातकालीन डिलीवरी",
      description: "24/7 emergency delivery within 2 hours",
      descriptionHindi: "24/7 आपातकालीन डिलीवरी 2 घंटे में",
      price: "From ₹200",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Shav Vahan (Funeral Van)",
      titleHindi: "शव वाहन",
      description: "Professional funeral vehicle service",
      descriptionHindi: "व्यावसायिक शव वाहन सेवा",
      price: "From ₹1500",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Kandha Service (Pallbearers)",
      titleHindi: "कंधा देने वाले",
      description: "Professional pallbearer service",
      descriptionHindi: "व्यावसायिक कंधा देने की सेवा",
      price: "From ₹800",
    },
    {
      icon: <Phone className="w-8 h-8 text-indigo-600" />,
      title: "Funeral Band",
      titleHindi: "बैंड पार्टी",
      description: "Traditional funeral band service",
      descriptionHindi: "पारंपरिक बैंड पार्टी सेवा",
      price: "From ₹1200",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services / हमारी सेवाएं</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">कठिन समय में आपका सहारा - संपूर्ण सेवाएं एक ही स्थान पर</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-amber-500">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl mb-2">
                  {service.title}
                  <div className="text-sm font-normal text-gray-600 mt-1">{service.titleHindi}</div>
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">{service.description}</p>
                <p className="text-sm text-gray-500 mb-4">{service.descriptionHindi}</p>

                <div className="text-lg font-semibold text-amber-900 mb-4">{service.price}</div>

                <Button
                  variant="outline"
                  className="w-full border-amber-900 text-amber-900 hover:bg-amber-50 bg-transparent"
                >
                  Book Service / सेवा बुक करें
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Assistance? / तत्काल सहायता चाहिए?</h3>
            <p className="text-gray-600 mb-6">हमारी टीम 24/7 आपकी सेवा में उपलब्ध है</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleCallClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {displayNumber}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-900 text-amber-900 hover:bg-amber-50 bg-transparent"
                onClick={handleWhatsAppClick}
              >
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
