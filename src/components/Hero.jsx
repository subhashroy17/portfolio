import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

// The exact % from the top where the frame bottom edge sits
// Everything below this line "breaks out" of the frame
// Frame bottom edge sits at 57% — lower = more body breaking out for stronger 3D
const BREAKOUT_PCT = 57;

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#1A1A1A] flex items-center"
    >
      {/* Ambient lavender glow */}
      <div className="orb w-[700px] h-[700px] opacity-[0.09]"
        style={{ background: 'radial-gradient(ellipse, #9D8DF1 0%, transparent 65%)', top: '-15%', right: '-10%' }} />
      <div className="orb w-[350px] h-[350px] opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #9D8DF1 0%, transparent 65%)', bottom: '5%', left: '-5%' }} />

      {/* Dot grid texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#9D8DF1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12"
        style={{ y, opacity }}
      >
        {/* ─── 3-column grid: [Name] [Portrait] [Info] ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] gap-6 xl:gap-10 items-center min-h-[calc(100vh-10rem)]">

          {/* ══ LEFT: LARGE NAME ══ */}
          <div className="flex flex-col justify-center lg:pr-6">
            {/* Identity label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-5 h-px bg-[#9D8DF1]" />
              <span className="label-tag">AI & Software Engineer</span>
            </motion.div>

            {/* Name — staggered line reveal */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-10"
            >
              {['Subhash', 'Verru.'].map((word, i) => (
                <div key={i} className="overflow-hidden leading-none">
                  <motion.span
                    variants={lineVariants}
                    className="block font-serif font-black tracking-tight"
                    style={{
                      fontSize: 'clamp(4rem, 8.5vw, 8rem)',
                      lineHeight: 1,
                      color: i === 1 ? '#9D8DF1' : '#F5F5F0',
                      fontStyle: i === 1 ? 'italic' : 'normal',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex items-center gap-6"
            >
              {/* GitHub */}
              <a href="https://github.com/subhashroy17" target="_blank" rel="noopener noreferrer"
                className="text-[#666] hover:text-[#9D8DF1] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/subhash-verru/" target="_blank" rel="noopener noreferrer"
                className="text-[#666] hover:text-[#9D8DF1] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* View CV */}
              <a
                href="https://drive.google.com/file/d/1IPXdjKDMBkQ9yLmVHj0EQ3goO0AUSF2B/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                title="View CV"
                className="relative group text-[#666] hover:text-[#9D8DF1] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="11" x2="12" y2="17"/>
                  <polyline points="9 14 12 17 15 14"/>
                </svg>
                {/* Tooltip */}
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[0.6rem] font-mono tracking-wide bg-[#A855F7] text-[#08080E] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  View CV
                </span>
              </a>

            </motion.div>
          </div>

          {/* ══ CENTER: PORTRAIT ══ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <div className="relative" style={{ width: '300px', height: '500px' }}>

              {/* Soft lavender glow behind the portrait */}
              <div
                className="absolute inset-x-4 top-8 bottom-8 opacity-50"
                style={{ background: '#9D8DF1', filter: 'blur(50px)', zIndex: 0 }}
              />

              {/* Portrait Image Container */}
              <div 
                className="absolute inset-0 overflow-hidden rounded-lg border-2 border-[rgba(157,141,241,0.8)] shadow-[0_0_40px_rgba(157,141,241,0.2)]"
                style={{ zIndex: 2 }}
              >
                <img
                  src="/portfolio_pic.jpeg"
                  alt="Subhash Verru"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Corner accent L-brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#9D8DF1]" style={{ zIndex: 3 }} />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#9D8DF1]" style={{ zIndex: 3 }} />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#9D8DF1]" style={{ zIndex: 3 }} />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#9D8DF1]" style={{ zIndex: 3 }} />

              {/* Subtle shadow cast below the portrait */}
              <div
                className="absolute bottom-[-20px] left-8 right-8 pointer-events-none"
                style={{
                  height: '20px',
                  background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)',
                  filter: 'blur(6px)',
                  zIndex: 1,
                }}
              />
            </div>
          </motion.div>

          {/* ══ RIGHT: TAGLINE + ACHIEVEMENTS + CTAs ══ */}
          <div className="flex flex-col justify-center lg:pl-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#bbb] text-base md:text-lg leading-relaxed mb-3 max-w-xs"
            >
              Bridging the gap between complex data and intelligent user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="text-[#666] text-sm leading-relaxed mb-8 max-w-xs"
            >
              B.Tech candidate at Lovely Professional University · Focus on Machine Learning, NLP & Android Development.
            </motion.p>

            {/* Achievement micro-cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="flex flex-col gap-2.5 mb-8 max-w-xs"
            >
              {[
                { icon: '🏆', title: 'Top 10 — Code-A-Hunt', sub: 'Out of 2,500+ participants' },
                { icon: '⚡', title: '100+ DSA Problems', sub: 'LeetCode' },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3 px-4 py-3 border border-[#2C2C2C] rounded-sm bg-[#1f1f1f] hover:border-[#9D8DF1] transition-colors duration-300">
                  <span className="text-base">{icon}</span>
                  <div>
                    <p className="text-[#F5F5F0] text-xs font-semibold leading-none mb-0.5">{title}</p>
                    <p className="font-mono text-[0.6rem] text-[#555]">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 max-w-xs"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary justify-center"
              >
                View My Work <span>→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline justify-center"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex items-center gap-3 mt-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-px h-8 bg-gradient-to-b from-[#9D8DF1] to-transparent"
              />
              <span className="label-tag">Scroll to explore</span>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
