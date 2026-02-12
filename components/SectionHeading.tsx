import React from 'react';

interface SectionHeadingProps {
  id: string;
  title: string;
  iconName?: string; // Changed from 'icon' to 'iconName' to clarify it's a string identifier
}

// Utility function to get SVG path data based on icon name
const getIconSvg = (name: string) => {
  switch (name) {
    case 'user':
      return <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />;
    case 'wrench': // For "What I Do"
      return <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.38-1.07-.73-1.69-1l-.38-2.65C14.46 2.18 14.25 2 13.99 2h-4c-.26 0-.46.18-.54.46l-.38 2.65c-.62.27-1.17.62-1.69 1l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.38 1.07.73 1.69 1l.38 2.65c.08.28.29.46.54.46h4c.26 0 .46-.18.54-.46l.38-2.65c.62-.27 1.17-.62 1.69-1l2.49 1c.22-.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-4.07 3.54c-1.13.8-2.65.61-3.46-.52-.8-.8-1.01-2.02-.52-3.46.48-1.43 1.89-2.28 3.46-2.28 1.57 0 2.98.85 3.46 2.28.49 1.44.28 2.66-.52 3.46-.8.8-2.02 1.01-3.46.52zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />;
    case 'trophy': // For "Projects"
      return <path d="M20.25 8l-3.25 3.25L12 18 6 11.25 2.75 8A2 2 0 014 5h16a2 2 0 011.25 3zM12 2a4 4 0 00-4 4h8a4 4 0 00-4-4z" />;
    case 'tools': // For "Tooling" - using a gear/settings icon
        return <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.38-1.07-.73-1.69-1l-.38-2.65C14.46 2.18 14.25 2 13.99 2h-4c-.26 0-.46.18-.54.46l-.38 2.65c-.62.27-1.17.62-1.69 1l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.38 1.07.73 1.69 1l.38 2.65c.08.28.29.46.54.46h4c.26 0 .46-.18.54-.46l.38-2.65c.62-.27 1.17-.62 1.69-1l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-4.07 3.54c-1.13.8-2.65.61-3.46-.52-.8-.8-1.01-2.02-.52-3.46.48-1.43 1.89-2.28 3.46-2.28 1.57 0 2.98.85 3.46 2.28.49 1.44.28 2.66-.52 3.46-.8.8-2.02 1.01-3.46.52zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>;
    case 'code': // For "Skills" - using code brackets
      return <path d="M14.6 16.6L19.2 12 14.6 7.4 16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12 9.4 7.4 8 6l-6 6 6 6 1.4-1.4z"/>;
    case 'envelope': // For "Contact"
      return <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />;
    default:
      return null; // No icon
  }
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({ id, title, iconName }) => {
  const IconSvg = iconName ? (
    <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-400 flex-shrink-0 neon-glow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {getIconSvg(iconName)}
    </svg>
  ) : null;

  return (
    <h2 id={id} className="font-['Rajdhani'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 md:mb-8 flex items-center group flex-wrap gap-2">
      {IconSvg && <span className="text-green-400 group-hover:text-green-300 transition-colors neon-glow">{IconSvg}</span>}
      <span>{title}</span>
      <span className="h-1 w-16 sm:w-20 md:w-24 bg-green-500 rounded-full opacity-70 group-hover:w-20 sm:group-hover:w-28 md:group-hover:w-32 transition-all duration-300 ease-in-out"></span>
    </h2>
  );
};