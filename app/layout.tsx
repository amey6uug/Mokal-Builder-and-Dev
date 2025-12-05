import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mokal Builder - Professional Construction & Renovation',
  description: 'Expert construction and renovation services for homeowners and developers. Get free estimates and book site visits today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mokal Builder",
              "description": "Professional construction and renovation company specializing in residential construction, renovation, and waterproofing services.",
              "url": "https://mokalbuiilder.com",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address", // Wire to CMS: company.address.street
                "addressLocality": "Your City", // Wire to CMS: company.address.city
                "addressRegion": "Your State", // Wire to CMS: company.address.state
                "postalCode": "Your Postal Code", // Wire to CMS: company.address.zip
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "Your Latitude", // Wire to CMS: company.geo.lat
                "longitude": "Your Longitude" // Wire to CMS: company.geo.lng
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9", // Wire to CMS: reviews.averageRating
                "reviewCount": "150" // Wire to CMS: reviews.totalCount
              },
              "sameAs": [
                "https://www.facebook.com/mokalbuiilder", // Wire to CMS: social.facebook
                "https://www.instagram.com/mokalbuiilder", // Wire to CMS: social.instagram
                "https://wa.me/91XXXXXXXXXX" // Wire to CMS: social.whatsapp
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "Your Latitude",
                  "longitude": "Your Longitude"
                },
                "geoRadius": "50000" // 50km radius
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Construction",
                      "description": "Complete home building from foundation to finish"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Renovation & Remodeling",
                      "description": "Transform existing spaces with modern designs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Waterproofing & Finishes",
                      "description": "Protect your property with advanced waterproofing"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}