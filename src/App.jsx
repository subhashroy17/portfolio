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
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import EmailModal from './components/EmailModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [emailModal, setEmailModal] = useState({ open: false, subject: '' });

  const openEmail = (subject = '') => setEmailModal({ open: true, subject });
  const closeEmail = () => setEmailModal({ open: false, subject: '' });

  return (
    <div className="bg-[#1A1A1A] text-[#F5F5F0] antialiased">
      {/* Film grain noise overlay */}
      <div className="noise" aria-hidden="true" />

      <Navbar onHireMe={() => openEmail('Hiring Inquiry — ')} />

      <main>
        <Hero />
        <About />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Education />
        <Certificates />
        <Contact onEmailClick={() => openEmail('Hello from your portfolio')} />
      </main>

      {/* Email modal */}
      <EmailModal
        open={emailModal.open}
        onClose={closeEmail}
        subject={emailModal.subject}
      />

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
