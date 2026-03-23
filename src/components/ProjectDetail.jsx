import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-[#0d0d0d]/95 backdrop-blur-md flex items-start justify-center overflow-y-auto py-16 px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl bg-[#1A1A1A] border border-[#2C2C2C] rounded-sm relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-[#9D8DF1] to-transparent" />

        <div className="p-8 md:p-12">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-[#555] hover:text-[#F5F5F0] font-mono text-lg transition-colors duration-200"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Number + category */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-widest">
              PROJECT {project.num}
            </span>
            <span className="w-3 h-px bg-[#333]" />
            <span className="font-mono text-[0.65rem] text-[#555] tracking-widest uppercase">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            {...fadeUp(0.05)}
            className="font-serif text-3xl md:text-4xl font-black text-[#F5F5F0] mb-2 leading-tight"
          >
            {project.title}
          </motion.h2>

          <motion.p {...fadeUp(0.1)} className="font-mono text-[0.65rem] text-[#555] tracking-widest mb-8">
            {project.year}
          </motion.p>

          {/* Divider */}
          <div className="divider mb-8" />

          {/* Overview */}
          <motion.div {...fadeUp(0.12)}>
            <p className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-3">Overview</p>
            <p className="text-[#aaa] text-sm leading-relaxed">{project.overview}</p>
          </motion.div>

          {/* Highlights */}
          <motion.div {...fadeUp(0.15)} className="mt-8">
            <p className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-4">Key Highlights</p>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9D8DF1] flex-shrink-0 mt-1.5" />
                  <span className="text-[#888] text-sm leading-relaxed">{h}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tags */}
          <motion.div {...fadeUp(0.2)} className="mt-8">
            <p className="font-mono text-[0.65rem] text-[#555] tracking-[0.2em] uppercase mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Footer action */}
          <motion.div {...fadeUp(0.25)} className="mt-10 pt-8 border-t border-[#2C2C2C] flex items-center justify-between">
            <a
              href="https://github.com/subhashroy17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              View on GitHub <span>↗</span>
            </a>
            <button
              onClick={onClose}
              className="font-mono text-xs text-[#555] hover:text-[#aaa] tracking-widest transition-colors duration-200"
            >
              Close ✕
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
