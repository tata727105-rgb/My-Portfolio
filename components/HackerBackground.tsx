import React, { useEffect, useState } from 'react';

const generateRandomChar = () => {
  const chars = '0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  return chars[Math.floor(Math.random() * chars.length)];
};

const generateRandomBinary = () => {
  return Array.from({ length: Math.floor(Math.random() * 8) + 4 }, () =>
    Math.round(Math.random()),
  ).join('');
};

const generateRandomHex = () => {
  return Array.from({ length: Math.floor(Math.random() * 6) + 2 }, () =>
    Math.floor(Math.random() * 16).toString(16),
  ).join('').toUpperCase();
};

const generateRandomWord = () => {
    const words = ['CODE', 'SECURE', 'ENCRYPT', 'NETWORK', 'DATA', 'AI', 'DEV', 'SHELL', 'KERNEL', 'SYSTEM', 'ACCESS', 'FIREWALL', 'ANALYZE', 'VULN', 'DEBUG', 'ROOT'];
    return words[Math.floor(Math.random() * words.length)];
};

const getRandomContent = () => {
  const type = Math.random();
  if (type < 0.4) return generateRandomBinary(); // 40% binary
  if (type < 0.7) return generateRandomHex();    // 30% hex
  return generateRandomWord();                   // 30% words
};

interface FloatingTextProps {
  content: string;
  style: React.CSSProperties;
  animationDelay: string;
  animationDuration: string;
  animationDirection: 'normal' | 'reverse';
}

const FloatingText: React.FC<FloatingTextProps> = ({ content, style, animationDelay, animationDuration, animationDirection }) => {
  return (
    <span
      className="absolute text-green-400 opacity-0 whitespace-nowrap text-xs md:text-sm lg:text-base neon-glow"
      style={{
        ...style,
        animation: `${animationDirection === 'normal' ? 'floatUp' : 'floatDown'} ${animationDuration} ${animationDelay} ease-in-out infinite`,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {content}
    </span>
  );
};

// Define the type for a single text item in the background animation
interface HackerTextItem {
  content: string;
  style: React.CSSProperties;
  delay: string;
  duration: string;
  direction: 'normal' | 'reverse';
}

export const HackerBackground: React.FC = () => {
  // Fix: Explicitly define the state type to ensure 'direction' is recognized as a literal type.
  const [texts, setTexts] = useState<HackerTextItem[]>([]);

  useEffect(() => {
    const numElements = window.innerWidth < 768 ? 50 : 100; // Fewer elements on smaller screens
    const newTexts: HackerTextItem[] = Array.from({ length: numElements }).map((_, i) => ({
      content: getRandomContent(),
      style: {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        // Removed zIndex: -1 here, parent z-index will handle it
      },
      delay: `${Math.random() * 20}s`,
      duration: `${Math.random() * 30 + 15}s`, // Duration between 15 and 45 seconds
      direction: Math.random() > 0.5 ? 'normal' : 'reverse',
    }));
    setTexts(newTexts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]"> {/* Changed to fixed and added z-[5] */}
      {texts.map((text, index) => (
        <FloatingText
          key={index}
          content={text.content}
          style={text.style}
          animationDelay={text.delay}
          animationDuration={text.duration}
          animationDirection={text.direction}
        />
      ))}
    </div>
  );
};