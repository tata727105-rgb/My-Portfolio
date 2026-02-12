import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { TypewriterText } from './TypewriterText'; // Import the new component

interface AboutMeProps {
  data: {
    aboutMe: {
      greeting: string;
      tagline: string;
      description: string;
    };
    whatIDo: string[];
  };
}

export const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  const { aboutMe, whatIDo } = data;
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
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
      id="about"
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeading id="about" title="About Me" iconName="user" />
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
              <span className="text-green-400 font-semibold neon-glow">{aboutMe.greeting}</span>,
              <br />
              <span className="font-light text-gray-300">{aboutMe.tagline}</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
              <TypewriterText text={aboutMe.description} typingSpeed={30} startTyping={hasAnimated} />
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="/robot.png" 
              alt="AI Robot - About Me" 
              className="w-48 sm:w-64 md:w-80 aspect-square object-cover drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 ease-in-out rounded-full"
            />
          </div>
        </div>

        <SectionHeading id="what-i-do" title="What I Do" iconName="wrench" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 text-sm sm:text-base md:text-lg text-gray-300">
          {whatIDo.map((item, index) => (
            <li key={index} className="flex items-start bg-green-900/20 p-3 md:p-4 rounded-lg shadow-md border border-green-700/50 hover:shadow-xl hover:border-green-400 transition-all duration-300 ease-in-out hover:neon-glow-sm">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-400 flex-shrink-0 mt-0.5 md:mt-1 neon-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};