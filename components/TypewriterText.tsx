import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number; // milliseconds per character
  startTyping: boolean; // New prop to control animation start
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, typingSpeed = 50, startTyping }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Only start typing if 'startTyping' is true and typing is not already complete
    if (!startTyping || isTypingComplete) {
      // If typing is already complete, ensure displayedText is the full text
      if (isTypingComplete) {
        setDisplayedText(text);
      }
      return;
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed, startTyping, isTypingComplete]);

  return (
    <>
      {displayedText}
      {!isTypingComplete && startTyping && ( // Only show cursor if typing is active and not complete
        <span
          className="inline-block w-[0.6em] h-[1em] bg-transparent border-r-2 border-green-500 align-middle ml-1"
          style={{
            animation: 'blink-caret 0.75s step-end infinite',
          }}
        ></span>
      )}
    </>
  );
};