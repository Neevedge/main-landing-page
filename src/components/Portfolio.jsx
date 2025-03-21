import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Fintech+Dashboard',
      tags: ['React', 'Tailwind CSS', 'Node.js'],
      description: 'A modern dashboard for a financial technology company with real-time data visualization.'
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400/0f3460/ffffff?text=E-commerce+App',
      tags: ['React Native', 'Firebase', 'Redux'],
      description: 'A full-featured e-commerce application with seamless checkout experience.'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400/16213e/ffffff?text=AI+Content+Generator',
      tags: ['Python', 'TensorFlow', 'Flask'],
      description: 'An AI-powered content generation tool for marketing teams to create engaging copy.'
    },
    {
      id: 4,
      title: 'Healthcare Platform',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Healthcare+Platform',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      description: 'A comprehensive healthcare platform connecting patients with doctors for telehealth consultations.'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400/0f3460/ffffff?text=Fitness+App',
      tags: ['Flutter', 'Firebase', 'BLoC'],
      description: 'A fitness tracking application with workout plans, progress tracking, and social features.'
    },
    {
      id: 6,
      title: 'Smart Home System',
      category: 'iot',
      image: 'https://via.placeholder.com/600x400/16213e/ffffff?text=Smart+Home',
      tags: ['IoT', 'React', 'Node.js'],
      description: 'An integrated smart home system with intuitive controls and automation features.'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions that have helped businesses achieve their goals.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'web' 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'mobile' 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'ai' 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('ai')}
          >
            AI Solutions
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'iot' 
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('iot')}
          >
            IoT
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-blue-500/30 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Case Study
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 