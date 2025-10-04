"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, Shield, FileText, CheckCircle } from "lucide-react"

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("terms")
  const [acceptedTerms, setAcceptedTerms] = useState({
    customer: false,
    vendor: false,
    privacy: false
  })

  const handleAcceptanceChange = (type: string, checked: boolean) => {
    setAcceptedTerms(prev => ({
      ...prev,
      [type]: checked
    }))
  }

  return (
    <>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemsCount={0}
        onCartClick={() => {}}
      />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-amber-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Terms & Conditions
              </h1>
            </div>
            <p className="text-lg text-gray-600">नियम एवं शर्तें</p>
            <p className="text-sm text-gray-500 mt-2">
              Please read carefully before using our services / कृपया हमारी सेवाओं का उपयोग करने से पहले ध्यान से पढ़ें
            </p>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition">
              <ArrowLeft className="w-4 h-4" />
              Back to Home / होम पर वापस जाएं
            </Link>
          </div>

          {/* Customer Terms Section */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-3 text-blue-900">
                <FileText className="w-6 h-6" />
                Customer Terms & Conditions / ग्राहक नियम एवं शर्तें
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-96 w-full rounded border p-4 bg-gray-50">
                <div className="space-y-4 text-sm">
                  <h3 className="font-bold text-blue-800">ग्राहक सहमति पत्र (Customer Agreement)</h3>
                  
                  <p>मैं, ग्राहक के रूप में, यह स्वीकार करता हूँ कि <strong>Antim Seva</strong> केवल एक सुविधा प्रदाता (facilitator) है, जो मुझे विभिन्न सेवा प्रदाताओं (पंडित, शव वाहन, सामग्री किट, बैंड, टेंट, हलवाई आदि) से जोड़ता है।</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-700">1. सेवा प्रदाता की जिम्मेदारी</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>वास्तविक सेवा (पूजा करना, वाहन चलाना, खाना बनाना आदि) की जिम्मेदारी संबंधित विक्रेता की होगी।</li>
                      <li>Antim Seva केवल समन्वय करता है, प्रत्यक्ष सेवा प्रदान नहीं करता।</li>
                    </ul>

                    <h4 className="font-semibold text-blue-700">2. शवदाह/अंत्येष्टि संबंधी स्पष्टता</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Antim Seva शवदाह (body burning), मृतक को कंधा देना, धार्मिक अनुष्ठान कराना सीधे नहीं करता।</li>
                      <li>यह कार्य संबंधित पंडित या परिवार की देखरेख में होता है।</li>
                    </ul>

                    <h4 className="font-semibold text-blue-700">3. भुगतान नीति</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>सभी भुगतान Antim Seva के माध्यम से किए जाएंगे।</li>
                      <li>रद्दीकरण/रिफंड Antim Seva की नीति के अनुसार होगा।</li>
                    </ul>

                    <h4 className="font-semibold text-blue-700">4. मृत्यु भोज एवं अतिरिक्त व्यवस्था</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>मृत्यु भोज (Mrityubhoj) या बड़ी दावत की व्यवस्था पैकेज में शामिल नहीं है।</li>
                      <li>यदि परिवार चाहे तो अलग से लागत और हेडकाउंट बताकर व्यवस्था करवाई जा सकती है।</li>
                    </ul>

                    <h4 className="font-semibold text-blue-700">5. दायित्व से मुक्ति (Liability Disclaimer)</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>यदि किसी विक्रेता की ओर से गलती, देरी, दुर्व्यवहार या दुर्घटना होती है, उसकी जिम्मेदारी विक्रेता की होगी, Antim Seva की नहीं।</li>
                      <li>यदि कोई व्यक्ति Antim Seva का नाम लेकर अपराध करे, तो उसकी जिम्मेदारी उस व्यक्ति/विक्रेता की होगी।</li>
                    </ul>

                    <h4 className="font-semibold text-blue-700">6. रद्दीकरण एवं रिफंड नीति</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>24 घंटे पहले रद्द करने पर – 80% रिफंड।</li>
                      <li>24 घंटे के अंदर रद्द करने पर – 50% रिफंड।</li>
                      <li>सेवा शुरू होने के बाद – कोई रिफंड नहीं।</li>
                      <li>यदि विक्रेता सेवा नहीं देता तो 100% रिफंड।</li>
                    </ul>

                    <h4 className="font-semibold text-blue-700">7. विवाद समाधान</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>किसी विवाद की स्थिति में पहले Antim Seva सपोर्ट टीम से संपर्क किया जाएगा।</li>
                      <li>अंतिम समाधान इंदौर, मध्यप्रदेश की अदालत में होगा।</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <p className="text-xs text-gray-600">
                      <strong>English Translation:</strong> I understand that Antim Seva is only an intermediary/facilitator platform connecting me with independent service providers. All services are provided by independent vendors who are solely responsible for service quality, conduct, and execution. Antim Seva shall not be liable for any service deficiency, misconduct, or damages by vendors.
                    </p>
                  </div>
                </div>
              </ScrollArea>
              
              <div className="flex items-center space-x-2 mt-4 p-4 bg-blue-50 rounded-lg">
                <Checkbox 
                  id="customer-terms" 
                  checked={acceptedTerms.customer}
                  onCheckedChange={(checked) => handleAcceptanceChange('customer', checked as boolean)}
                />
                <label htmlFor="customer-terms" className="text-sm font-medium text-blue-900 cursor-pointer">
                  ☑ मैंने ग्राहक नियम एवं शर्तें पढ़ लीं और स्वीकार करता हूँ। / I have read and agree to the Customer Terms & Conditions.
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Vendor Terms Section */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-3 text-green-900">
                <FileText className="w-6 h-6" />
                Vendor Agreement / विक्रेता समझौता (For Service Providers Only)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-96 w-full rounded border p-4 bg-gray-50">
                <div className="space-y-4 text-sm">
                  <h3 className="font-bold text-green-800">विक्रेता सहमति पत्र (Vendor Agreement)</h3>
                  
                  <p>मैं, विक्रेता के रूप में, यह स्वीकार करता हूँ कि मैं <strong>Antim Seva</strong> का स्वतंत्र सेवा प्रदाता हूँ। मैं यह भी मानता हूँ कि Antim Seva केवल एक सुविधा प्रदाता (facilitator) है, न कि मेरा नियोक्ता, पार्टनर या एजेंट।</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-700">1. स्वतंत्र विक्रेता की स्थिति</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>मैं स्वतंत्र सेवा प्रदाता हूँ। Antim Seva केवल मुझे ग्राहक से जोड़ता है।</li>
                      <li>Antim Seva एक से अधिक विक्रेताओं को नियुक्त कर सकता है।</li>
                    </ul>

                    <h4 className="font-semibold text-green-700">2. मूल्य निर्धारण एवं ग्राहक लेन-देन</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>मैं केवल वही रेट और शर्तें मानूँगा जो Antim Seva द्वारा तय किए गए हैं।</li>
                      <li>ग्राहक से सीधा भुगतान लेना या रेट बदलना पूरी तरह प्रतिबंधित है।</li>
                      <li>सभी भुगतान Antim Seva के माध्यम से ही होंगे।</li>
                    </ul>

                    <h4 className="font-semibold text-green-700">3. सेवा की गुणवत्ता</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>मैं समय पर, गरिमा और सम्मान के साथ सेवा दूँगा।</li>
                      <li>किसी भी प्रकार की लापरवाही, असभ्यता या देरी होने पर तुरंत हटाने का अधिकार Antim Seva का है।</li>
                    </ul>

                    <h4 className="font-semibold text-green-700">4. प्रमोशन एवं ब्रांड सुरक्षा</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>मैं Antim Seva द्वारा दिए गए प्रचार सामग्री को प्रदर्शित करूँगा।</li>
                      <li>मैं Antim Seva के नाम/लोगो का दुरुपयोग नहीं करूँगा।</li>
                    </ul>

                    <h4 className="font-semibold text-green-700">5. दायित्व एवं क्षतिपूर्ति</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>मेरी सेवा से जुड़े किसी भी नुकसान, दुर्घटना की पूरी जिम्मेदारी मेरी होगी।</li>
                      <li>Antim Seva किसी भी प्रकार के दावे या हानि के लिए उत्तरदायी नहीं होगा।</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <p className="text-xs text-gray-600">
                      <strong>English Translation:</strong> I acknowledge that I am an independent service provider and not an employee of Antim Seva. I agree to provide services strictly at approved prices and terms. I shall not bypass Antim Seva or directly charge customers. I am fully responsible for my services and indemnify Antim Seva against all claims.
                    </p>
                  </div>
                </div>
              </ScrollArea>
              
              <div className="flex items-center space-x-2 mt-4 p-4 bg-green-50 rounded-lg">
                <Checkbox 
                  id="vendor-terms" 
                  checked={acceptedTerms.vendor}
                  onCheckedChange={(checked) => handleAcceptanceChange('vendor', checked as boolean)}
                />
                <label htmlFor="vendor-terms" className="text-sm font-medium text-green-900 cursor-pointer">
                  ☑ मैंने विक्रेता नियम एवं शर्तें पढ़ लीं और स्वीकार करता हूँ। / I have read and agree to the Vendor Terms & Conditions.
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy Section */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-3 text-purple-900">
                <Shield className="w-6 h-6" />
                Privacy Policy / गोपनीयता नीति
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-64 w-full rounded border p-4 bg-gray-50">
                <div className="space-y-4 text-sm">
                  <h3 className="font-bold text-purple-800">Data Collection & Usage / डेटा संग्रह एवं उपयोग</h3>
                  
                  <div className="space-y-2">
                    <p><strong>व्यक्तिगत जानकारी:</strong> हम आपका नाम, फोन नंबर, पता, ईमेल केवल सेवा प्रदान करने के लिए एकत्र करते हैं।</p>
                    <p><strong>डेटा सुरक्षा:</strong> आपकी जानकारी एन्क्रिप्टेड तरीके से स्टोर की जाती है और तीसरे पक्ष को साझा नहीं की जाती।</p>
                    <p><strong>कुकीज़:</strong> बेहतर उपयोगकर्ता अनुभव के लिए कुकीज़ का उपयोग किया जा सकता है।</p>
                    <p><strong>संपर्क:</strong> डेटा संबंधी किसी भी प्रश्न के लिए info@antimseva.in पर संपर्क करें।</p>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <p className="text-xs text-gray-600">
                      <strong>English:</strong> We collect personal information only for service delivery. Your data is encrypted and not shared with unauthorized third parties. Cookies may be used for better user experience.
                    </p>
                  </div>
                </div>
              </ScrollArea>
              
              <div className="flex items-center space-x-2 mt-4 p-4 bg-purple-50 rounded-lg">
                <Checkbox 
                  id="privacy-policy" 
                  checked={acceptedTerms.privacy}
                  onCheckedChange={(checked) => handleAcceptanceChange('privacy', checked as boolean)}
                />
                <label htmlFor="privacy-policy" className="text-sm font-medium text-purple-900 cursor-pointer">
                  ☑ मैंने गोपनीयता नीति पढ़ लीं और स्वीकार करता हूँ। / I have read and agree to the Privacy Policy.
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Acceptance Summary */}
          <Card className="mb-8 shadow-lg border-2 border-amber-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  Acceptance Summary / स्वीकृति सारांश
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className={`p-4 rounded-lg border-2 ${acceptedTerms.customer ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'}`}>
                    <CheckCircle className={`w-6 h-6 mx-auto mb-2 ${acceptedTerms.customer ? 'text-green-600' : 'text-gray-400'}`} />
                    <p className="text-sm font-medium">Customer Terms</p>
                    <p className="text-xs text-gray-600">ग्राहक नियम</p>
                  </div>
                  
                  <div className={`p-4 rounded-lg border-2 ${acceptedTerms.vendor ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'}`}>
                    <CheckCircle className={`w-6 h-6 mx-auto mb-2 ${acceptedTerms.vendor ? 'text-green-600' : 'text-gray-400'}`} />
                    <p className="text-sm font-medium">Vendor Terms</p>
                    <p className="text-xs text-gray-600">विक्रेता नियम</p>
                  </div>
                  
                  <div className={`p-4 rounded-lg border-2 ${acceptedTerms.privacy ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'}`}>
                    <CheckCircle className={`w-6 h-6 mx-auto mb-2 ${acceptedTerms.privacy ? 'text-green-600' : 'text-gray-400'}`} />
                    <p className="text-sm font-medium">Privacy Policy</p>
                    <p className="text-xs text-gray-600">गोपनीयता नीति</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> You must accept Customer Terms & Privacy Policy to use our services as a customer.
                    <br />
                    <span className="text-xs">नोट: ग्राहक के रूप में सेवा लेने के लिए ग्राहक नियम और गोपनीयता नीति स्वीकार करना आवश्यक है।</span>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                        Back to Home / होम वापस जाएं
                      </Button>
                    </Link>
                    
                    <Link href="/contact">
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        Contact Support / सहायता संपर्क
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Antim Seva</strong> - Complete Funeral Services Platform
            </p>
            <p>
              📞 +91 91796 77292 | 📧 info@antimseva.in | 📍 Indore, Madhya Pradesh
            </p>
            <p className="mt-2 text-xs">
              Last Updated: {new Date().toLocaleDateString('en-IN')} | 
              अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}