"use client"

export default function BannerInterior() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="max-w-lg">
                <h1 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Create room design and interior decor in 2D & 3D — no special skills needed.
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A simple but powerful tool for homeowners, designers, and creators.
                </p>
                
                {/* Download Badges */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-black rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                  
                  <div className="bg-black rounded-xl p-4 flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12L3.609 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L12.864 12l5.834-5.834zM5.864 12L.03 17.834l2.808 1.626a1 1 0 001.73 0L5.864 12z"/>
                    </svg>
                    <div>
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  Start Designing Now
                </button>
              </div>
            </div>

            {/* Right Side - 3D Designer Software Image */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-12 lg:p-16 flex items-center justify-center">
              <div className="relative">
                {/* 3D Software Image Frame */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-80 h-64 rounded-xl overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center&auto=format&q=80" 
                      alt="3D Interior Design Software Interface"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNTAgMjAwSDQ1MFY0MDBIMzUwVjIwMFoiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTMwMCAyNTBINTAwVjM1MEgzMDBWMjUwWiIgZmlsbD0iIzM3NDE1MSIvLz4KPHBhdGggZD0iTTI1MCAzMDBINTAwVjQwMEgyNTBWMzAwWiIgZmlsbD0iIzE5MjE0MyIvLz4KPHN2Zz4K'
                      }}
                    />
                    {/* Overlay with software UI elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-gray-700">3D View</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
