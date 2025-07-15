const AboutPage = () => {
  const team = [
    {
      name: 'Dr. Sarah Wilson',
      role: 'Chief Medical Officer',
      bio: 'Board-certified physician with 15+ years in home healthcare',
      specialties: ['Post-Surgery Care', 'Wound Management', 'Emergency Medicine']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      bio: 'Healthcare operations expert focused on patient experience',
      specialties: ['Operations Management', 'Quality Assurance', 'Team Leadership']
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Lead Therapist',
      bio: 'Licensed physical therapist specializing in home rehabilitation',
      specialties: ['Physical Therapy', 'Rehabilitation', 'Mobility Training']
    }
  ];

  const values = [
    {
      icon: '❤️',
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine care for their wellbeing.'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for the highest standards in healthcare delivery and patient satisfaction.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships through transparency, reliability, and professional integrity.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Continuously improving our services through technology and best practices.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Patients Served', icon: '👥' },
    { number: '500+', label: 'Healthcare Professionals', icon: '👨‍⚕️' },
    { number: '50+', label: 'Cities Covered', icon: '🏙️' },
    { number: '98%', label: 'Satisfaction Rate', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="block text-emerald-200">RA7TI</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing healthcare delivery by bringing professional medical services 
            directly to your home, ensuring comfort, convenience, and quality care.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At RA7TI, we believe that quality healthcare should be accessible, convenient, 
                and delivered with compassion. Our mission is to transform the healthcare 
                experience by providing professional medical services in the comfort of your home.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in post-surgery care, wound management, vital signs monitoring, 
                and comprehensive health support services. Our certified healthcare professionals 
                are dedicated to ensuring your recovery and wellbeing every step of the way.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why We Started RA7TI</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Founded by healthcare professionals who recognized the gap between hospital 
                  discharge and full recovery, RA7TI was created to provide the missing link 
                  in patient care.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                    🏥
                  </div>
                  <div>
                    <p className="font-semibold">Est. 2020</p>
                    <p className="text-emerald-200">Serving communities nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to your wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mr-2 mb-2">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage