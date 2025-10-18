"use client";

// yeh Page Routing wala hai yeh page abhi homePage par use nahi ho rha hai
// HomePage par abhi components/services.tsx use ho rha hai

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { PhoneCall, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("services");
  const router = useRouter();

  const services = [
    {
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/6/426670836/QL/FS/KQ/54448067/prod-20240612-2040076763498091398836649-jpg-500x500.jpg",
      title: "Shav Vahan Services",
      titleHindi: "शव वाहन सेवा",
      description:
        "Dignified transportation services with modern, clean vehicles equipped for respectful transfer of the deceased.",
      features: [
        "Clean and sanitized vehicles",
        "24/7 availability",
        "Trained staff",
        "Respectful handling",
      ],
      link: "/services/shavVahanServices",
    },
    {
      image:
        "https://www.poojn.in/wp-content/uploads/2025/06/Demystifying-Pandit-for-Puja-Your-Guide-to-Finding-the-Right-Priest.jpeg.jpg",
      title: "Pandit Ji Services",
      titleHindi: "पंडित जी सेवा",
      description:
        "Experienced and knowledgeable pandits to guide and perform all religious ceremonies according to Hindu traditions.",
      features: [
        "Experienced pandits",
        "Complete ritual guidance",
        "Sanskrit mantras",
        "Custom ceremonies",
      ],
      link: "/services/panditServices",
    },
    {
      image:
        "https://cdn.99pandit.com/images/blogsimg/udaka%20shanti%20puja%20after%20death%201.webp",
      title: "Ritual Materials",
      titleHindi: "पूजा सामग्री",
      description:
        "Complete collection of all necessary items required for proper antim sanskar and religious ceremonies.",
      features: [
        "Authentic materials",
        "Complete packages",
        "Quality assured",
        "Timely delivery",
      ],
      link: "/package",
    },
    {
      image:
        "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/methode/2021/05/12/ad71a5a8-b2f2-11eb-93b7-03206dd91175_image_hires_162043.jpg?itok=xfbKAfPb&v=1620807652",
      title: "Emergency Support",
      titleHindi: "आपातकालीन सहायता",
      description:
        "Round-the-clock emergency assistance and immediate response for urgent funeral service requirements.",
      features: [
        "24/7 availability",
        "Immediate response",
        "Emergency hotline",
        "Quick arrangements",
      ],
      link: null,
    },
    {
      image:
        "https://onlinepoojan.com/wp-content/uploads/2024/02/Garud-Puran-Path.jpg",
      title: "Garud Puraan Path",
      titleHindi: "गरुड़ पुराण पाठ",
      description:
        "Recitation of Garuda Puran explaining soul’s journey, afterlife, and rituals.",
      features: [
        "Skilled reader",
        "Traditional chanting",
        "Spiritual guidance",
      ],
      link: null,
    },
    {
      image:
        "https://www.godigit.com/content/dam/godigit/directportal/lifehm/how-to-support-your-family-after-a-death-incident.jpg",
      title: "Family Support",
      titleHindi: "पारिवारिक सहायता",
      description:
        "Compassionate guidance and emotional support to help families navigate through difficult times.",
      features: [
        "Emotional support",
        "Process guidance",
        "Documentation help",
        "Caring staff",
      ],
      link: null,
    },
    {
      image:
        "https://cdn.prod.website-files.com/64b0face30b4c55a16a289be/6757e7ba901b13f841bda263_33579670-77fd-4a3a-a789-7daba3f5a9ed.jpeg",
      title: "Consultation",
      titleHindi: "परामर्श सेवा",
      description:
        "Free consultation to understand your specific needs and provide customized service recommendations.",
      features: [
        "Free consultation",
        "Custom planning",
        "Budget options",
        "Expert advice",
      ],
      link: null,
    },
    {
      image:
        "https://cdn.prod.website-files.com/62bec2ad58883c0d7237610e/632b22618f37388f1c48e98e_example.jpg",
      title: "Obituary In Newspaper",
      titleHindi: "समाचार पत्र में मृत्युलेख",
      description:
        "Obituary announcements & remembrance displays in newspapers of your choice.",
      features: [
        "Multiple newspaper options",
        "Custom content",
        "Timely publishing",
      ],
      link: null,
    },
    {
      image:
        "https://content.jdmagicbox.com/comp/def_content/morgues/bc95f5cb33-morgues-4-yriys.jpg",
      title: "Morgue Facility",
      titleHindi: "मॉर्ग्यू सुविधा",
      description:
        "Portable freezer for maintaining the deceased at home instead of hospital morgue.",
      features: ["Home-based freezer", "No hospital transfer", "Convenient"],
      link: null,
    },
    {
      image:
        "https://tse2.mm.bing.net/th/id/OIP.cH7ZGzs9HhS4yBXEG1zEhQHaDF?pid=Api&P=0&h=180",
      title: "Tribute Film Making",
      titleHindi: "श्रद्धांजलि फिल्म निर्माण",
      description:
        "Create an AV (biography & tribute) film with a personal message for remembrance.",
      features: ["Customized AV", "Memory preservation", "Emotional tribute"],
      link: null,
    },
    {
      image:
        "https://www.qatar-tribune.com/uploads/imported_images/data/20220215/images/641202.jpg",
      title: "Condolence Meet / Shok Sabha",
      titleHindi: "शोक सभा / समवेदना सभा",
      description:
        "Arrange condolence meetings as per family wishes without burden on family.",
      features: ["Venue setup", "Arrangement assistance", "Family comfort"],
      link: null,
    },
    {
      image:
        "https://apostillenevada.com/wp-content/uploads/2023/10/Certificate-of-Death-scaled.jpeg",
      title: "Documentation & Death Certificate",
      titleHindi: "दस्तावेज़ीकरण एवं मृत्यु प्रमाण पत्र",
      description:
        "Assist with crematorium registration and death certificate procedures.",
      features: [
        "Cremation registration",
        "Certificate facilitation",
        "Paperwork handled",
      ],
      link: "/services/DeathCertificate",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItemsCount={0}
        onCartClick={() => {}}
      />
      {/* Our Services Section */}
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="bg-abmer-100 text-amber-700 py-10">
          <div className="w-full mx-auto px-4">
            <div className="text-left">
              {/* Back Navigation */}
              <button
                onClick={() => router.push("/")}
                className="flex items-center text-amber-700 hover:text-amber-800 mb-4 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>

              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Our Services
              </h1>
              <p className="text-base md:text-xl text-black max-w-4xl">
                Complete funeral and last journey services with dignity,
                respect, and compassion
              </p>
              <p className="text-base text-black mt-4 ">
                सम्पूर्ण अंतिम संस्कार सेवाएं - श्रद्धा और सम्मान के साथ
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                >
                  {/* Image with overlay */}
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-amber-200">
                        {service.titleHindi}
                      </p>
                    </div>
                  </div>

                  {/* Description + Features */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed text-left">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm md:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Buttons row */}
                    <div className="mt-auto flex gap-3">
                      <a
                        href="https://wa.me/9179677292"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
                      >
                        Contact
                      </a>
                      {service.link ? (
                        <Link href={service.link}>
                          <button className="flex-1 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium opacity-50">
                            See More
                          </button>
                        </Link>
                      ) : (
                        <button className="flex-1 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium opacity-50 cursor-not-allowed">
                          See More
                        </button>
                      )}
                    </div>
                  </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">
                  Contact our 24/7 helpline for immediate assistance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Free consultation to understand your specific requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Arrangement
                </h3>
                <p className="text-gray-600">
                  We arrange all necessary services and materials
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Support
                </h3>
                <p className="text-gray-600">
                  Complete support throughout the entire process
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="w-full mx-auto px-4 text-center">
            {/* Background + overlay inside the box only */}
            <div className="relative rounded-lg p-8 overflow-hidden">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://www.hindustantimes.com/ht-img/img/2025/08/05/550x309/gonda_ambulance_1754357663025_1754357663235.JPG')",
                }}
              ></div>

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Need Immediate Assistance 🚨
                </h2>
                <p className="text-xl mb-6">
                  Our compassionate team is available 24/7 to help you during
                  this difficult time
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+919179677292"
                    className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:scale-105 duration-150 transition"
                  >
                    Call Now: +91 91796 77292
                  </a>
                  <a
                    href="mailto:info@antimseva.in"
                    className="bg-transparent border border-white px-8 py-3 rounded-lg font-bold transition hover:scale-105 duration-150"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
