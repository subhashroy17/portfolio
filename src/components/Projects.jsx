import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    total: '03',
    title: 'Advanced Customer Segmentation',
    short: 'Unsupervised ML pipeline · Scikit-Learn · PCA',
    tags: ['Python', 'Scikit-Learn', 'PCA', 'K-Means', 'Pandas'],
    accent: '#9D8DF1',
    overview:
      'Built an end-to-end unsupervised machine learning pipeline to segment customers based on raw behavioral data. Leveraged PCA for dimensionality reduction, reducing training time significantly while increasing model accuracy.',
    highlights: [
      '25% increase in segmentation accuracy vs. baseline',
      'PCA reduced feature space from 40 → 8 components',
      'K-Means + Silhouette analysis for optimal cluster count',
      'Actionable behavioral cluster profiles for marketing teams',
    ],
    year: '2025',
    category: 'Machine Learning',
  },
  {
    id: 2,
    num: '02',
    total: '03',
    title: 'AI News Agent',
    short: 'GenAI · Live data retrieval · Intelligent summarization',
    tags: ['Python', 'LangChain', 'RAG', 'GenAI', 'NLP'],
    accent: '#9D8DF1',
    overview:
      'An autonomous AI agent that retrieves live news data and produces intelligent, context-aware summaries using Retrieval Augmented Generation (RAG) frameworks and large language model integrations.',
    highlights: [
      'Real-time web data retrieval and indexing',
      'RAG pipeline for grounded, hallucination-free summaries',
      'Multi-source aggregation with deduplication',
      'LLM prompt engineering for concise, accurate outputs',
    ],
    year: '2025',
    category: 'AI / GenAI',
  },
  {
    id: 3,
    num: '03',
    total: '03',
    title: 'Pollution Level Categorization',
    short: 'KNN classification · Air quality sensor data',
    tags: ['Python', 'KNN', 'Scikit-Learn', 'Matplotlib', 'Data Analysis'],
    accent: '#9D8DF1',
    overview:
      'A classification system that categorizes air quality levels—from Good to Hazardous—using K-Nearest Neighbour algorithms applied to multi-sensor environmental data.',
    highlights: [
      'KNN with optimized K selection via cross-validation',
      'Multi-class air quality categorization (6 levels)',
      'Feature engineering from raw sensor streams',
      'Visualization dashboard for pollutant trends',
    ],
    year: '2025',
    category: 'ML / Data Science',
  },
];

export default function Projects({ onSelectProject }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#1A1A1A]">
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="label-tag">02 — Featured Works</span>
            <span className="flex-1 h-px bg-[#2C2C2C] w-16 hidden md:block" />
          </div>
          <span className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-widest drop-shadow-[0_0_8px_rgba(157,141,241,0.8)] font-semibold">
            {projects.length} Projects
          </span>
        </motion.div>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="project-row"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelectProject(project)}
            >
              <div className="flex items-center justify-between gap-6">
                {/* Left: number + title */}
                <div className="flex items-center gap-6 flex-1 min-w-0">
                  <span className="project-num flex-shrink-0">
                    {project.num}
                    <span className="text-[#333]">/{project.total}</span>
                  </span>
                  <div className="min-w-0">
                    <h3 className="project-title truncate">{project.title}</h3>
                    <p className={`font-mono text-[0.7rem] tracking-wider mt-1 transition-all duration-300 ${hovered === project.id ? 'text-[#B8AAFA] drop-shadow-[0_0_8px_rgba(184,170,250,0.6)]' : 'text-[#555]'}`}>
                      {project.short}
                    </p>
                  </div>
                </div>

                {/* Right: tags + arrow */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="hidden md:flex gap-2 flex-wrap justify-end">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={`font-mono text-xs border px-2.5 py-1 rounded-sm transition-all duration-300 ${hovered === project.id ? 'text-[#9D8DF1] border-[#9D8DF1]/50 bg-[rgba(157,141,241,0.05)] shadow-[0_0_10px_rgba(157,141,241,0.4)]' : 'text-[#555] border-[#2C2C2C] bg-transparent'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="project-arrow">→</span>
                </div>
              </div>

              {/* Animated category label on hover */}
              <AnimatePresence>
                {hovered === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-widest mt-3">
                      {project.year} · {project.category} — Click to view case study →
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/subhashroy17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>View All on GitHub</span>
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
