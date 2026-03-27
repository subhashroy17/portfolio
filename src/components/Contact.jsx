import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const contactLinks = [
  {
    label: 'Email',
    value: 'subhashverru17@gmail.com',
    href: 'mailto:subhashverru17@gmail.com',
    icon: '✉',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/subhash-verru',
    href: 'https://linkedin.com/in/subhash-verru',
    icon: '↗',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/subhashroy17',
    href: 'https://github.com/subhashroy17',
    icon: '↗',
    external: true,
  },
  {
    label: 'Mobile',
    value: '+91-7032591738',
    href: 'tel:+917032591738',
    icon: '☎',
    external: false,
  },
];

export default function Contact({ onEmailClick }) {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#111111]">
      <div className="divider" />

      {/* Lavender glow */}
      <div
        className="orb w-[600px] h-[600px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #9D8DF1 0%, transparent 65%)', top: '0%', right: '-15%' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <span className="label-tag">06 — Contact</span>
          <span className="flex-1 h-px bg-[#2C2C2C]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* CTA text */}
          <div>
            <motion.h2 {...fadeUp(0.1)} className="display-serif-md mb-6 leading-tight">
              Want to collaborate on an{' '}
              <span className="text-[#9D8DF1] italic">AI project</span>{' '}
              or just say hello?
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-[#777] text-sm leading-relaxed max-w-md mb-10">
              I'm always open to discussing interesting AI challenges, research opportunities, or new projects. Drop me a message — I respond promptly.
            </motion.p>
            <motion.div {...fadeUp(0.25)}>
              <button onClick={onEmailClick} className="btn-primary inline-flex cursor-pointer">
                Send Me an Email <span>→</span>
              </button>
            </motion.div>

            {/* Status badge */}
            <motion.div {...fadeUp(0.3)} className="mt-10 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9D8DF1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9D8DF1]" />
              </span>
              <span className="font-mono text-[0.65rem] text-[#666] tracking-widest">
                Available for internships & collaborations
              </span>
            </motion.div>
          </div>

          {/* Contact links */}
          <div>
            {contactLinks.map(({ label, value, href, icon, external }, i) => (
              <motion.a
                key={label}
                {...fadeUp(0.1 + i * 0.08)}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <span className="contact-icon font-mono text-[#444] text-sm w-5 flex-shrink-0 transition-colors duration-300">
                  {icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs font-semibold tracking-widest uppercase text-[#9D8DF1] mb-1">{label}</p>
                  <p className="text-[#aaa] text-sm truncate group-hover:text-[#F5F5F0]">{value}</p>
                </div>
                <span className="font-mono text-[#444] text-xs flex-shrink-0 transition-colors duration-300">
                  {external ? '↗' : '→'}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-20 pt-8 border-t border-[#2C2C2C] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9D8DF1]" />
            <span className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-widest uppercase font-medium">
              Subhash Verru — AI & Software Engineer
            </span>
          </div>
          <p className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-widest">
            © {new Date().getFullYear()} · Built with React & Vite
          </p>
        </motion.div>
      </div>
    </section>
  );
}
