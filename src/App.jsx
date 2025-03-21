import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle initial page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll progress for various UI effects
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section when clicking navigation
  useEffect(() => {
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
      anchor.addEventListener('click', handleNavClick);
    });

    return () => {
      document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleNavClick);
      });
    };
  }, [loading]);

  // Scroll to top button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <PageTransition />;
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>
      
      {/* Scroll to top button */}
      {scrollProgress > 0.2 && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
