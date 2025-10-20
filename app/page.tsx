import { Metadata } from 'next'
import NavbarProfessional from '../components/MokalBuilder/NavbarProfessional'
import HeroBirla from '../components/MokalBuilder/HeroBirla'
import FooterBirla from '../components/MokalBuilder/FooterBirla'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'

export const metadata: Metadata = {
  title: 'Mokal Builder - Construction & Renovation Services',
  description: 'Professional construction services including residential construction, renovation, waterproofing, and interior design. Expert craftsmanship and quality results.',
  keywords: 'construction, renovation, waterproofing, interior design, Mumbai, construction services',
  openGraph: {
    title: 'Mokal Builder - Construction Excellence',
    description: 'Professional construction services with expert craftsmanship and quality results.',
    url: 'https://mokalbuilder.com',
    siteName: 'Mokal Builder',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Mokal Builder - Construction Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mokal Builder - Construction Services',
    description: 'Professional construction services with expert craftsmanship.',
    images: ['/twitter-image.webp'],
  },
}

export default function Home() {
  return (
    <>
      <NavbarProfessional />
      <HeroBirla />
      <TrustBar />
      <Services />
      <Projects />
      <Testimonials />
      <FooterBirla />
    </>
  )
}