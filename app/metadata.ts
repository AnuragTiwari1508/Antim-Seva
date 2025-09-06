import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Antim Seva | अंतिम सेवा | Funeral Services Indore | Last Journey Rituals",
  description:
    "Antim Seva provides dignified funeral and antim sanskar services in Indore with complete devotion. Shav Vahan, Pandit Ji, cremation assistance, ritual materials available 24/7. अंतिम संस्कार की सभी आवश्यक सामग्री और सेवाएं।",
  keywords: [
    "Antim Seva",
    "अंतिम सेवा", 
    "antim seva indore",
    "antimseva",
    "antimsewa", 
    "अंतिम संस्कार सेवा",
    "funeral services indore",
    "Shav Vahan Indore",
    "अंतिम संस्कार सामग्री",
    "Cremation Services Indore",
    "Pandit Ji for Antim Sanskar",
    "Last Journey Services Indore",
    "Antim Sanskar Indore",
    "Final Journey Rituals",
    "Funeral Management Indore",
    "Antim Yatra",
    "दाह संस्कार सेवा",
    "पंडित जी सेवा",
    "शव वाहन इंदौर",
    "funeral services near me",
    "antim seva contact number",
    "emergency funeral services",
    "24/7 funeral services indore"
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
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/products/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/products/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
}