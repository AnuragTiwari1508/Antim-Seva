"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection="privacy"
        setActiveSection={() => {}}
        cartItemsCount={0}
        onCartClick={() => {}}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy / Vendor Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            गोपनीयता नीति / विक्रेता नियम और शर्तें
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Independent Vendor Status
            </h2>
            <p>
              I am an independent service provider and not an employee, partner,
              or agent of Antim Seva. Antim Seva is only an
              intermediary/facilitator connecting me with customers.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं एक स्वतंत्र सेवा प्रदाता हूं और अंतिम सेवा का कर्मचारी,
              भागीदार या एजेंट नहीं हूं। अंतिम सेवा केवल एक मध्यस्थ है जो मुझे
              ग्राहकों से जोड़ती है।
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Multiple Vendor Policy
            </h2>
            <p>
              Antim Seva is not bound to work with only one vendor. The Company
              may empanel and assign work to multiple vendors at its discretion.
              No exclusivity or guarantee of business volume is provided.
            </p>
            <p className="text-gray-600 text-sm italic">
              अंतिम सेवा केवल एक ही विक्रेता के साथ काम करने के लिए बाध्य नहीं
              है। कंपनी अपने विवेकानुसार कई विक्रेताओं को पंजीकृत और कार्य सौंप
              सकती है। किसी भी विशिष्टता या व्यापार की गारंटी नहीं दी जाती है।
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Pricing & Customer Dealings
            </h2>
            <p>
              I shall provide services strictly at the prices, terms, and
              conditions fixed/approved by Antim Seva. I shall not charge extra
              from customers directly under any circumstances. All payments from
              customers must go through Antim Seva unless specifically
              authorized in writing.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं सेवाएं केवल उन्हीं दरों, शर्तों और नियमों पर प्रदान करूंगा जो
              अंतिम सेवा द्वारा निर्धारित या स्वीकृत हों। मैं किसी भी स्थिति में
              ग्राहकों से सीधे अतिरिक्त शुल्क नहीं लूंगा। सभी ग्राहक भुगतान केवल
              अंतिम सेवा के माध्यम से ही किए जाएंगे, जब तक कि लिखित में अनुमति न
              दी गई हो।
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Service Standards
            </h2>
            <p>
              I shall maintain punctuality, dignity, and respect towards
              customers and their families. I shall provide the agreed service
              with proper quality and care. Any misconduct, delay, or negligence
              may result in immediate termination of my empanelment.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं समय की पाबंदी, गरिमा और ग्राहकों तथा उनके परिवारों के प्रति
              सम्मान बनाए रखूंगा। मैं सहमत सेवा उचित गुणवत्ता और देखभाल के साथ
              प्रदान करूंगा। किसी भी प्रकार का अनुशासनहीन व्यवहार, देरी या
              लापरवाही मेरे पंजीकरण के तत्काल समाप्ति का कारण बन सकता है।
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Promotion & Brand Protection
            </h2>
            <p>
              I agree to promote Antim Seva at my workplace by displaying
              pamphlets, posters, stickers, or any other material provided by
              the Company. I shall not misuse the Antim Seva name, logo, or
              brand identity in any unauthorized way. I shall not directly
              contact or solicit Antim Seva customers for personal gain outside
              the platform. Any attempt to bypass Antim Seva will result in
              blacklisting and legal action.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं अपने कार्यस्थल पर अंतिम सेवा को बढ़ावा देने के लिए कंपनी
              द्वारा प्रदान किए गए पंपलेट, पोस्टर, स्टीकर या अन्य सामग्री
              प्रदर्शित करने के लिए सहमत हूं। मैं अंतिम सेवा के नाम, लोगो या
              ब्रांड पहचान का किसी भी अनधिकृत तरीके से उपयोग नहीं करूंगा। मैं
              व्यक्तिगत लाभ के लिए अंतिम सेवा के ग्राहकों से सीधे संपर्क नहीं
              करूंगा। अंतिम सेवा को बायपास करने का कोई भी प्रयास ब्लैकलिस्टिंग
              और कानूनी कार्रवाई का कारण बनेगा।
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Referral Code & Commission
            </h2>
            <p>
              I will be provided with a unique referral code by Antim Seva. I
              may share this code to refer customers. For each successful
              referral, I shall receive commission/incentives as per the
              Company’s referral policy. All referral commissions will be
              calculated and paid only through Antim Seva’s official system.
            </p>
            <p className="text-gray-600 text-sm italic">
              मुझे अंतिम सेवा द्वारा एक विशिष्ट रेफरल कोड प्रदान किया जाएगा। मैं
              इस कोड को ग्राहकों को संदर्भित करने के लिए साझा कर सकता हूं।
              प्रत्येक सफल रेफरल पर, मुझे कंपनी की नीति के अनुसार कमीशन या
              प्रोत्साहन प्राप्त होगा। सभी रेफरल भुगतान केवल अंतिम सेवा की
              आधिकारिक प्रणाली के माध्यम से किए जाएंगे।
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Liability & Indemnity
            </h2>
            <p>
              I am fully responsible for my staff, vehicles, equipment, and
              services. I indemnify Antim Seva against any claims, damages, or
              complaints arising from my service.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं अपने कर्मचारियों, वाहनों, उपकरणों और सेवाओं के लिए पूरी तरह
              जिम्मेदार हूं। मैं अपनी सेवाओं से उत्पन्न किसी भी दावे, क्षति या
              शिकायत के लिए अंतिम सेवा को जिम्मेदार नहीं ठहराऊंगा।
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Confidentiality
            </h2>
            <p>
              I shall not disclose customer information or data received via
              Antim Seva to any third party.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं अंतिम सेवा के माध्यम से प्राप्त ग्राहक जानकारी या डेटा को किसी
              तीसरे पक्ष के साथ साझा नहीं करूंगा।
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Term & Termination
            </h2>
            <p>
              Antim Seva may terminate my empanelment at any time if I violate
              these terms or harm the brand reputation.
            </p>
            <p className="text-gray-600 text-sm italic">
              यदि मैं इन शर्तों का उल्लंघन करता हूं या ब्रांड की प्रतिष्ठा को
              नुकसान पहुंचाता हूं, तो अंतिम सेवा किसी भी समय मेरा पंजीकरण समाप्त
              कर सकती है।
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Jurisdiction
            </h2>
            <p>
              These terms shall be governed by the laws of India. Courts in
              Indore, Madhya Pradesh shall have exclusive jurisdiction over
              disputes.
            </p>
            <p className="text-gray-600 text-sm italic">
              ये शर्तें भारत के कानूनों द्वारा शासित होंगी। विवादों के लिए
              इंदौर, मध्य प्रदेश के न्यायालयों का विशेष क्षेत्राधिकार होगा।
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Vendor Verification
            </h2>
            <p>
              I agree to provide accurate, complete, and valid documents for
              identity, address, and service verification.
              <br />I authorize Antim Seva to verify my documents and background
              before empanelment. My details will be added to Antim Seva’s
              website, Google Maps, and promotional material only after
              successful verification.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं पहचान, पते और सेवा सत्यापन के लिए सही और मान्य दस्तावेज़
              प्रस्तुत करने पर सहमत हूँ।
              <br />
              मैं अंतिम सेवा को अपने दस्तावेज़ों और पृष्ठभूमि की जांच करने की
              अनुमति देता हूँ। सफल सत्यापन के बाद ही मेरी जानकारी वेबसाइट, गूगल
              मैप्स और प्रचार सामग्री में जोड़ी जाएगी।
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              12. Consent for Use of Vendor Details
            </h2>
            <p>
              I grant Antim Seva full rights to use my name, photo, service
              details, contact details, and pricing on its website, app, social
              media, and promotional material. I understand this is for the
              purpose of promoting Antim Seva services and building customer
              trust.
            </p>
            <p className="text-gray-600 text-sm italic">
              मैं अंतिम सेवा को अपने नाम, फोटो, सेवा विवरण, संपर्क विवरण और
              मूल्य निर्धारण को उसकी वेबसाइट, ऐप, सोशल मीडिया और प्रचार सामग्री
              पर उपयोग करने का पूर्ण अधिकार देता हूं। मैं समझता हूं कि यह अंतिम
              सेवा की सेवाओं को बढ़ावा देने और ग्राहक विश्वास बनाने के लिए है।
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              13. Consequences of Misrepresentation
            </h2>
            <p>
              If any of the documents or details provided by me are found to be
              false or misleading, Antim Seva reserves the right to:
              <br />– Immediately terminate my empanelment.
              <br />– Blacklist me from the platform.
              <br />– Withhold any payments due.
              <br />– Initiate legal action for fraud or misrepresentation.
            </p>
            <p className="text-gray-600 text-sm italic">
              यदि मेरे द्वारा प्रदान किए गए किसी भी दस्तावेज़ या विवरण को गलत या
              भ्रामक पाया जाता है, तो अंतिम सेवा को निम्नलिखित अधिकार होंगे:
              <br />– मेरा पंजीकरण तुरंत समाप्त करना।
              <br />– मुझे प्लेटफ़ॉर्म से ब्लैकलिस्ट करना।
              <br />– किसी भी बकाया भुगतान को रोकना।
              <br />– धोखाधड़ी या गलत प्रस्तुति के लिए कानूनी कार्रवाई शुरू
              करना।
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
