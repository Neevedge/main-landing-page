import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      position: 'CEO, TechFin Solutions',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'Neevedge transformed our outdated website into a modern, high-performance platform that has significantly increased our conversion rates. Their team was professional, responsive, and delivered beyond our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, HealthPlus',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'The mobile application developed by Neevedge has revolutionized how we interact with our customers. The intuitive design and seamless functionality have received overwhelmingly positive feedback from our user base.',
      rating: 5
    },
    {
      id: 3,
      name: 'James Rodriguez',
      position: 'CTO, Retail Innovations',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      content: 'Working with Neevedge was a game-changer for our e-commerce platform. Their expertise in both design and development resulted in a solution that not only looks great but performs exceptionally well under high traffic.',
      rating: 4
    },
    {
      id: 4,
      name: 'Emily Zhang',
      position: 'Product Manager, AI Ventures',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      content: 'The AI solution developed by Neevedge has automated our content generation process, saving us countless hours and improving output quality. Their team\'s technical knowledge and creativity are truly impressive.',
      rating: 5
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Testimonial */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12 border border-blue-500/20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative">
              {/* Quote icon */}
              <svg 
                className="h-12 w-12 text-blue-500/20 absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <div className="text-xl md:text-2xl text-gray-200 italic mb-8 relative z-10">
                "{testimonials[currentTestimonial].content}"
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4"
                />
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to transform your digital presence?</h3>
          <a 
            href="/#contact" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 