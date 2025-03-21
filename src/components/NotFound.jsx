import React from 'react';

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative mb-10">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">404</h1>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full -z-10"></div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="space-x-4">
          <a 
            href="/" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300"
          >
            Go Home
          </a>
          
          <a 
            href="/#contact" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Abstract elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-500/5 animate-pulse delay-1000"></div>
    </section>
  );
};

export default NotFound; 