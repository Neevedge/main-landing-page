import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-lg py-3 shadow-xl shadow-blue-900/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Neevedge
              </span>
              <span className="ml-1 text-xs uppercase tracking-widest font-light text-blue-300 opacity-80">TECHNOLOGIES</span>
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/#services" className="text-sm uppercase tracking-wide text-gray-300 hover:text-white hover:scale-105 transition-all">Services</a>
          <a href="/#portfolio" className="text-sm uppercase tracking-wide text-gray-300 hover:text-white hover:scale-105 transition-all">Portfolio</a>
          <a href="/#about" className="text-sm uppercase tracking-wide text-gray-300 hover:text-white hover:scale-105 transition-all">About</a>
          <a href="/#testimonials" className="text-sm uppercase tracking-wide text-gray-300 hover:text-white hover:scale-105 transition-all">Testimonials</a>
          <a href="/#contact" className="text-sm uppercase tracking-wide text-gray-300 hover:text-white hover:scale-105 transition-all">Contact</a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a 
            href="/#contact" 
            className="ml-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 text-sm uppercase tracking-wide font-medium"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close mobile menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-20">
          <a href="/" className="text-3xl font-bold text-white mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Neevedge
            </span>
          </a>
          <div className="flex flex-col space-y-8 text-center">
            <a 
              href="/#services" 
              className="text-xl text-gray-300 hover:text-white tracking-wide transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="/#portfolio" 
              className="text-xl text-gray-300 hover:text-white tracking-wide transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="/#about" 
              className="text-xl text-gray-300 hover:text-white tracking-wide transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="/#testimonials" 
              className="text-xl text-gray-300 hover:text-white tracking-wide transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#contact" 
              className="text-xl text-gray-300 hover:text-white tracking-wide transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/#contact" 
              className="mt-6 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 