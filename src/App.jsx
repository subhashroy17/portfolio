import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-[#1A1A1A] text-[#F5F5F0] antialiased">
      {/* Film grain noise overlay */}
      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Project detail overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
