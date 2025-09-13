import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Antim Seva - अंतिम सेवा | Funeral Services Indore | Antim Sanskar 24/7 | antimseva.in",
  description:
    "Antim Seva Indore - Complete funeral services with dignity at antimseva.in. Shav Vahan, Pandit Ji, Antim Sanskar materials, cremation assistance. 24/7 emergency. Call +91 91796 77292. अंतिम संस्कार की सभी सामग्री और सेवाएं।",
  keywords: [
    // Primary Keywords - High Priority
    "antim seva", "अंतिम सेवा", "antimseva.in", "antim sewa", "antim seva indore",
    
    // Domain-specific terms
    "antimseva", "अंतिम संस्कार", "अंतिम संस्कार इंदौर", "अंतिम सेवा इंदौर",
    
    // Core Service Terms
    "Antim Seva", "funeral services indore", "Antim Sanskar", "last rites indore",
    "अंतिम यात्रा", "दाह संस्कार", "last journey services", "final rites",
    
    // Service-specific terms
    "शव वाहन", "अंतिम संस्कार सामग्री", "Shav Vahan", "pandit ji indore",
    "cremation services indore", "funeral services near me", "death rituals",
    "hindu funeral services", "religious ceremony indore", "funeral materials indore",
    
    // Emergency & Availability 
    "emergency funeral services", "24x7 funeral", "तत्काल सेवा", "आपातकालीन सेवा",
    "24 hour funeral services", "immediate funeral assistance", "emergency antim sanskar",
    
    // Cultural & Religious Terms
    "मृत्यु संस्कार", "अंत्येष्टि", "पिंडदान", "अंतिम क्रिया", "मुक्ति धाम",
    "vedic funeral rituals", "hindu last rites", "pitru paksha", "moksha services",
    "धार्मिक संस्कार", "वैदिक विधि", "शास्त्रोक्त विधि",
    
    // Location-specific
    "indore funeral services", "indore antim sanskar", "मध्य प्रदेश अंतिम संस्कार",
    "madhya pradesh funeral", "इंदौर में अंतिम संस्कार", "funeral service provider indore",
    
    // Comprehensive Service Terms
    "complete funeral arrangements", "पूर्ण अंतिम संस्कार व्यवस्था", "funeral package indore",
    "antim sanskar materials", "cremation ground assistance", "मोक्ष धाम सेवा",
    
    // Contact & Business
    "call antim seva", "9179677292", "antimseva contact", "funeral helpline indore"
  ],
  authors: [{ name: "Antim Seva Team" }],
  generator: "v0.dev", // ✅ kept as you had originally
  metadataBase: new URL("https://antimseva.in"),
  openGraph: {
    title: "Antim Seva | अंतिम सेवा | Dignified Funeral Services Indore",
    description:
      "Complete last journey & funeral arrangements in Indore — Shav Vahan, Pandit Ji, Cremation, Antim Sanskar rituals with dignity and care. 24/7 Emergency Services. अंतिम संस्कार की सभी आवश्यक सामग्री।",
    url: "https://antimseva.in",
    siteName: "Antim Seva",
    images: [
      {
        url: "/products/logo.png",
        width: 1200,
        height: 630,
        alt: "Antim Seva - Dignified Funeral Services in Indore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@antimseva", // update when Twitter/X account exists
    title: "Antim Seva | Funeral Services",
    description:
      "Funeral & antim sanskar services with dignity and compassigiton. Pandit Ji, Shav Vahan, cremation assistance.",
    images: ["/products/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/products/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/products/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/products/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
}