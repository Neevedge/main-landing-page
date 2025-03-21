const Hero = () => {
  return (
    <div className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 bg-black text-white overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="block">Transforming Ideas Into</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Digital Excellence</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              We're a full-service tech agency specializing in innovative digital solutions
              that help businesses thrive in the modern landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#services"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300"
              >
                Our Services
              </a>
              <a
                href="/#portfolio"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Abstract Graphic/Animation */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-80 lg:h-96 w-full">
              {/* Animated circles */}
              <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-indigo-500 opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0">
                <div className="h-full w-full border border-white/10 rounded-xl grid grid-cols-4 grid-rows-4">
                  {Array(16).fill(0).map((_, i) => (
                    <div key={i} className="border border-white/5"></div>
                  ))}
                </div>
              </div>
              
              {/* Central glowing orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md"></div>
                <div className="absolute w-20 h-20 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Trust Indicators */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">150+</div>
              <div className="text-sm lg:text-base text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">98%</div>
              <div className="text-sm lg:text-base text-gray-400 mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">12+</div>
              <div className="text-sm lg:text-base text-gray-400 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm lg:text-base text-gray-400 mt-2">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 