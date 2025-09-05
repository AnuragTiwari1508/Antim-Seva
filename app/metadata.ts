import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Antim Seva | Funeral & Last Journey Services",
  description:
    "Antim Seva provides dignified funeral and antim sanskar services with care, compassion, and respect. Services include Shav Vahan, Pandit Ji, cremation assistance, and complete last journey support.",
  keywords: [
    "Antim Seva",
    "antim seva",
    "antimseva",
    "antimsewa",
    "Funeral Services",
    "Shav Vahan",
    "Cremation Services",
    "Pandit Ji for Antim Sanskar",
    "Last Journey Services",
    "Antim Sanskar",
    "Final Journey Rituals",
    "Funeral Management",
    "Antim Yatra",
  ],
  authors: [{ name: "Antim Seva Team" }],
  generator: "v0.dev", // ✅ kept as you had originally
  metadataBase: new URL("https://antimseva.in"),
  openGraph: {
    title: "Antim Seva | Dignified Funeral Services",
    description:
      "Complete last journey & funeral arrangements — Shav Vahan, Pandit Ji, Cremation, Antim Sanskar rituals with dignity and care.",
    url: "https://antimseva.in",
    siteName: "Antim Seva",
    images: [
      {
        url: "/og-image.jpg", // make sure og-image.jpg is inside /public
        width: 1200,
        height: 630,
        alt: "Antim Seva Services",
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
  icon: "/favicon.ico", // put favicon.ico in /public
  },
}
