export default function Gallery360() {
  const galleryItems = [
    {
      id: 1,
      title: "Modern Living Room",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      description: "Spacious contemporary living space with natural lighting"
    },
    {
      id: 2,
      title: "Kitchen Design",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
      description: "Modern kitchen with premium finishes and smart storage"
    },
    {
      id: 3,
      title: "Master Bedroom",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop&crop=center",
      description: "Elegant bedroom design with custom built-ins"
    },
    {
      id: 4,
      title: "Office Space",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
      description: "Productive workspace with ergonomic furniture"
    },
    {
      id: 5,
      title: "Dining Area",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
      description: "Formal dining room with statement lighting"
    },
    {
      id: 6,
      title: "Outdoor Patio",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      description: "Seamless indoor-outdoor living experience"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery of 360° Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore real examples of immersive 360° walkthroughs created with AceStar3D
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                    View 360° Tour
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  )
}
