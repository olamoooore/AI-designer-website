export default function Pricing360() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out 360° walkthroughs",
      features: [
        "1 walkthrough per project",
        "Basic camera positioning",
        "Standard quality rendering",
        "Share via link",
        "Mobile & desktop viewing"
      ],
      cta: "Get Started Free",
      ctaStyle: "bg-gray-900 hover:bg-gray-800 text-white",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Everything you need for professional 360° tours",
      features: [
        "Unlimited walkthroughs",
        "AI-optimized camera placement",
        "4K quality rendering",
        "Custom branding",
        "Embed on websites",
        "Client collaboration tools",
        "Priority support",
        "VR headset compatibility"
      ],
      cta: "Start Pro Trial",
      ctaStyle: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
      popular: true
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start creating immersive 360° walkthroughs today with our flexible pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? 'border-2 border-blue-500 shadow-2xl scale-105'
                  : 'border border-gray-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="font-heading text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include 14-day free trial • No credit card required
          </p>
          <p className="text-sm text-gray-500">
            Need a custom plan? <span className="text-blue-600 hover:text-blue-700 cursor-pointer">Contact our sales team</span>
          </p>
        </div>
      </div>
    </section>
  )
}
