"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection="terms"
        setActiveSection={() => {}}
        cartItemsCount={0}
        onCartClick={() => {}}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            नियम एवं शर्तें
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Antim Seva's services, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              अंतिम सेवा की सेवाओं का उपयोग करके, आप इस समझौते की शर्तों और प्रावधानों से बाध्य होने के लिए स्वीकार करते हैं और सहमत होते हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="mb-4">
              Antim Seva provides funeral and religious ceremony services, including but not limited to funeral supplies, 
              pandit services, venue arrangements, and related ceremonial items. All services are provided with dignity and respect 
              for religious and cultural traditions.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              अंतिम सेवा अंतिम संस्कार और धार्मिक समारोह की सेवाएं प्रदान करती है, जिसमें अंतिम संस्कार की सामग्री, पंडित सेवाएं, स्थल व्यवस्था शामिल है।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Orders and Payment</h2>
            <p className="mb-4">
              All orders must be placed through our platform. Payment is required before service delivery unless otherwise arranged. 
              We accept online payments and cash on delivery for eligible orders. Prices are subject to change without notice.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              सभी ऑर्डर हमारे प्लेटफॉर्म के माध्यम से दिए जाने चाहिए। सेवा वितरण से पहले भुगतान आवश्यक है।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Delivery and Timing</h2>
            <p className="mb-4">
              We strive to deliver all services and products within the agreed timeframe. Emergency orders receive priority handling. 
              Delivery charges may apply based on location and urgency. We are not responsible for delays due to circumstances beyond our control.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              हम सहमतिअनुसार समय सीमा के भीतर सभी सेवाओं और उत्पादों को पहुंचाने का प्रयास करते हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Quality and Standards</h2>
            <p className="mb-4">
              All products and services meet religious and cultural standards. Items are quality checked before dispatch. 
              Any quality issues should be reported within 24 hours of delivery for prompt resolution.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              सभी उत्पाद और सेवाएं धार्मिक और सांस्कृतिक मानकों को पूरा करती हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cancellation and Refunds</h2>
            <p className="mb-4">
              Orders may be cancelled within 1 hour of placement for a full refund. After processing begins, 
              cancellation may incur charges. Emergency orders cannot be cancelled once confirmed. 
              Refunds are processed within 5-7 business days.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              पूर्ण रिफंड के लिए प्लेसमेंट के 1 घंटे के भीतर ऑर्डर रद्द किए जा सकते हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="mb-4">
              We collect and use personal information only as necessary to provide our services. Your data is protected with 
              industry-standard security measures. We do not share personal information with third parties without your consent, 
              except as required by law.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              हम व्यक्तिगत जानकारी का संग्रह और उपयोग केवल अपनी सेवाएं प्रदान करने के लिए आवश्यक रूप से करते हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              Antim Seva's liability is limited to the cost of services or products provided. We are not liable for indirect, 
              incidental, or consequential damages. Our services are provided "as is" without warranties of any kind.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              अंतिम सेवा की देयता प्रदान की गई सेवाओं या उत्पादों की लागत तक सीमित है।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Vendor Terms</h2>
            <p className="mb-4">
              All vendors must maintain high service standards and comply with cultural sensitivities. 
              Vendor payments are processed within 7-14 business days after service completion. 
              Partnership may be terminated for breach of standards or conduct.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">
              सभी विक्रेताओं को उच्च सेवा मानक बनाए रखने और सांस्कृतिक संवेदनाओं का पालन करना चाहिए।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Antim Seva</strong><br />
                Email: support@antimseva.in<br />
                Phone: +91 91796 77292<br />
                Address: Indore, Madhya Pradesh, India
              </p>
            </div>
            <p className="text-gray-600 text-sm italic mt-4">
              इन नियमों और शर्तों के बारे में किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करें।
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}