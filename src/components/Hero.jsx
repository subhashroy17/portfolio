import { motion } from 'framer-motion';

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-28 md:px-12">
        <div className="grid items-stretch gap-7 min-[540px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:gap-9 lg:gap-14">
          <div className="flex min-w-0 flex-col justify-center">
            {/* Identity label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <span className="w-5 h-px bg-[#9D8DF1]" />
              <span className="label-tag">AI & Software Engineer</span>
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              aria-label="Subhash Verru"
              className="mb-5 sm:mb-7"
            >
              {['Subhash', 'Verru.'].map((word, i) => (
                <span key={word} className="block overflow-hidden leading-none">
                  <motion.span
                    variants={lineVariants}
                    className="block font-serif font-black tracking-tight"
                    style={{
                      fontSize: 'clamp(2.875rem, 8.5vw, 7rem)',
                      lineHeight: 1,
                      color: i === 1 ? '#9D8DF1' : '#F5F5F0',
                      fontStyle: i === 1 ? 'italic' : 'normal',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#bbb] text-base md:text-lg leading-relaxed mb-3 max-w-md"
            >
              I’m looking for AI and software engineering internships focused on machine learning and natural language processing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="text-[#666] text-sm leading-relaxed mb-6 max-w-md"
            >
              B.Tech candidate at Lovely Professional University · Computer Science and Engineering.
            </motion.p>

            {/* CV and social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <a
                href="https://drive.google.com/file/d/1QEqXaOhJbZNXeXRUdaKG6v9WEu-fW61K/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#9D8DF1]/60 bg-[#9D8DF1]/10 px-4 py-2.5 text-sm font-semibold text-[#E3DBFF] transition-colors hover:bg-[#9D8DF1] hover:text-[#1A1A1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9D8DF1]"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M8 13h8M8 17h6" />
                </svg>
                View CV
              </a>
              {/* GitHub */}
              <a href="https://github.com/subhashroy17" target="_blank" rel="noopener noreferrer"
                className="text-[#666] hover:text-[#9D8DF1] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/subhash-verru/" target="_blank" rel="noopener noreferrer"
                className="text-[#666] hover:text-[#9D8DF1] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full self-center overflow-hidden rounded-lg border-2 border-[#9D8DF1]/70 shadow-[0_0_24px_rgba(157,141,241,0.2)]"
          >
            <img
              src="/port_pic.jpeg"
              alt="Subhash Verru"
              className="absolute inset-0 h-full w-full object-cover object-[center_55%]"
            />
          </motion.div>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-9 lg:mt-10">
          {/* Achievement micro-cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="grid grid-cols-1 gap-3 min-[540px]:grid-cols-2"
          >
            {[
              { icon: '🏆', title: 'Top 10 — Code-A-Hunt', sub: 'Out of 2,500+ participants · Feb 2024' },
              { icon: '⚡', title: '100+ DSA Problems', sub: 'LeetCode · Feb 2026' },
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
            className="grid grid-cols-1 gap-3 min-[540px]:grid-cols-2"
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
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="flex items-center gap-3 mt-7"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#9D8DF1] to-transparent"
          />
          <span className="label-tag">Scroll to explore</span>
        </motion.div>

      </div>
    </section>
  );
}
