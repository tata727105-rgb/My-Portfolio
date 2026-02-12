import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { SkillBadge } from './SkillBadge';
import { getSkillVisual } from '../utils/skillIcons'; // Import the updated visual utility

interface SkillsProps {
  data: string[];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
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
      id="skills"
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeading id="skills" title="Languages & Technologies" iconName="code" />
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4 px-2 sm:px-4">
        {data.map((skill, index) => (
          <SkillBadge key={index} skill={skill} icon={getSkillVisual(skill)} />
        ))}
      </div>
    </section>
  );
};