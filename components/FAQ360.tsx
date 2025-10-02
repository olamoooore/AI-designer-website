'use client'

import { useState } from 'react'

export default function FAQ360() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is a 360° walkthrough?",
      answer: "A 360° walkthrough is an immersive virtual tour that allows you to explore your interior design in full 360 degrees. You can look around, move through spaces, and experience your design as if you were physically there. It's like having a virtual reality experience in your browser or mobile device."
    },
    {
      question: "Can I view 360° walkthroughs on mobile?",
      answer: "Yes! Our 360° walkthroughs are fully responsive and optimized for mobile devices. You can use touch gestures to navigate and explore your designs on smartphones and tablets. The experience is smooth and intuitive across all screen sizes."
    },
    {
      question: "Is VR headset support available?",
      answer: "Yes, our Pro plan includes VR headset compatibility. You can experience your 360° walkthroughs in full virtual reality using compatible VR headsets like Oculus, HTC Vive, or PlayStation VR for the most immersive experience possible."
    },
    {
      question: "How long does it take to generate a walkthrough?",
      answer: "Walkthrough generation typically takes 2-5 minutes depending on the complexity of your design and the quality settings you choose. Our AI automatically optimizes camera positions and rendering settings to create the best possible experience."
    },
    {
      question: "Can I share walkthroughs with clients?",
      answer: "Absolutely! You can share your 360° walkthroughs via direct links, embed them on websites, or send them through our collaboration tools. Clients can view them instantly without needing to download any software or create accounts."
    },
    {
      question: "What file formats are supported for sharing?",
      answer: "We support multiple sharing formats including web links, embed codes for websites, and downloadable files. Pro users can also export walkthroughs in various formats for offline viewing or integration with other platforms."
    },
    {
      question: "Do I need special equipment to create walkthroughs?",
      answer: "No special equipment is required! You can create 360° walkthroughs using any device with a web browser. Our platform works on desktop computers, laptops, tablets, and smartphones. Just design your space and let our AI handle the rest."
    },
    {
      question: "Can I customize the walkthrough experience?",
      answer: "Yes! Pro users can customize branding, add custom hotspots, include audio narration, and adjust various settings to create a personalized experience. You can also control camera movement speed, transition effects, and navigation options."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about 360° walkthroughs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-heading text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
