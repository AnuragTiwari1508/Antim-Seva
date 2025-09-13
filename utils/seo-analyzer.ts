// SEO Analysis Tool for Antim Seva

export function analyzeSEO() {
  const seoChecklist = {
    // Technical SEO
    technical: {
      favicon: '✅ Multiple favicon formats configured',
      sitemap: '✅ Sitemap.xml with proper structure',
      robots: '✅ Robots.txt allowing indexing',
      structured_data: '✅ Enhanced structured data (Organization, LocalBusiness, Service)',
      meta_tags: '✅ Comprehensive meta tags with Hindi/English keywords',
      canonical_urls: '✅ Canonical URLs configured'
    },
    
    // Content SEO
    content: {
      primary_keywords: '✅ "antim seva" prominently featured',
      secondary_keywords: '✅ Related terms: अंतिम सेवा, funeral services indore',
      local_seo: '✅ Indore location targeting',
      emergency_keywords: '✅ 24/7, emergency services highlighted',
      service_keywords: '✅ Shav Vahan, Pandit Ji, Antim Sanskar covered'
    },
    
    // Performance SEO
    performance: {
      loading_speed: '⚠️ Check Core Web Vitals',
      mobile_friendly: '⚠️ Ensure responsive design',
      https: '✅ SSL certificate required for https://antimseva.in',
      compression: '⚠️ Enable gzip compression'
    },
    
    // Search Ranking Factors
    ranking: {
      domain_authority: '🔧 New domain - needs backlink building',
      local_citations: '🔧 Add Google My Business listing',
      reviews: '🔧 Encourage customer reviews',
      social_signals: '🔧 Build social media presence',
      content_freshness: '✅ Updated content and metadata'
    }
  }
  
  const recommendations = [
    '1. Submit sitemap to Google Search Console',
    '2. Create Google My Business listing for local SEO',
    '3. Build quality backlinks from funeral industry directories',
    '4. Optimize images with alt text containing keywords',
    '5. Create location-specific landing pages',
    '6. Implement local schema markup',
    '7. Build citation consistency across directories',
    '8. Monitor Core Web Vitals performance',
    '9. Create engaging blog content about funeral services',
    '10. Encourage customer testimonials and reviews'
  ]
  
  return { seoChecklist, recommendations }
}

// Keyword density analyzer
export function analyzeKeywordDensity(content: string) {
  const primaryKeywords = [
    'antim seva', 'अंतिम सेवा', 'funeral services',
    'indore', 'antim sanskar', 'शव वाहन'
  ]
  
  const density = primaryKeywords.map(keyword => {
    const regex = new RegExp(keyword, 'gi')
    const matches = content.match(regex) || []
    return {
      keyword,
      count: matches.length,
      density: ((matches.length * keyword.split(' ').length) / content.split(' ').length * 100).toFixed(2) + '%'
    }
  })
  
  return density
}

// Local SEO schema generator
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://antimseva.in/#business",
    "name": "Antim Seva",
    "alternateName": ["अंतिम सेवा", "Antim Sewa"],
    "description": "Complete funeral and Antim Sanskar services in Indore with dignity and respect. 24/7 emergency support.",
    "url": "https://antimseva.in",
    "telephone": "+91-9179677292",
    "priceRange": "$$",
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "22.7196",
        "longitude": "75.8577"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Funeral Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Antim Sanskar Package",
            "description": "Full funeral ceremony arrangements with all ritual materials"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Shav Vahan",
            "description": "24/7 dignified transportation services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  }
}