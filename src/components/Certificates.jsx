import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const certs = [
  {
    org: 'NPTEL',
    title: 'Cloud Computing',
    date: 'Available',
    link: 'https://drive.google.com/file/d/19R2cnVBr54FrjhNltFurL7hjuM2EgjV3/view?usp=drivesdk',
  },
  {
    org: 'APNA COLLEGE',
    title: 'Data Structures & Algorithms',
    date: 'Available',
    link: 'https://drive.google.com/file/d/1459IZ-p6bWEbb1DrmGIufC87p7TVFve5/view?usp=drivesdk',
  },
  {
    org: 'AI / ML',
    title: 'Unrevealing Python Towards AI/ML',
    date: 'Recent',
    link: 'https://drive.google.com/file/d/1z4iKUwfIC2Dk7ruSHfwBQlEEVApOf1zu/view?usp=drivesdk',
  },
  {
    org: 'INFOSYS SPRINGBOARD',
    title: 'ChatGPT-4 Prompt Engineering, Generative AI and LLM',
    date: 'Recent',
    link: 'https://drive.google.com/file/d/1ZIiH9n2twUh5ZMON56BlyFFtFyymB7JH/view?usp=drivesdk',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 md:py-36 bg-[#111111]">
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <span className="label-tag">05 — Certifications</span>
          <span className="flex-1 h-px bg-[#2C2C2C]" />
        </motion.div>

        <motion.div {...fadeUp(0.05)} className="mb-16">
          <h2
            className="font-serif font-extrabold text-[#ffffff] tracking-tight drop-shadow-md"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}
          >
            Certificates
          </h2>
          <p className="text-[#888] text-base mt-3 font-mono tracking-wide">
            Verified skills and completed courses.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              {...fadeUp(0.1 + i * 0.08)}
              className="relative group bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-7 overflow-hidden
                         transition-all duration-300 hover:border-[#9D8DF1]/50 hover:shadow-[0_0_30px_rgba(157,141,241,0.08)]
                         flex flex-col min-h-[210px]"
            >
              {/* Content — shifts up slightly on hover to make room for button */}
              <div className="flex-1 transition-transform duration-500 ease-out group-hover:-translate-y-3">
                <p className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.22em] uppercase mb-4 font-semibold">
                  {cert.org}
                </p>
                <h3 className="font-serif text-xl font-bold text-[#ffffff] leading-snug drop-shadow-sm">
                  {cert.title}
                </h3>
              </div>

              {/* "View Certificate" button — hidden below, slides up on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 px-7 pb-6
                           translate-y-full opacity-0
                           group-hover:translate-y-0 group-hover:opacity-100
                           transition-all duration-500 ease-out"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-wider
                             text-[#9D8DF1] border border-[#9D8DF1]/40 bg-[rgba(157,141,241,0.07)]
                             px-4 py-2 rounded-lg
                             hover:bg-[#9D8DF1] hover:text-[#08080E]
                             transition-colors duration-200"
                >
                  ↗ View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
