import { useState } from 'react';
import { motion } from 'framer-motion';

const row1 = ['C++', 'Python', 'Java', 'Kotlin', 'DSA', 'GitHub', 'Jetpack Compose', 'Android Studio'];
const row2 = ['Machine Learning', 'NLP', 'OOP', 'Scikit-Learn', 'LLM / RAG', 'Teamwork', 'SQL', 'DBMS'];
const row3 = ['HTML & CSS', 'MySQL', 'Matplotlib', 'KNN', 'PCA', 'K-Means', 'Prompt Engineering', 'Algorithms'];

function MarqueeRow({ items, reverse = false, speed = 48 }) {
  const [paused, setPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Triple the array so the loop is seamless
  const content = [...items, ...items, ...items];

  const animStyle = {
    animation: `${reverse ? 'marqueeRev' : 'marquee'} ${speed}s linear infinite`,
    animationPlayState: paused ? 'paused' : 'running',
  };

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setHoveredItem(null); }}
    >
      <div
        className="flex items-center gap-10"
        style={{ width: 'max-content', ...animStyle }}
      >
        {content.map((item, i) => {
          const isHovered = hoveredItem === `${item}-${i}`;
          return (
            <span
              key={`${item}-${i}`}
              onMouseEnter={() => setHoveredItem(`${item}-${i}`)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                cursor: 'default',
                userSelect: 'none',
                transition: 'color 0.3s ease, text-shadow 0.3s ease',
                color: isHovered ? '#9D8DF1' : 'rgba(245,245,240,0.09)',
                textShadow: isHovered
                  ? '0 0 40px rgba(157,141,241,0.5), 0 0 80px rgba(157,141,241,0.2)'
                  : 'none',
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRev {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section
        id="skills"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: '#1A1A1A' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="label-tag">04 — Skills & Stack</span>
          <span className="flex-1 h-px bg-[#2C2C2C]" />
        </motion.div>

        {/* Marquee rows */}
        <div className="flex flex-col gap-8">
          <MarqueeRow items={row1} reverse={false} speed={50} />
          <MarqueeRow items={row2} reverse={true} speed={60} />
          <MarqueeRow items={row3} reverse={false} speed={55} />
        </div>
      </section>
    </>
  );
}
