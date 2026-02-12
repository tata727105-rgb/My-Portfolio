import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';

interface ProjectsProps {
  data: string[];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeading id="projects" title="Selected Projects" iconName="trophy" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
        {data.map((project, index) => (
          <div
            key={index}
            className="bg-green-900/10 p-4 md:p-6 rounded-lg shadow-lg border border-green-800 hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-green-400 neon-glow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-4 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-8 4c0 2.21 1.79 4 4 4 2.21 0 4-1.79 4-4h-8z" />
              </svg>
              <h3 className="font-['Rajdhani'] text-lg md:text-xl font-semibold text-white group-hover:text-green-400 transition-colors break-words">
                {project}
              </h3>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">
              
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};