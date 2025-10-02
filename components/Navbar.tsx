'use client'

import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-heading text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-200">
              AceStar3D
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Products
                  <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[1000px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-8 px-8 z-50">
                    <div className="grid grid-cols-6 gap-6">
                      {/* Left Section - Target Market Categories */}
                      <div className="col-span-2">
                        <h3 className="text-sm font-semibold text-gray-900 mb-6">Target Market</h3>
                        <div className="space-y-2">
                          <a href="/interior-design" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Interior Designers & Decorators</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Architects & Building Consultants</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Real Estate Developers & Agents</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Furniture & Home Décor Retailers</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Renovation & Construction Companies</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Homeowners & Renters</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">First-time Home Buyers</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Students & Hobbyists</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Hospitality & Retail Chains</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Corporate Offices & Coworking Spaces</span>
                          </a>
                          
                          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">Event Planners & Exhibition Designers</span>
                          </a>
                        </div>
                      </div>

                      {/* Right Section - Features Categories */}
                      <div className="col-span-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-6">Features</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {/* Design Section */}
                          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop&crop=center&auto=format&q=80)'}}>
                              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <h4 className="text-base font-bold text-white drop-shadow-lg">Design</h4>
                              </div>
                            </div>
                            <div className="bg-white p-3 border-t border-gray-100">
                              <div className="space-y-1">
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Floor Planner</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Custom Furniture</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Collaboration</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Mobile App</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Model Library</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Visualization Section */}
                          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop&crop=center&auto=format&q=80)'}}>
                              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <h4 className="text-base font-bold text-white drop-shadow-lg">Visualization</h4>
                              </div>
                            </div>
                            <div className="bg-white p-3 border-t border-gray-100">
                              <div className="space-y-1">
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Video Render</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Virtual Studio</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">VR & AR Technology</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="/360-walkthrough" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">3D Viewer</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Service Section */}
                          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center&auto=format&q=80)'}}>
                              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <h4 className="text-base font-bold text-white drop-shadow-lg">Service</h4>
                              </div>
                            </div>
                            <div className="bg-white p-3 border-t border-gray-100">
                              <div className="space-y-1">
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">3D Modeling</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">3D Content Creation</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <a href="#" className="flex items-center justify-between text-xs text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50 group">
                                  <span className="font-medium">Hire Designer</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Community
              </a>
              <a href="#learn" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Learn
              </a>
              <a href="#business" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Business
              </a>
              <a href="#ai" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                AI
                <div className="ml-1 w-2 h-2 bg-orange-500 rounded-full"></div>
              </a>
            </div>
          </div>

          {/* Right Side - Search, Mobile, Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-full transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Mobile Icon */}
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-full transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </button>
            
            {/* Auth Buttons */}
            <button className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100">
            {/* Products Section */}
            <div className="border-b border-gray-100 pb-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 px-3 py-2">Products</h3>
              <a href="/interior-design" className="text-gray-600 hover:text-blue-600 block px-6 py-1 text-sm">Interior Design Software</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 block px-6 py-1 text-sm">AceStar3D Pro</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 block px-6 py-1 text-sm">AI Interior Design Tools</a>
              <a href="/360-walkthrough" className="text-gray-600 hover:text-blue-600 block px-6 py-1 text-sm">360 Walkthrough</a>
            </div>

            <a href="#pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <a href="#community" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Community
            </a>
            <a href="#learn" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Learn
            </a>
            <a href="#business" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Business
            </a>
            <a href="#ai" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center">
              AI
              <div className="ml-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            </a>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2">
              <button className="w-full text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-gray-300">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
