import { useState, useEffect } from 'react';

export default function GlitchText({ 
  children, 
  color = 'cyan', 
  glitchIntensity = 'normal',
  className = '',
  ...props 
}) {
  const [isGlitching, setIsGlitching] = useState(false);

  // Trigger glitch effect randomly
  useEffect(() => {
    const intensity = glitchIntensity === 'subtle' ? 5000 : 
                     glitchIntensity === 'high' ? 1000 : 2000;
    
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, intensity + Math.random() * 3000);

    return () => clearInterval(interval);
  }, [glitchIntensity]);

  const getColorClasses = () => {
    switch (color) {
      case 'cyan':
        return 'text-cyan-300';
      case 'green':
        return 'text-green-300';
      case 'red':
        return 'text-red-300';
      case 'purple':
        return 'text-purple-300';
      default:
        return 'text-cyan-300';
    }
  };

  return (
    <span 
      className={`
        ${getColorClasses()} 
        ${className}
        ${isGlitching ? 'animate-pulse' : ''}
        relative inline-block
      `}
      {...props}
    >
      {children}
      {isGlitching && (
        <>
          {/* Glitch layers */}
          <span 
            className="absolute top-0 left-0 opacity-80 text-red-400 animate-ping"
            style={{
              transform: 'translate(-1px, -1px)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
            }}
          >
            {children}
          </span>
          <span 
            className="absolute top-0 left-0 opacity-80 text-blue-400 animate-pulse"
            style={{
              transform: 'translate(1px, 1px)',
              clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)'
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
