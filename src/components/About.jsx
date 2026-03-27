import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const competencies = [
  {
    icon: '⬡',
    title: 'Data Structures & Algorithms',
    desc: '100+ problems solved. Strong command of algorithmic thinking and optimal problem-solving strategies.',
  },
  {
    icon: '◈',
    title: 'Machine Learning',
    desc: 'End-to-end ML pipelines using Scikit-Learn, PCA, KNN, clustering, and supervised/unsupervised techniques.',
  },
  {
    icon: '◉',
    title: 'Android Development',
    desc: 'Native Android apps with Kotlin, Jetpack Compose, and modern architecture patterns.',
  },
  {
    icon: '◎',
    title: 'Object-Oriented Programming',
    desc: 'Robust, scalable software design using SOLID principles in Java, C++, and Python.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#1A1A1A]">
      {/* Top divider */}
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <span className="label-tag">01 — About</span>
          <span className="flex-1 h-px bg-[#2C2C2C]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Bio */}
          <div>
            <motion.h2 {...fadeUp(0.1)} className="display-serif-md mb-8 leading-tight">
              Engineer at the intersection of{' '}
              <span className="text-[#9D8DF1] italic">Data Science</span>{' '}
              & Software Development
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-[#aaa] text-base leading-relaxed mb-6">
              I am an engineer passionate about synthesizing raw consumer data into actionable behavioral clusters and engineering AI components that solve real-world problems.
            </motion.p>
            <motion.p {...fadeUp(0.25)} className="text-[#777] text-sm leading-relaxed mb-8">
              With a strong foundation in Data Structures and Algorithms, I thrive on building efficient, scalable solutions — from unsupervised ML pipelines and NLP systems to polished Android applications.
            </motion.p>

            {/* Quick stats */}
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 gap-4">
              {[
                { num: '10+', label: 'Tech Skills' },
                { num: '100+', label: 'DSA Problems' },
              ].map(({ num, label }) => (
                <div key={label} className="border border-[#2C2C2C] rounded-sm p-4 bg-[#1f1f1f] hover:border-[#9D8DF1] transition-colors duration-300">
                  <p className="font-serif text-2xl font-bold text-[#9D8DF1] mb-1">{num}</p>
                  <p className="font-mono text-[0.65rem] text-[#666] tracking-widest uppercase">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Core Competencies */}
          <div>
            <motion.p {...fadeUp(0.1)} className="font-mono text-[0.68rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-8">
              Core Competencies
            </motion.p>
            <div className="flex flex-col gap-4">
              {competencies.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(0.15 + i * 0.08)}
                  className="competency-card cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <span className="card-icon text-[#444] text-2xl leading-none transition-colors duration-300 mt-0.5 flex-shrink-0">
                      {icon}
                    </span>
                    <div>
                      <h3 className="text-[#ffffff] text-lg font-semibold mb-1 drop-shadow-sm">{title}</h3>
                      <p className="text-[#666] text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
