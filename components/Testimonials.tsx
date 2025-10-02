'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Interior Designer",
      company: "Chen Design Studio",
      content: "SpaceDesign3D has revolutionized my workflow. What used to take days now takes hours. The 3D visualization helps my clients understand the design immediately, and the collaboration features make revisions seamless.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Architect",
      company: "Rodriguez & Associates",
      content: "The AI-assisted layout suggestions are incredibly smart. It's like having a design partner that never sleeps. My productivity has increased by 300% since I started using this platform.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Real Estate Developer",
      company: "Thompson Properties",
      content: "Our sales team loves the virtual tours feature. Potential buyers can walk through properties before they're even built. It's increased our pre-sales by 45% and reduced the decision time significantly.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Homeowner",
      company: "",
      content: "As someone with no design experience, this tool made it possible for me to redesign my entire home. The drag-and-drop interface is intuitive, and seeing everything in 3D before buying furniture saved me thousands.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Design Student",
      company: "Art Institute",
      content: "This platform has been invaluable for my studies. The material library is extensive, and the rendering quality is professional-grade. It's helped me build an impressive portfolio without breaking the bank.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Contractor",
      company: "Wilson Construction",
      content: "The detailed floor plans and material specifications help me provide accurate quotes faster. My clients appreciate the transparency, and I've reduced project disputes by 80% since using this tool.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Designers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who trust AceStar3D for their interior design projects. 
            See what they have to say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Designs Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        <span className="mx-1">•</span>
                        {testimonial.company}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Start creating stunning 3D interior designs today and see why thousands of 
              professionals choose AceStar3D for their projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">IKEA</div>
            <div className="text-2xl font-bold text-gray-400">Wayfair</div>
            <div className="text-2xl font-bold text-gray-400">West Elm</div>
            <div className="text-2xl font-bold text-gray-400">CB2</div>
            <div className="text-2xl font-bold text-gray-400">Design Within Reach</div>
          </div>
        </div>
      </div>
    </section>
  )
}
