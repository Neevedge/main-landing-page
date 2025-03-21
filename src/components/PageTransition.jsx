import { useState, useEffect } from 'react';

const PageTransition = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    // When progress reaches 100, start fade out
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }

    return () => clearInterval(interval);
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500">
      <div className="mb-8 text-4xl font-bold">
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Neevedge
        </span>
        <span className="ml-1 text-xs uppercase tracking-widest font-light text-blue-300 opacity-80">TECHNOLOGIES</span>
      </div>
      
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
        ></div>
      </div>
      
      <div className="text-blue-300 text-sm">
        {Math.round(progress)}% Loading...
      </div>
    </div>
  );
};

export default PageTransition; 