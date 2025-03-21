import { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "We build responsive, scalable websites and web applications using the latest technologies and best practices.",
      features: ["Custom Website Development", "E-commerce Solutions", "Web Application Development", "CMS Integration", "API Development & Integration"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "We create engaging, high-performance mobile applications for iOS and Android platforms that drive user engagement.",
      features: ["Native iOS & Android Development", "Cross-Platform Solutions", "App Store Optimization", "UI/UX Design", "Maintenance & Support"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "We craft intuitive, beautiful user interfaces and experiences that delight users and achieve business goals.",
      features: ["User Interface Design", "User Experience Design", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "We help businesses grow online through strategic digital marketing campaigns and optimization.",
      features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Marketing", "Email Marketing", "PPC Advertising"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "AI & Machine Learning",
      description: "We leverage artificial intelligence and machine learning to create intelligent applications and solutions.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems", "Automation Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide cutting-edge technology solutions to help businesses transform and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-6 rounded-lg text-center transition-all duration-300 ${
                activeService === index 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' 
                  : 'hover:bg-white/5 border border-transparent'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-400'
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {services[activeService].title}
              </h3>
              <p className="text-gray-300 mb-6">{services[activeService].description}</p>
              <a
                href="/#contact"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            <div className="md:w-1/2 md:border-l border-gray-700 md:pl-8">
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <ul className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 