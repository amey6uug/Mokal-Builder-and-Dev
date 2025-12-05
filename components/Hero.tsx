'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [area, setArea] = useState('')
  const [service, setService] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ area, service, phone })
      })
      if (response.ok) {
        alert('Lead submitted successfully!')
        setArea('')
        setService('')
        setPhone('')
      } else {
        alert('Failed to submit. Please try again.')
      }
    } catch (error) {
      alert('Error submitting form.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 overflow-hidden" role="banner">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full opacity-10 blur-3xl"
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center text-white max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build Your Dream Home with Expert Craftsmanship
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Professional construction and renovation services for quality results that last a lifetime
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-200 shadow-lg"
            >
              Book Site Visit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition-all duration-200 shadow-lg"
            >
              Get Free Estimate
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 transition-all duration-200 shadow-lg"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl max-w-md mx-auto shadow-2xl"
            role="form"
            aria-label="Quick Estimate Form"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get Instant Estimate</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Area (sq ft)</label>
                <input
                  id="area"
                  type="text"
                  placeholder="e.g. 1200"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                  aria-describedby="area-help"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                  aria-describedby="service-help"
                >
                  <option value="">Select Service</option>
                  <option value="construction">Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="waterproofing">Waterproofing</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                  aria-describedby="phone-help"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Estimate'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero