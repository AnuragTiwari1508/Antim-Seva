import "./globals.css"
import { Providers } from "@/app/providers"
import Script from "next/script"
import StructuredData from "@/components/structured-data"

// Import metadata
export { metadata } from "./metadata"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/products/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Cormorant:ital,wght@0,300..700;1,300..700&family=DM+Serif+Text:ital@0;1&family=Francois+One&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=News+Cycle:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

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

        {/* Enhanced Structured Data for Better SEO */}
        <StructuredData />

        {/* ✅ Website Navigation Structure */}
        <Script id="website-navigation" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Antim Seva",
            "url": "https://antimseva.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://antimseva.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Antim Seva"
            }
          })}
        </Script>

        {/* ✅ Breadcrumb Navigation */}
        <Script id="breadcrumb-navigation" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://antimseva.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://antimseva.in/about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Our Services",
                "item": "https://antimseva.in/services"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact Us",
                "item": "https://antimseva.in/contact"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "FAQ",
                "item": "https://antimseva.in/faq"
              }
            ]
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
