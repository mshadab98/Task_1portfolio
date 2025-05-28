import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-4xl font-bold mb-6">
          <span className="text-violet-400">Shaad</span>
          <span className="text-teal-400">.Portfolio</span>
        </div>
        
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-2 relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-violet-600 to-teal-400 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          >
            <span className="absolute inset-0 bg-white/10 shimmer"></span>
          </motion.div>
        </div>
        
        <div className="text-gray-400 text-sm font-medium">
          Loading... {Math.round(progress)}%
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
