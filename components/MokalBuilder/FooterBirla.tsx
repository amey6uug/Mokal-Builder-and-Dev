'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FooterBirla() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 border-t border-amber-600/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-white">
                MO
              </div>
              <div>
                <p className="font-bold text-white">Mokal Builder</p>
                <p className="text-xs text-amber-600/80">Premium Quality</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting premium construction experiences with meticulous attention to detail and world-class standards.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Details', href: '/details' },
                { label: 'Contacts', href: '/contacts' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold">Services</h3>
            <ul className="space-y-2">
              {['Residential Construction', 'Renovation', 'Waterproofing', 'Interior Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-amber-500 rounded-full group-hover:w-2 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors text-sm group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="flex-shrink-0 mt-0.5 group-hover:text-amber-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91-9876543210</span>
              </a>
              <a
                href="mailto:info@mokalbuilder.com"
                className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors text-sm group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="flex-shrink-0 mt-0.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
                <span>info@mokalbuilder.com</span>
              </a>
              <a href="#" className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors text-sm group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Mumbai, India</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-600/20 my-8" />

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Mokal Builder. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { name: 'Facebook', url: '#' },
              { name: 'Instagram', url: '#' },
              { name: 'LinkedIn', url: '#' },
              { name: 'WhatsApp', url: '#' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/50"
                title={social.name}
              >
                {social.name === 'Facebook' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social.name === 'Instagram' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.79.263-1.473.557-2.155 1.242-.686.682-.977 1.365-1.242 2.151-.266.789-.467 1.659-.527 2.937C.038 8.333.015 8.74.015 12c0 3.26.016 3.667.072 4.947.06 1.277.261 2.148.527 2.936.265.79.556 1.473 1.242 2.15.686.694 1.365.978 2.151 1.243.789.266 1.66.466 2.936.526 1.28.056 1.689.072 4.947.072 3.259 0 3.668-.016 4.948-.072 1.277-.06 2.148-.26 2.936-.527.79-.264 1.473-.557 2.15-1.242.695-.687.978-1.365 1.243-2.151.266-.789.467-1.659.527-2.937.056-1.28.072-1.687.072-4.947 0-3.259-.015-3.667-.072-4.947-.06-1.277-.261-2.148-.527-2.936-.264-.79-.556-1.473-1.242-2.15C21.898 1.550 21.217 1.247 20.428.982c-.789-.266-1.66-.466-2.936-.526C15.667.038 15.259.015 12 .015z" />
                  </svg>
                )}
                {social.name === 'LinkedIn' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.554s.047-8.735 0-9.639h3.554v1.365c.429-.646 1.196-1.564 2.905-1.564 2.122 0 3.714 1.388 3.714 4.373v5.465zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.915.753 1.937 1.704 0 .946-.745 1.704-1.985 1.704zm1.946 11.597H3.392V9.009h3.891v11.443zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                )}
                {social.name === 'WhatsApp' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.938 1.21l-.384.214-.398-.052c-1.28-.147-2.485-.555-3.585-1.272C2.5 5.287 1.1 3.303 1.1 1.285 1.1.827 1.474.5 1.874.5h2.993c.358 0 .669.224.754.563.278 1.02.776 1.953 1.456 2.747.336.396.795.739 1.367 1.009.566.268 1.225.404 1.857.404.318 0 .631-.017.94-.05.398-.044.676-.332.72-.73.062-.583.07-1.176.026-1.763-.073-.943.017-1.876.266-2.782.141-.509.51-.863 1.021-.863h3.181c.386 0 .705.291.704.676-.004 1.994-1.356 3.878-3.406 5.265" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
