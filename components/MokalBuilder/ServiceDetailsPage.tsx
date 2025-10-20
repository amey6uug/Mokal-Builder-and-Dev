'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ServiceDetailsPage() {
  const [activeTab, setActiveTab] = useState('residential')

  const services = {
    residential: {
      title: 'Residential Construction',
      subtitle: 'Build Your Dream Home',
      description: 'Expert residential construction services with premium quality standards and meticulous attention to detail.',
      features: [
        'Modern architectural designs',
        'Premium material selection',
        'Expert project management',
        'Transparent costing',
        'Quality assurance at every stage',
        '5-year comprehensive warranty',
      ],
      price: 'Starting from ₹15 Lakh',
      timeline: '6-12 months',
    },
    renovation: {
      title: 'Renovation & Remodeling',
      subtitle: 'Breathe New Life Into Your Space',
      description: 'Complete renovation solutions transforming your existing spaces with contemporary designs and sustainable materials.',
      features: [
        'Space optimization',
        '3D visualization',
        'Modern finishes',
        'Eco-friendly materials',
        'Minimal disruption',
        'Comprehensive site management',
      ],
      price: 'Custom quotes',
      timeline: '3-8 months',
    },
    waterproofing: {
      title: 'Waterproofing Solutions',
      subtitle: 'Protect Your Investment',
      description: 'Advanced waterproofing systems protecting your buildings from moisture damage and extending structural life.',
      features: [
        'Liquid waterproofing membranes',
        'Bituminous coatings',
        'Crack repair services',
        'Terrace waterproofing',
        'Basement protection',
        '10-year warranty',
      ],
      price: 'Starting from ₹2 Lakh',
      timeline: '2-4 weeks',
    },
    interior: {
      title: 'Interior Design',
      subtitle: 'Contemporary Living Spaces',
      description: 'Premium interior design services creating elegant, functional, and personalized spaces that reflect your lifestyle.',
      features: [
        'Design consultation',
        'Space planning',
        'Furniture & decor selection',
        'Lighting design',
        'Color coordination',
        'Project execution',
      ],
      price: 'Starting from ₹5 Lakh',
      timeline: '2-6 months',
    },
  }

  const activeService = services[activeTab as keyof typeof services]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 top-32">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Comprehensive construction solutions tailored to your needs</p>
        </motion.div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(services).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-600/50'
                    : 'bg-slate-700/50 border border-amber-600/20 text-gray-300 hover:border-amber-500/50 hover:bg-slate-700'
                }`}
              >
                {value.title.split(' ')[0]}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Content */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-4">
                  Premium Service
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {activeService.title}
              </h2>
              <p className="text-xl text-amber-400 mb-4">{activeService.subtitle}</p>
              <p className="text-gray-300 text-lg leading-relaxed">{activeService.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" fill="none" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contacts"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 border-2 border-amber-500/50 text-amber-400 rounded-lg font-bold hover:bg-amber-500/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-8 shadow-2xl sticky top-32">
              <h3 className="text-2xl font-bold text-white mb-8">Project Details</h3>

              <div className="space-y-6">
                {/* Investment */}
                <div>
                  <p className="text-amber-400/60 text-sm font-semibold uppercase mb-2">Investment Range</p>
                  <p className="text-2xl font-bold text-amber-400">{activeService.price}</p>
                </div>

                {/* Timeline */}
                <div>
                  <p className="text-amber-400/60 text-sm font-semibold uppercase mb-2">Project Timeline</p>
                  <p className="text-2xl font-bold text-amber-400">{activeService.timeline}</p>
                </div>

                {/* Quality Assurance */}
                <div className="border-t border-amber-500/20 pt-6">
                  <p className="text-white font-semibold mb-4">Quality Assurance</p>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Certified project managers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Regular quality inspections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Transparent documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-400">✓</span>
                      <span>Extended warranties</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300">
                  Request Quote Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-amber-600/20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Work Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Detailed project planning and budgeting' },
              { step: '03', title: 'Execution', desc: 'Professional implementation with quality control' },
              { step: '04', title: 'Handover', desc: 'Final inspection and project delivery' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-700/50 border border-amber-600/20 rounded-lg p-6 text-center hover:border-amber-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-amber-500 mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
