import React from 'react';

export const RotatingCube: React.FC = () => {
  // Responsive cube sizes based on screen
  const cubeSize = typeof window !== 'undefined' && window.innerWidth < 640 ? '120px' : '256px';
  const translateZValue = typeof window !== 'undefined' && window.innerWidth < 640 ? '60px' : '128px';

  const cubeSizeDetailed = typeof window !== 'undefined' ? (window.innerWidth < 640 ? '120px' : '256px') : '256px';
  const translateZ = typeof window !== 'undefined' ? (window.innerWidth < 640 ? '60px' : '128px') : '128px';

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 pointer-events-none z-[1] opacity-20 sm:opacity-30"> 
      <div className="cube-container relative" style={{ width: cubeSizeDetailed, height: cubeSizeDetailed, perspective: '1000px' }}>
        <div className="cube w-full h-full relative" style={{ transformStyle: 'preserve-3d', animation: 'cubeRotate 30s linear infinite' }}>
          {/* Front Face */}
          <div className="cube-face absolute w-full h-full bg-gray-900/40 border border-green-500 flex items-center justify-center neon-glow-sm" style={{ transform: `rotateY(0deg) translateZ(${translateZ})` }}></div>
          {/* Back Face */}
          <div className="cube-face absolute w-full h-full bg-gray-900/40 border border-green-500 flex items-center justify-center neon-glow-sm" style={{ transform: `rotateY(180deg) translateZ(${translateZ})` }}></div>
          {/* Right Face */}
          <div className="cube-face absolute w-full h-full bg-gray-900/40 border border-green-500 flex items-center justify-center neon-glow-sm" style={{ transform: `rotateY(90deg) translateZ(${translateZ})` }}></div>
          {/* Left Face */}
          <div className="cube-face absolute w-full h-full bg-gray-900/40 border border-green-500 flex items-center justify-center neon-glow-sm" style={{ transform: `rotateY(-90deg) translateZ(${translateZ})` }}></div>
          {/* Top Face */}
          <div className="cube-face absolute w-full h-full bg-gray-900/40 border border-green-500 flex items-center justify-center neon-glow-sm" style={{ transform: `rotateX(90deg) translateZ(${translateZ})` }}></div>
          {/* Bottom Face */}
          <div className="cube-face absolute w-full h-full bg-gray-900/40 border border-green-500 flex items-center justify-center neon-glow-sm" style={{ transform: `rotateX(-90deg) translateZ(${translateZ})` }}></div>
        </div>
      </div>
    </div>
  );
};