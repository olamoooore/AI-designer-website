'use client'

import { useRef, useState, useEffect } from 'react'

export default function TargetMarket() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const targetMarkets = [
    {
      id: 1,
      category: 'Design Pro',
      title: 'Interior Designers & Decorators',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 2,
      category: 'Build Tech',
      title: 'Architects & Building Consultants',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 3,
      category: 'Property',
      title: 'Real Estate Developers & Agents',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 4,
      category: 'Retail',
      title: 'Furniture & Home Décor Retailers',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 5,
      category: 'Construct',
      title: 'Renovation & Construction Companies',
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 6,
      category: 'Home Life',
      title: 'Homeowners & Renters',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 7,
      category: 'New Home',
      title: 'First-time Home Buyers',
      image: 'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 8,
      category: 'Learning',
      title: 'Students & Hobbyists',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 9,
      category: 'Business',
      title: 'Hospitality & Retail Chains',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 10,
      category: 'Workspace',
      title: 'Corporate Offices & Coworking Spaces',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    },
    {
      id: 11,
      category: 'Events',
      title: 'Event Planners & Exhibition Designers',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop&crop=center'
    }
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false)
    document.addEventListener('mouseup', handleMouseUpGlobal)
    return () => document.removeEventListener('mouseup', handleMouseUpGlobal)
  }, [])

  return (
    <section id="target-market" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Target Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 3D design platform empowers professionals and enthusiasts across diverse industries 
            to create stunning visualizations and bring their ideas to life.
          </p>
        </div>

        {/* Draggable Grid Container */}
        <div className="relative">
          {/* Scrollable Grid */}
          <div
            ref={scrollRef}
            className={`overflow-x-auto scrollbar-hide px-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {targetMarkets.map((market) => (
                <div
                  key={market.id}
                  className="group relative w-80 h-[500px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex-shrink-0"
                >
                  {/* Background Image - Takes up most of the card */}
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={market.image}
                      alt={market.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Overlay - Bottom section */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm rounded-t-3xl p-6">
                    <div className="flex items-center justify-between">
                             <div className="flex-1">
                               <div className="mb-2">
                                 <span className="text-sm text-blue-600 font-medium">{market.category}</span>
                               </div>
                               <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                 {market.title}
                               </h3>
                             </div>
                      
                      {/* Rotating Arrow Button */}
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                          <svg 
                            className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-45" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect - Subtle border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200/50 rounded-3xl transition-all duration-300"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Design Process?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our platform to create stunning 3D visualizations. 
            Start your free trial today and experience the future of design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
