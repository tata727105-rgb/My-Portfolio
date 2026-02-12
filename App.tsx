import React from 'react';
import { portfolioData } from './constants';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Tooling } from './components/Tooling';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HackerBackground } from './components/HackerBackground';
import { RotatingCube } from './components/RotatingCube'; // Import RotatingCube
import { useScrollPosition } from './hooks/useScrollPosition';
import { useActiveSection } from './hooks/useActiveSection';
import { navLinks } from './constants'; // Import navLinks to pass to useActiveSection

function App() {
  const scrollPosition = useScrollPosition();
  const activeSection = useActiveSection(navLinks.map(link => link.href)); // Pass section IDs to the hook

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <HackerBackground />
      <RotatingCube /> {/* Render the RotatingCube */}
      <Header scrollPosition={scrollPosition} activeSection={activeSection} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 md:px-8 lg:px-12 relative z-10 mt-20 md:mt-24 LG:mt-20">
        <AboutMe data={portfolioData} />
        <Projects data={portfolioData.projects} />
        {/* Reordered: Skills before Tooling */}
        <Skills data={portfolioData.languagesAndTools} />
        <Tooling data={portfolioData.tooling} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;