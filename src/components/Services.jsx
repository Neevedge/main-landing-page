import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      subtitle: "Enterprise-grade web solutions",
      description: "We build scalable, high-performance web applications using cutting-edge technologies that deliver exceptional user experiences and drive business growth.",
      features: [
        "Custom Enterprise Web Applications",
        "Progressive Web Apps (PWAs)",
        "E-commerce & Marketplace Solutions",
        "Enterprise CMS Development",
        "API Integration & Development",
        "Cloud-based Web Infrastructure"
      ],
      gradient: "from-blue-600 to-indigo-500"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      subtitle: "cross-platform expertise",
      description: "Our expert team creates powerful, feature-rich mobile applications that engage users and provide seamless experiences across all devices and platforms.",
      features: [
        "Cross Platform & Android Development",
        "Cross-platform Solutions (Kotlin/React Native)",
        "Mobile App UX/UI Design",
        "App Performance Optimization",
        "Backend & API Development",
        "Ongoing Maintenance & Support"
      ],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Design",
      subtitle: "Designing solutions",
      description: "We create intuitive, visually stunning designs that elevate your brand, enhance user engagement, and drive conversion through research-backed design methodologies.",
      features: [
        "User Research & Experience Strategy",
        "Interface Design & Prototyping",
        "Design Systems & Component Libraries",
        "Usability Testing & Optimization",
        "Responsive & Adaptive Design",
        "Motion Design & Microinteractions"
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Digital Marketing & Social Media Haandling",
      subtitle: "Data-driven growth strategies",
      description: "Our holistic digital marketing strategies drive measurable business growth through targeted campaigns, advanced analytics, and continuous optimization.",
      features: [
        "SEO & Content Marketing",
        "Paid Media & PPC Management",
        "Social Media Marketing",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Marketing Analytics & Reporting"
      ],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI & Machine Learning",
      subtitle: "Intelligent business solutions",
      description: "We harness the power of AI and machine learning to create intelligent systems that automate processes, provide deep insights, and transform business operations.",
      features: [
        "AI Strategy & Implementation",
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Integration & Deployment"
      ],
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/20 backdrop-blur-md mb-4">
              <span className="text-sm font-medium text-blue-300">Innovative Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Our Expert Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We deliver comprehensive technology solutions tailored to your unique business challenges,
              helping you innovate, scale, and maintain a competitive edge.
            </p>
          </div>
          
          {/* Service selection */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`relative group transition-all duration-300 p-6 rounded-xl flex flex-col items-center text-center ${
                  activeService === index 
                    ? `bg-gradient-to-br ${service.gradient} text-white shadow-lg`
                    : 'bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 backdrop-blur-lg text-gray-300 hover:text-white'
                }`}
              >
                <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full transition-all ${
                  activeService === index 
                    ? 'bg-white/20' 
                    : `bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:bg-opacity-20`
                }`}>
                  <div className="text-current">{service.icon}</div>
                </div>
                <h3 className={`text-base font-semibold mb-1 transition-all ${
                  activeService === index ? 'text-white' : 'text-gray-200 group-hover:text-white'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-xs transition-all ${
                  activeService === index ? 'text-blue-100' : 'text-gray-400 group-hover:text-gray-300'
                }`}>
                  {service.subtitle}
                </p>
                
                {/* Selection indicator */}
                {activeService === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Service details */}
          <div 
            className="bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 rounded-2xl p-8 lg:p-10 border border-gray-700/50 backdrop-blur-lg shadow-xl"
            style={{ 
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), rgba(0, 0, 0, 0))` 
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-12">
                <div className={`mb-2 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${services[activeService].gradient} bg-opacity-20`}>
                  <span className="text-xs font-medium text-white">Enterprise Solutions</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-300 mb-8">
                  {services[activeService].description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`mr-3 mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-r ${services[activeService].gradient}`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/#contact" 
                  className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${services[activeService].gradient} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20`}
                >
                  <span>Discuss Your Project</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="relative">
                {/* Service illustration */}
                <div className="relative h-64 lg:h-80 w-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700/50">
                  {/* Abstract service graphics */}
                  <div className={`absolute inset-0 opacity-30 transition-opacity duration-500 bg-gradient-to-br ${services[activeService].gradient}`}></div>
                  
                  {/* Service specific illustration */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${services[activeService].gradient} bg-opacity-20 flex items-center justify-center p-6`}>
                      <div className="text-white w-full h-full">
                        {services[activeService].icon}
                      </div>
                    </div>
                    
                    {/* Animated elements */}
                    <div className={`absolute w-40 h-40 rounded-full border border-${services[activeService].gradient.split(' ')[1].replace('to-', '')}/30 animate-spin-slow`}></div>
                    <div className={`absolute w-60 h-60 rounded-full border border-${services[activeService].gradient.split(' ')[0].replace('from-', '')}/20 animate-reverse-spin`}></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-500/50 animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-purple-500/50 animate-float animation-delay-1000"></div>
                    <div className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-indigo-500/50 animate-float animation-delay-2000"></div>
                  </div>
                </div>
                
                {/* Stats cards */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700/50 shadow-xl w-40">
                  <div className="text-2xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-400">{services[activeService].title} Projects</div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700/50 shadow-xl w-40">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${services[activeService].gradient} bg-clip-text text-transparent mb-1`}>95%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 