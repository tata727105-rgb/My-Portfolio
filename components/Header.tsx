import React, { useState } from 'react';
import { navLinks } from '../constants';

interface HeaderProps {
  scrollPosition: number;
  activeSection: string | null;
}

export const Header: React.FC<HeaderProps> = ({ scrollPosition, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollPosition > 50; // Threshold for shrinking header

  const headerClasses = `
    ${isScrolled ? 'bg-opacity-95 backdrop-blur-md py-3 border-b border-green-700/50' : 'bg-opacity-90 py-5 border-b border-transparent'}
    shadow-lg fixed w-full z-50 top-0
  `;

  const titleClasses = `
    font-['Rajdhani'] font-bold text-green-400 tracking-wider
    ${isScrolled ? 'text-lg md:text-2xl neon-glow-md' : 'text-xl md:text-3xl neon-glow-lg'}
    transition-all duration-300 ease-in-out
  `;

  const linkClasses = (href: string) => `
    font-medium text-sm md:text-lg transition-colors duration-200 ease-in-out
    ${activeSection === href ? 'text-green-400 neon-glow' : 'text-gray-300 hover:text-green-400 hover:neon-glow-sm'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-2 md:px-8 flex justify-between items-center">
        <div>
          <a href="#about" className={titleClasses}>My Portfolio</a>
        </div>
        
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden text-green-400 hover:text-green-300 transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex gap-x-6 lg:gap-x-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={linkClasses(link.href)}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav 
          aria-label="Mobile Navigation"
          className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-green-700/50 px-4 py-4 animate-in fade-in duration-200"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2 px-3 rounded-lg transition-all ${linkClasses(link.href)}`}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};