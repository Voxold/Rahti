import { Link } from "react-router-dom"

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: "🏥",
      title: "Post-Surgery Care",
      description: "Comprehensive post-operative care to ensure smooth recovery",
      features: [
        "Wound monitoring and assessment",
        "Pain management support",
        "Recovery progress tracking",
        "Medication adherence",
        "Complication prevention",
      ],
      price: "Starting at $89/visit",
      duration: "45-60 minutes",
      availability: "24/7 Emergency Support",
    },
    {
      id: 2,
      icon: "🩹",
      title: "Wound Care & Bandaging",
      description: "Professional wound care with sterile technique and infection prevention",
      features: [
        "Sterile wound cleaning",
        "Professional bandage changes",
        "Infection prevention protocols",
        "Healing progress documentation",
        "Specialized wound treatments",
      ],
      price: "Starting at $65/visit",
      duration: "30-45 minutes",
      availability: "Same-day appointments",
    },
    {
      id: 3,
      icon: "💓",
      title: "Vital Signs Monitoring",
      description: "Regular monitoring of essential health indicators",
      features: [
        "Blood pressure measurement",
        "Heart rate monitoring",
        "Temperature checks",
        "Oxygen saturation levels",
        "Health trend analysis",
      ],
      price: "Starting at $45/visit",
      duration: "20-30 minutes",
      availability: "Flexible scheduling",
    },
    {
      id: 4,
      icon: "💊",
      title: "Medication Management",
      description: "Ensure proper medication adherence and safety",
      features: [
        "Medication organization",
        "Dosage verification",
        "Side effect monitoring",
        "Drug interaction checks",
        "Prescription coordination",
      ],
      price: "Starting at $55/visit",
      duration: "30-40 minutes",
      availability: "Weekly visits available",
    },
    {
      id: 5,
      icon: "🏃‍♂️",
      title: "Physical Therapy",
      description: "Personalized rehabilitation exercises and mobility support",
      features: [
        "Customized exercise programs",
        "Mobility assessments",
        "Strength training",
        "Balance improvement",
        "Recovery planning",
      ],
      price: "Starting at $95/session",
      duration: "60-90 minutes",
      availability: "Multiple sessions per week",
    },
    {
      id: 6,
      icon: "🚨",
      title: "Emergency Response",
      description: "24/7 emergency healthcare support and rapid response",
      features: [
        "Immediate response team",
        "Emergency assessment",
        "Hospital coordination",
        "Family communication",
        "Follow-up care",
      ],
      price: "Contact for pricing",
      duration: "As needed",
      availability: "24/7 Emergency Line",
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Book Your Service",
      description: "Choose your needed service and schedule an appointment through our secure platform",
      icon: "📱",
    },
    {
      step: 2,
      title: "Professional Assignment",
      description: "We match you with a certified healthcare professional based on your needs",
      icon: "👨‍⚕️",
    },
    {
      step: 3,
      title: "Service Delivery",
      description: "Receive professional healthcare services in the comfort of your home",
      icon: "🏠",
    },
    {
      step: 4,
      title: "Follow-up Care",
      description: "Continuous monitoring and follow-up to ensure your complete recovery",
      icon: "📋",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Healthcare
            <span className="block text-emerald-200">Services</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional healthcare services delivered to your home by certified medical professionals. Experience
            quality care in the comfort and safety of your own space.
          </p>
          <Link
            to="/login"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Book a Service
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Home
              <span className="block text-emerald-600">Healthcare Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From post-surgery care to routine health monitoring, our certified professionals provide the care you
              need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Price:</span>
                      <span className="font-semibold text-emerald-600">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Duration:</span>
                      <span className="font-medium text-gray-900">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Availability:</span>
                      <span className="font-medium text-blue-600">{service.availability}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Book This Service
                  </button>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Our Service Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and professional healthcare delivery in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose RA7TI?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Certified Professionals",
                description: "All our healthcare providers are licensed, certified, and experienced professionals",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                description: "Your health information is protected with enterprise-grade security measures",
              },
              {
                icon: "⚡",
                title: "Quick Response",
                description: "Fast scheduling and emergency response when you need care the most",
              },
              {
                icon: "💰",
                title: "Affordable Care",
                description: "Competitive pricing with transparent costs and insurance acceptance",
              },
              {
                icon: "📱",
                title: "Easy Booking",
                description: "Simple online booking system with flexible scheduling options",
              },
              {
                icon: "🌟",
                title: "Quality Assured",
                description: "98% patient satisfaction rate with continuous quality monitoring",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Book your first service today and experience the convenience of professional healthcare at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
