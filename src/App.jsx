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
  return (
    <div className="bg-gray-900 min-h-screen">
      <PageTransition />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
