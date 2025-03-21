const About = () => {
  const stats = [
    { id: 1, value: '12+', label: 'Years of Experience' },
    { id: 2, value: '150+', label: 'Projects Completed' },
    { id: 3, value: '50+', label: 'Team Members' },
    { id: 4, value: '30+', label: 'Countries Served' }
  ];

  const values = [
    {
      id: 1,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative problem-solving to deliver innovative solutions.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, maintaining the highest standards of quality and performance.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'We work closely with our clients, building strong partnerships and collaborative relationships.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and integrity in all our business interactions.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're a team of passionate tech enthusiasts dedicated to creating innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Story
            </h3>
            <p className="text-gray-300 mb-6">
              Back in 2025, a group of passionate students came together with a bold idea: to create a tech company that delivers top-notch solutions without breaking the bank. That’s how Neecedge was born, a company built from the ground up to empower clients with high-quality tech at affordable prices.
            </p>
            <p className="text-gray-300 mb-6">
            Late-night coding and coffee chats turned into something big. We’ve partnered with small businesses, startups, and top brands, creating slick websites and robust apps. Our crew of developers, designers, and marketers keeps that student hustle alive.
            </p>
            <p className="text-gray-300">
              Today, we’re proud to be one of the best in the game, keeping our promise to deliver exceptional quality at minimal cost. We’re here to turn our clients’ visions into reality, proving that great tech doesn’t need a hefty price tag - just a team that cares.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide our work and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-gray-800 hover:border-blue-500/20 rounded-xl p-8 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-400">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to work with us?</h3>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 