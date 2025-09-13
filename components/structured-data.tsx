import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Antim Seva",
    "alternateName": ["अंतिम सेवा", "Antim Sewa"],
    "url": "https://antimseva.in",
    "logo": "https://antimseva.in/products/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9179677292",
      "contactType": "Emergency Support",
      "availableLanguage": ["Hindi", "English"],
      "areaServed": "Indore, Madhya Pradesh, India"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://antimseva.in"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Antim Seva",
    "description": "Complete funeral services and Antim Sanskar arrangements in Indore with dignity and care. 24/7 emergency services.",
    "url": "https://antimseva.in",
    "telephone": "+91-9179677292",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7196",
      "longitude": "75.8577"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "servedCuisine": [],
    "serviceArea": {
      "@type": "City",
      "name": "Indore"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Antim Seva - Funeral Services",
    "description": "Complete Antim Sanskar and funeral services including Shav Vahan, Pandit Ji, cremation assistance, and ritual materials.",
    "provider": {
      "@type": "Organization",
      "name": "Antim Seva",
      "url": "https://antimseva.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Indore, Madhya Pradesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Funeral Service Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Antim Sanskar Package",
            "description": "All necessary ritual materials and services for Hindu funeral ceremonies"
          }
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}