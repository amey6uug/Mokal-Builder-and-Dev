'use client'

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Transform your vision into reality with our comprehensive residential construction services. From foundation to finish, we deliver quality homes.',
      icon: '🏠',
    },
    {
      title: 'Commercial Construction',
      description: 'Professional commercial projects including office towers, retail spaces, and mixed-use developments with modern architecture.',
      icon: '🏢',
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into your existing space with our expert renovation services. Modern upgrades and stunning transformations.',
      icon: '🔨',
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">Our Services</h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-lg shadow-lg p-8 hover:shadow-xl hover:bg-white transition-all duration-300 border border-[#E5E7EB]"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#0F2B5A] mb-3">{service.title}</h3>
              <p className="text-[#4B5563] leading-relaxed mb-4">{service.description}</p>
              <a href="/services" className="text-[#0F2B5A] font-semibold hover:text-[#F5A623] transition-colors duration-300">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services