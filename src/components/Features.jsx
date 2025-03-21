import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Modern Tech Stack',
      description: 'We work with the latest technologies including React, Node.js, Python, and cloud platforms to deliver cutting-edge solutions.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Agile Development',
      description: 'Our agile approach ensures rapid iterations, continuous improvement, and the flexibility to adapt to changing requirements.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'User-Focused Design',
      description: 'We create intuitive, accessible, and visually stunning interfaces that prioritize user experience and drive engagement.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Scalable Solutions',
      description: 'Our applications are built to scale, handling growing user bases and increasing demands without compromising performance.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'AI Integration',
      description: 'We implement machine learning and AI technologies to automate processes, gain insights, and create intelligent applications.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Continuous Support',
      description: 'Our relationship doesn\'t end at deployment. We provide ongoing maintenance, updates, and support to ensure long-term success.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We combine technical expertise, creative thinking, and industry best practices 
            to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-gradient-to-br from-gray-900/80 to-gray-700/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-blue-400 mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Technology Logos */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Technologies We Work With</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team is proficient in a wide range of modern technologies and frameworks.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Technology logos - would use actual images in a real implementation */}
            {['React', 'Angular', 'Vue', 'Node.js', 'Python', 'AWS', 'Azure', 'Google Cloud', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
              <div key={index} className="bg-gray-700/30 rounded-lg px-6 py-3 border border-gray-700">
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to delivering successful projects
            </p>
          </div>
          
          <div className="relative">
            {/* Process connection line */}
            <div className="absolute top-12 left-[50%] h-[calc(100%-4rem)] w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Discovery */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold mb-3">01. Discovery</div>
                  <h4 className="text-xl font-semibold mb-3">Understanding Your Needs</h4>
                  <p className="text-gray-400">We begin by understanding your business goals, target audience, and project requirements through thorough research and consultation.</p>
                </div>
                <div className="relative md:pl-12">
                  <div className="absolute top-0 left-[calc(50%-1.25rem)] md:left-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 ml-8 md:ml-10">
                    <ul className="text-gray-400 space-y-2">
                      <li>• Client consultation</li>
                      <li>• Requirements analysis</li>
                      <li>• Market research</li>
                      <li>• Competitive analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Planning */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:order-2 md:text-left md:pl-12 mb-8 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold mb-3">02. Planning</div>
                  <h4 className="text-xl font-semibold mb-3">Creating The Roadmap</h4>
                  <p className="text-gray-400">We develop a detailed project plan, including scope definition, timeline, budget, and resource allocation to ensure smooth execution.</p>
                </div>
                <div className="relative md:order-1 md:pr-12">
                  <div className="absolute top-0 left-[calc(50%-1.25rem)] md:right-0 md:left-auto w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 ml-8 md:ml-0 md:mr-10">
                    <ul className="text-gray-400 space-y-2">
                      <li>• Project scoping</li>
                      <li>• Architecture planning</li>
                      <li>• Technology selection</li>
                      <li>• Timeline development</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Design & Development */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold mb-3">03. Design & Development</div>
                  <h4 className="text-xl font-semibold mb-3">Bringing Ideas to Life</h4>
                  <p className="text-gray-400">Our designers and developers work collaboratively to create intuitive interfaces and robust functionality based on the approved plans.</p>
                </div>
                <div className="relative md:pl-12">
                  <div className="absolute top-0 left-[calc(50%-1.25rem)] md:left-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 ml-8 md:ml-10">
                    <ul className="text-gray-400 space-y-2">
                      <li>• UI/UX design</li>
                      <li>• Frontend development</li>
                      <li>• Backend implementation</li>
                      <li>• Regular progress reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Testing & Launch */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:order-2 md:text-left md:pl-12 mb-8 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold mb-3">04. Testing & Launch</div>
                  <h4 className="text-xl font-semibold mb-3">Ensuring Quality & Performance</h4>
                  <p className="text-gray-400">We rigorously test the solution for bugs, performance issues, and user experience before deploying it to production.</p>
                </div>
                <div className="relative md:order-1 md:pr-12">
                  <div className="absolute top-0 left-[calc(50%-1.25rem)] md:right-0 md:left-auto w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 ml-8 md:ml-0 md:mr-10">
                    <ul className="text-gray-400 space-y-2">
                      <li>• Quality assurance</li>
                      <li>• Performance optimization</li>
                      <li>• Security testing</li>
                      <li>• Deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Support & Growth */}
              <div className="md:grid md:grid-cols-2 items-center">
                <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl font-bold mb-3">05. Support & Growth</div>
                  <h4 className="text-xl font-semibold mb-3">Ongoing Evolution</h4>
                  <p className="text-gray-400">We provide ongoing maintenance, support, and strategic guidance to help your digital product evolve and grow with your business.</p>
                </div>
                <div className="relative md:pl-12">
                  <div className="absolute top-0 left-[calc(50%-1.25rem)] md:left-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 ml-8 md:ml-10">
                    <ul className="text-gray-400 space-y-2">
                      <li>• Technical support</li>
                      <li>• Maintenance updates</li>
                      <li>• Performance monitoring</li>
                      <li>• Feature enhancement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 