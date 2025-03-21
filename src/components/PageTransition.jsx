import React, { useState, useEffect } from 'react';

const PageTransition = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
      {/* Loading animation */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute w-full h-full border-4 border-blue-500/20 rounded-full"></div>
        <div className="absolute w-full h-full border-t-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute w-full h-full border-4 border-transparent border-r-purple-500 rounded-full animate-pulse"></div>
      </div>
      
      {/* Agency name with gradient text */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
        Neevedge
      </h1>
      <p className="text-gray-400">Tech Agency</p>
      
      {/* Progress bar */}
      <div className="w-48 h-1 bg-gray-800 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-loadingProgress"></div>
      </div>
    </div>
  );
};

export default PageTransition; 