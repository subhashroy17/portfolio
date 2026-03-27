import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Education',      href: '#education' },
  { label: 'Certifications', href: '#certificates' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar({ onHireMe }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* Wrapper: full-width but no background — just positions the pill */
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      {/* ── Floating glass pill ── */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{
          backdropFilter: 'blur(28px) saturate(200%) brightness(0.9)',
          WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(0.9)',
          background: scrolled
            ? 'rgba(157, 141, 241, 0.18)'
            : 'rgba(157, 141, 241, 0.08)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(157,141,241,0.18), 0 0 0 1px rgba(157,141,241,0.35), inset 0 1px 0 rgba(255,255,255,0.07)'
            : '0 2px 20px rgba(157,141,241,0.08), 0 0 0 1px rgba(157,141,241,0.18), inset 0 1px 0 rgba(255,255,255,0.05)',
          transition: 'background 0.5s ease, box-shadow 0.5s ease',
        }}
        className="pointer-events-auto mt-4 mx-4 w-full max-w-3xl rounded-2xl px-5 h-12 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9D8DF1] group-hover:scale-125 transition-transform duration-300" />
          <span className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-[#F5F5F0] font-semibold">
            SV
          </span>
        </a>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="font-mono text-[0.65rem] tracking-[0.13em] uppercase text-[#8a8a8a] hover:text-[#F5F5F0] transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#9D8DF1] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me pill button */}
        <button
          onClick={onHireMe}
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(157,141,241,0.12)] border border-[rgba(157,141,241,0.25)] text-[#9D8DF1] font-mono text-[0.62rem] tracking-[0.1em] uppercase hover:bg-[#9D8DF1] hover:text-[#1A1A1A] hover:border-[#9D8DF1] transition-all duration-300 flex-shrink-0 cursor-pointer"
        >
          <span className="w-1 h-1 rounded-full bg-current" />
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 pointer-events-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-4 h-px bg-[#F5F5F0] transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`w-4 h-px bg-[#F5F5F0] transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`w-4 h-px bg-[#F5F5F0] transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile dropdown — also glassy, rounded */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(20, 20, 20, 0.88)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(157,141,241,0.15)',
            }}
            className="pointer-events-auto mt-2 mx-4 w-full max-w-3xl rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="font-mono text-xs tracking-[0.15em] uppercase text-[#8a8a8a] hover:text-[#F5F5F0] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-1 border-t border-[#2C2C2C]">
                <button
                  onClick={() => { setOpen(false); onHireMe(); }}
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full border border-[rgba(157,141,241,0.3)] text-[#9D8DF1] font-mono text-[0.65rem] tracking-[0.1em] uppercase cursor-pointer"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
