import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Antim Seva - अंतिम सेवा | Funeral Services Indore | Antim Sanskar 24/7",
  description:
    "Antim Seva Indore - Complete funeral services with dignity. Shav Vahan, Pandit Ji, Antim Sanskar materials, cremation assistance. 24/7 emergency. Call +91 91796 77292. अंतिम संस्कार की सभी सामग्री और सेवाएं।",
  keywords: [
    // Most searched terms first
    "अंतिम सेवा", "अंतिम संस्कार", "Antim Seva", "antim seva indore",
    "अंतिम संस्कार इंदौर", "funeral services indore", "antimseva", "antim sewa",
    "शव वाहन", "अंतिम संस्कार सामग्री", "Shav Vahan", "Antim Sanskar",
    "cremation services indore", "funeral services near me", "अंतिम यात्रा",
    "pandit ji indore", "दाह संस्कार", "last journey services", "final rites",
    "hindu funeral services", "religious ceremony indore", "death rituals",
    "funeral materials indore", "emergency funeral services", "24x7 funeral",
    "madhya pradesh funeral", "मृत्यु संस्कार", "अंत्येष्टि", "पिंडदान",
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
        url: "/logo.png",
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
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/products/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
}