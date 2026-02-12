import React from 'react';

interface SkillBadgeProps {
  skill: string;
  // Fix: Corrected type for 'icon' prop from 'JSX.Element' to 'React.ReactElement' to resolve TypeScript namespace error.
  icon?: React.ReactElement; // Optional icon element
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, icon }) => {
  return (
    <span className="inline-flex items-center bg-green-900/30 text-green-300 text-xs sm:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-green-700/50 transition-all duration-200 ease-in-out hover:bg-green-800 hover:text-white hover:scale-105 cursor-default select-none neon-glow-sm whitespace-nowrap">
      {icon}
      {skill}
    </span>
  );
};