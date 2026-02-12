import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { SkillBadge } from './SkillBadge';
import { getSkillVisual } from '../utils/skillIcons'; // Import the visual utility

interface ToolingProps {
  data: {
    description: string;
    tools: string[];
  };
}

export const Tooling: React.FC<ToolingProps> = ({ data }) => {
  const { description, tools } = data;
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
      id="tooling"
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeading id="tooling" title="Security & Engineering Tooling" iconName="tools" />
      <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
          {description}
        </p>
        <h4 className="font-['Rajdhani'] text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6 neon-glow-sm">Tools:</h4>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tools.map((tool, index) => (
            <SkillBadge key={index} skill={tool} icon={getSkillVisual(tool)} />
          ))}
        </div>
      </div>
    </section>
  );
};