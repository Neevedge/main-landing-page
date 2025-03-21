import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Neevedge
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="/#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
          <a href="/#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="/#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
          <a href="/#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a 
            href="/#contact" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a href="/#services" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="/#portfolio" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="/#about" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="/#testimonials" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="/#contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <a 
              href="/#contact" 
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 