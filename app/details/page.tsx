import { Metadata } from 'next'
import NavbarProfessional from '../../components/MokalBuilder/NavbarProfessional'
import FooterBirla from '../../components/MokalBuilder/FooterBirla'
import ServiceDetailsPage from '../../components/MokalBuilder/ServiceDetailsPage'

export const metadata: Metadata = {
  title: 'Services Details - Mokal Builder | Birla Opus Premium Construction',
  description: 'Explore our comprehensive construction services including residential construction, renovation, waterproofing, and interior design with premium quality standards.',
  keywords: 'construction services, renovation, waterproofing, interior design, construction details',
  openGraph: {
    title: 'Our Premium Services - Mokal Builder',
    description: 'Comprehensive construction services with Birla Opus quality',
    url: 'https://mokalbuilder.com/details',
    type: 'website',
  },
}

export default function DetailsPage() {
  return (
    <>
      <NavbarProfessional />
      <ServiceDetailsPage />
      <FooterBirla />
    </>
  )
}
