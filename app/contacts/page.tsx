import { Metadata } from 'next'
import NavbarProfessional from '../../components/MokalBuilder/NavbarProfessional'
import FooterBirla from '../../components/MokalBuilder/FooterBirla'
import ContactsPage from '../../components/MokalBuilder/ContactsPage'

export const metadata: Metadata = {
  title: 'Contact Us - Mokal Builder | Get Your Free Consultation',
  description: 'Contact Mokal Builder for free consultation, quotes, and project inquiries. We are available across Mumbai and nearby areas.',
  keywords: 'contact, free consultation, quote, project inquiry, Mokal Builder',
  openGraph: {
    title: 'Contact Mokal Builder - Premium Construction',
    description: 'Get in touch for your construction project',
    url: 'https://mokalbuilder.com/contacts',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <NavbarProfessional />
      <ContactsPage />
      <FooterBirla />
    </>
  )
}
