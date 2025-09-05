import "./globals.css"
import { Providers } from "@/app/providers"
import Script from "next/script"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YG4KQ5XGJE"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YG4KQ5XGJE');
          `}
        </Script>

        {/* ✅ Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Antim Seva",
            "url": "https://antimseva.in",
            "logo": "https://antimseva.in/og-image.jpg",
            "sameAs": [
              "https://instagram.com/antimseva"
              // add twitter later when available
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 91796 77292",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            }
          })}
        </Script>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
