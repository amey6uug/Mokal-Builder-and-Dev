'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroBirla() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold">
                  ✨ Premium Construction Excellence
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Build Your
                </span>
                <br />
                <span className="text-white">Luxury Dream</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Experience world-class construction services with Birla Opus premium quality standards. We craft your vision into masterpieces with meticulous attention to detail.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/details"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-4 border-2 border-amber-500/50 text-amber-400 rounded-lg font-bold hover:bg-amber-500/10 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-amber-400">500+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-amber-400">15+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-amber-400">4.9/5</p>
                <p className="text-sm text-gray-400">Client Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full hidden md:flex items-center justify-center"
          >
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full max-w-sm"
            >
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2L15.09 8.26H22L17.55 12.79L19.64 19.04L12 14.51L4.36 19.04L6.45 12.79L2 8.26H8.91L12 2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white">Premium Quality</p>
                      <p className="text-sm text-gray-400">World-class materials & craftsmanship</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white">Timely Delivery</p>
                      <p className="text-sm text-gray-400">Project management excellence</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white">Full Warranty</p>
                      <p className="text-sm text-gray-400">5-year comprehensive coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  )
}
