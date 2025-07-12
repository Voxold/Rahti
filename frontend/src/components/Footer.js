import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">R7</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">RA7TI</h3>
                  <p className="text-emerald-300 text-sm">Healthcare at Your Doorstep</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Revolutionizing post-surgery care with professional home healthcare services. 
                Your recovery, our priority.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                  <span className="text-white text-xl">🌐</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <span className="text-emerald-400 mr-3">🏥</span>
                  Post-Surgery Care
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-emerald-400 mr-3">🩹</span>
                  Wound Care
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-emerald-400 mr-3">💓</span>
                  Vital Signs Monitoring
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-emerald-400 mr-3">💊</span>
                  Medication Management
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 RA7TI Healthcare Platform. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200">Privacy Policy</span>
                <span className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200">Terms of Service</span>
                <div className="flex items-center space-x-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer