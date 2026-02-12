import React from 'react';

// Common icon properties for consistent styling for SVG fallbacks
const SVG_ICON_PROPS = {
  className: "w-5 h-5 mr-2 text-green-400 flex-shrink-0 neon-glow",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
};

// Common image properties for consistent styling
const IMG_ICON_PROPS = {
  className: "w-5 h-5 mr-2 object-contain flex-shrink-0 filter drop-shadow-[0_0_5px_rgba(0,255,0,0.7)]", // Simulating neon glow with drop-shadow
  alt: "",
};

// Mapping of skill names to their logo image URLs
const skillLogoMap: { [key: string]: string } = {
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'reactnative': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Same as React
  'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'html5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', // Using angularjs as a generic Angular icon
  'angularjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'nestjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', // Specific NestJS logo
  'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'sqlite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'c': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'cplusplus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'csharp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
  'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',

  // Cybersecurity Tool Logos
  'burp suite': 'https://img.icons8.com/color/48/000000/burp-suite.png', // Fallback for Burp Suite, no official devicon
  'nmap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nmap/nmap-original.svg',
  'wireshark': 'https://img.icons8.com/color/48/000000/wireshark.png', // Fallback for Wireshark
  'metasploit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/metasploit/metasploit-original.svg',
  'owasp zap': 'https://img.icons8.com/color/48/000000/owasp.png', // Generic OWASP icon for ZAP
  'sqlmap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', // Using SQLite as a proxy for SQL/DB related
  'netcat': 'https://img.icons8.com/ios-filled/50/000000/network-card.png', // Generic network icon
};

// Renamed from getSkillIconSvg to getSkillVisual
export const getSkillVisual = (skillName: string): React.ReactElement | null => {
  const lowerCaseSkill = skillName.toLowerCase();
  const imageUrl = skillLogoMap[lowerCaseSkill];

  if (imageUrl) {
    // For local assets, ensure correct path. For CDNs, use full URL.
    return <img {...IMG_ICON_PROPS} src={imageUrl} alt={`${skillName} logo`} />;
  }

  // Fallback to generic SVG icons if no image URL is found
  switch (lowerCaseSkill) {
    case 'arduino':
      return (
        <svg {...SVG_ICON_PROPS}>
          {/* Generic chip/circuit icon */}
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM9 9h2v2H9V9zm4 0h2v2h-2V9zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      );
    case 'qt':
      return (
        <svg {...SVG_ICON_PROPS}>
          {/* Generic square block icon */}
          <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v10H7V7zm2 2v6h6V9H9z"/>
        </svg>
      );
    // Generic security shield for tools not explicitly mapped
    case 'burp suite':
    case 'wireshark':
    case 'owasp zap':
    case 'netcat':
      return (
        <svg {...SVG_ICON_PROPS}>
          {/* Security shield icon */}
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1zm0 2.06l6.44 2.87-6.44 2.87-6.44-2.87L12 3.06zm0 17.5c-3.2-.82-6-4.04-6-9.78v-4.11l6-2.67 6 2.67v4.11c0 5.74-2.8 8.96-6 9.78z"/>
        </svg>
      );
    // Default generic tech icon for unlisted skills or those without specific images
    default:
      return (
        <svg {...SVG_ICON_PROPS}>
          <path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm0 2.22l5.5 1.94-5.5 1.94-5.5-1.94L12 4.22zm0 17.78c-3.2-.82-6-4.04-6-9.78v-4.11l6-2.11 6 2.11v4.11c0 5.74-2.8 8.96-6 9.78z"/>
        </svg>
      );
  }
};