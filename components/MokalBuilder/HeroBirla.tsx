'use client'

import Link from 'next/link'

export default function HeroBirla() {
  return (
    <section className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold">
                  ✨ Premium Construction Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-[#0F2B5A]">Build Your</span>
                <br />
                <span className="text-[#F5A623]">Luxury Dream</span>
              </h1>

              <p className="text-lg text-[#4B5563] leading-relaxed max-w-lg">
                Experience world-class construction services with Mokal Builder premium quality standards. We craft your vision into masterpieces with meticulous attention to detail.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/services"
                className="group px-8 py-4 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-950 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-4 border-2 border-blue-900 text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-900">500+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-900">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-900">4.9/5</p>
                <p className="text-sm text-gray-600">Client Rating</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative h-96 md:h-full hidden md:flex items-center justify-center">
            {/* Floating Card */}
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2L15.09 8.26H22L17.55 12.79L19.64 19.04L12 14.51L4.36 19.04L6.45 12.79L2 8.26H8.91L12 2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Premium Quality</p>
                      <p className="text-sm text-gray-700">World-class materials & craftsmanship</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Timely Delivery</p>
                      <p className="text-sm text-gray-700">Project management excellence</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Full Warranty</p>
                      <p className="text-sm text-gray-700">5-year comprehensive coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
