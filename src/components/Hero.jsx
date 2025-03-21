import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-black ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden ">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,33,52,0.8),rgba(0,0,0,0))]"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(25, 33, 52, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(25, 33, 52, 0.1) 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem',
          }}
        />

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full filter blur-[8rem] animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full filter blur-[6rem] animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full filter blur-[7rem] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/20 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">Technology Leaders Since 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white mb-1">Transforming Ideas</span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Into Digital Reality
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              We create cutting-edge digital solutions that drive innovation, growth, and competitive advantage for forward-thinking businesses.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/#services"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 text-white font-medium"
              >
                Explore Our Services
              </a>
              <a
                href="/#portfolio"
                className="px-8 py-4 rounded-full border border-blue-500/50 hover:border-blue-400 text-white hover:bg-blue-900/20 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </a>
            </div>

            {/* Client logos */}
            {/* <div className="mt-16">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                    <div className="w-20 h-5 bg-gradient-to-r from-gray-400 to-gray-500 rounded"></div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right 3D element */}
          <div className={`flex justify-center relative transition-all duration-1000 delay-300 mb-10  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '}`}>
            <div className="relative w-full max-w-lg mt-20 ">
              {/* 3D sphere */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full border border-blue-500/10 backdrop-blur-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mt-5 w-64 h-64 relative">
                  <div className="w-full h-full absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl animate-pulse"></div>
                  <div className="w-full h-full absolute rounded-full border border-blue-500/30 backdrop-blur-lg animate-spin-slow"></div>
                  <div className="w-full h-full absolute rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 "></div>
                  <div className=" w-full h-full absolute rounded-full bg-blue-950/20 backdrop-blur-xl flex items-center justify-center">
                    <span className="text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">N</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-14 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur-sm animate-float"></div>
              <div className="absolute bottom-24 right-16 w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-md animate-float animation-delay-1000"></div>
              <div className="absolute  md:bottom-28 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-md blur-sm animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 backdrop-blur-lg rounded-xl border border-blue-500/10 p-6 transform hover:scale-105 transition-all duration-300">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">10+</h4>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 backdrop-blur-lg rounded-xl border border-blue-500/10 p-6 transform hover:scale-105 transition-all duration-300">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">95%</h4>
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 backdrop-blur-lg rounded-xl border border-blue-500/10 p-6 transform hover:scale-105 transition-all duration-300">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">2+</h4>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 backdrop-blur-lg rounded-xl border border-blue-500/10 p-6 transform hover:scale-105 transition-all duration-300">
            <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">24/7</h4>
            <p className="text-gray-400 mt-2">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,208C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 