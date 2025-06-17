import Image from "next/image";

const HomePrice = () => {
  const plans = [
    {
      id: 1,
      title: "Programming",
      description: "Unleash the Power of Your code with Programming Pro.",
      price: 100,
      image: "https://i.ibb.co/SXpCQ7R/icon10.png",
      featured: false,
    },
    {
      id: 2,
      title: "Designing",
      description: "Unleash the Power of Your UI/UX design with Designing Pro.",
      price: 100,
      image: "https://i.ibb.co/hgyp7Nm/icon20.png",
      featured: true,
    },
  ];

  return (
    <section className="mx-auto px-4 py-12 md:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center mb-16 relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Simple Pricing
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          14 days unlimited free trial. No contract or credit card required.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`
              rounded-2xl p-8 border transition-all duration-300
              backdrop-blur-lg backdrop-filter
              bg-white/30 border-white/30
              shadow-lg hover:shadow-xl
              relative overflow-hidden
              ${plan.featured ? "ring-2 ring-purple-400/50" : ""}
            `}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>

            {/* Decorative element */}
            <div
              className={`absolute top-4 right-4 w-24 h-24 rounded-full ${
                plan.featured ? "bg-purple-500/10" : "bg-indigo-500/10"
              } blur-lg -z-10`}
            ></div>

            <div className="relative z-10">
              <div className="mb-6">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="flex items-start mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mr-3">
                  {plan.title}
                </h2>
                <span
                  className={`text-sm font-semibold rounded-lg py-1 px-3 mt-2 ${
                    plan.featured
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                  }`}
                >
                  PRO
                </span>
              </div>

              <p className="text-gray-700 text-lg mb-8">{plan.description}</p>

              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-baseline">
                  <span className="text-gray-600 text-lg mr-2">From</span>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ${plan.price}
                  </div>
                </div>

                <button
                  className={`mt-4 md:mt-0 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105
                  ${
                    plan.featured
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30"
                      : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg hover:shadow-indigo-500/30"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 text-gray-600">
        <p>All plans include our 14-day risk-free trial period</p>
      </div>
    </section>
  );
};

export default HomePrice;
