const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Mokal Builder
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Building dreams with quality craftsmanship and unwavering commitment to excellence. Your trusted construction partner in Maharashtra.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/mokalbuiilder" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mokalbuiilder" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.084.605c-.713.306-1.318.907-1.62 1.62C2.16 2.937 1.98 3.746 1.927 4.952.974 7.996.96 8.396.96 12.017s.014 4.021.067 5.227c.053 1.206.235 2.015.538 2.706.306.713.907 1.318 1.62 1.62.691.303 1.5.485 2.706.538 1.206.053 1.606.067 5.227.067s4.021-.014 5.227-.067c1.206-.053 2.015-.235 2.706-.538.713-.306 1.318-.907 1.62-1.62.303-.691.485-1.5.538-2.706.053-1.206.067-1.606.067-5.227s-.014-4.021-.067-5.227c-.053-1.206-.235-2.015-.538-2.706-.306-.713-.907-1.318-1.62-1.62C19.063 2.16 18.254 1.98 17.048 1.927 15.842.974 15.442.96 12.017.96zm0 2.403c3.558 0 3.958.014 5.357.078 1.206.053 1.875.255 2.317.423.573.218 1.019.58 1.447 1.008.428.428.79.874 1.008 1.447.168.442.37 1.111.423 2.317.064 1.399.078 1.799.078 5.357s-.014 3.958-.078 5.357c-.053 1.206-.255 1.875-.423 2.317-.218.573-.58 1.019-1.008 1.447-.428.428-.874.79-1.447 1.008-.442.168-1.111.37-2.317.423-1.399.064-1.799.078-5.357.078s-3.958-.014-5.357-.078c-1.206-.053-1.875-.255-2.317-.423-.573-.218-1.019-.58-1.447-1.008-.428-.428-.79-.874-1.008-1.447-.168-.442-.37-1.111-.423-2.317C2.455 15.975 2.441 15.575 2.441 12.017s.014-3.958.078-5.357c.053-1.206.255-1.875.423-2.317.218-.573.58-1.019 1.008-1.447.428-.428.874-.79 1.447-1.008.442-.168 1.111-.37 2.317-.423 1.399-.064 1.799-.078 5.357-.078zm0 6.81c-3.717 0-6.727 3.01-6.727 6.727s3.01 6.727 6.727 6.727 6.727-3.01 6.727-6.727-3.01-6.727-6.727-6.727zm0 11.13c-2.41 0-4.363-1.953-4.363-4.363s1.953-4.363 4.363-4.363 4.363 1.953 4.363 4.363-1.953 4.363-4.363 4.363zm8.465-11.363c0 .916-.74 1.656-1.656 1.656s-1.656-.74-1.656-1.656.74-1.656 1.656-1.656 1.656.74 1.656 1.656z"/>
                  </svg>
                </a>
                <a href="https://wa.me/91XXXXXXXXXX" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300" aria-label="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <nav aria-label="Services" className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                    Residential Construction
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                    Renovation & Remodeling
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                    Waterproofing & Finishes
                  </a>
                </li>
              </ul>
            </nav>

            {/* Quick Links */}
            <nav aria-label="Quick Links" className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                    Client Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-white transition-colors duration-300">
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:info@mokalbuiilder.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                      info@mokalbuiilder.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Mokal Builder. All rights reserved. | Building Dreams, Delivering Excellence.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer