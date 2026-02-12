import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';

interface ContactProps {
  data: {
    email: string;
  };
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const { email } = data;
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
      id="contact"
      ref={sectionRef}
      className={`py-12 sm:py-16 md:py-24 text-center transition-all duration-1000 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeading id="contact" title="Contact" iconName="envelope" />
      <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2 sm:px-4">
        Feel free to reach out for collaborations, project inquiries, or just a chat! 
      </p>
      <a
        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out neon-glow-md"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
        </svg>
        <span className="hidden sm:inline">{email}</span>
        <span className="sm:hidden">Email</span>
      </a>
    </section>
  );
};