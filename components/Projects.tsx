'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'before' | 'after'>('after')

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Construction',
      category: 'construction',
      before: '/before1.webp', // Replace with presigned S3 URL: projects[0].beforeImage
      after: '/after1.webp', // Replace with presigned S3 URL: projects[0].afterImage
      description: 'Complete villa construction with modern amenities'
    },
    {
      id: 2,
      title: 'Kitchen Renovation',
      category: 'renovation',
      before: '/before2.webp', // Replace with presigned S3 URL: projects[1].beforeImage
      after: '/after2.webp', // Replace with presigned S3 URL: projects[1].afterImage
      description: 'Full kitchen makeover with premium finishes'
    },
    {
      id: 3,
      title: 'Waterproofing Project',
      category: 'waterproofing',
      before: '/before3.webp', // Replace with presigned S3 URL: projects[2].beforeImage
      after: '/after3.webp', // Replace with presigned S3 URL: projects[2].afterImage
      description: 'Advanced waterproofing for terrace and bathrooms'
    }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const toggleView = () => {
    setViewMode(viewMode === 'before' ? 'after' : 'before')
  }

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden" aria-labelledby="projects-heading">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-30 -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-50 to-purple-50 rounded-full opacity-25 translate-y-40 translate-x-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200 mb-6"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Our Portfolio
          </motion.div>

          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our craftsmanship through completed projects that showcase quality, innovation, and attention to detail
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['all', 'construction', 'renovation', 'waterproofing'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter(category)
                setCurrentIndex(0)
              }}
              className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-xl'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                    {project.category === 'construction' ? '🏗️' :
                     project.category === 'renovation' ? '🔨' : '💧'}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* View Details */}
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>

                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Dream Project?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their construction needs. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200"
              >
                View All Projects
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects