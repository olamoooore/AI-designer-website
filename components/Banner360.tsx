'use client'

import { useState } from 'react'

export default function Banner360() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/uySn1BZiWWs?autoplay=1&mute=1&loop=1&playlist=uySn1BZiWWs&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0"
          className="w-full h-full scale-110"
          style={{ transform: 'scale(1.1)' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setIsVideoLoaded(true)}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Immerse in 360° Virtual Tours
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Walk through your designs in full 360°, explore every detail as if you're really there.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            Try 360 Walkthrough
          </button>
        </div>
      </div>

      {/* Loading indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )}
    </section>
  )
}
