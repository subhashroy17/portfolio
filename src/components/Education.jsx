import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Lovely Professional University',
    detail: 'CGPA: 7.96',
    period: '2023 – 2027',
  },
  {
    degree: 'Intermediate (PCM)',
    institution: 'Narayana Group of Institutions',
    detail: 'Score: 96%',
    period: '2021 – 2023',
  },
];

const training = [
  {
    title: 'AI Powered NLP',
    org: 'AlgoTutor Academy',
    detail: 'LLM Architectures · RAG Workflows · Prompt Engineering',
    certLink: 'https://drive.google.com/file/d/1-cm47o4Jl1jZSevBSIcylb2QeaCcWTCf/view?usp=drivesdk',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 bg-[#111111]">
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <span className="label-tag">04 — Education</span>
          <span className="flex-1 h-px bg-[#2C2C2C]" />
        </motion.div>

        <div className="max-w-4xl flex flex-col gap-16">
          {/* Academic Background */}
          <div>
            <motion.p {...fadeUp(0.05)} className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-8">
              Academic Background
            </motion.p>
            <div className="flex flex-col gap-8">
              {education.map(({ degree, institution, detail, period }, i) => (
                <motion.div key={degree} {...fadeUp(0.1 + i * 0.1)} className="edu-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#ffffff] mb-1 drop-shadow-sm">{degree}</h3>
                      <p className="text-[#aaa] text-sm">{institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-mono text-[0.7rem] text-[#9D8DF1] font-semibold">{detail}</p>
                      <p className="font-mono text-[0.6rem] text-[#555] mt-0.5">{period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Training */}
          <div>
            <motion.p {...fadeUp(0.3)} className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-6">
              Key Training
            </motion.p>
            {training.map(({ title, org, detail, certLink }) => (
              <motion.div
                key={title}
                {...fadeUp(0.35)}
                className="border border-[#9D8DF1]/30 bg-[rgba(157,141,241,0.05)] rounded-sm p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#9D8DF1]" />
                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[0.6rem] text-[#9D8DF1] tracking-widest uppercase bg-[rgba(157,141,241,0.15)] px-2 py-0.5 rounded-sm">
                      Featured
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#ffffff] mb-1 drop-shadow-md">{title}</h3>
                  <p className="text-[#9D8DF1] text-sm font-medium mb-3">{org}</p>
                  <p className="text-[#777] text-sm mb-5">{detail}</p>
                  {certLink && (
                    <a
                      href={certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[0.65rem] text-[#9D8DF1] border border-[#9D8DF1]/50 bg-[rgba(157,141,241,0.05)] px-4 py-2 rounded-sm shadow-[0_0_10px_rgba(157,141,241,0.4)] hover:bg-[#9D8DF1] hover:text-[#08080E] transition-colors"
                    >
                      View Certificate <span>↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
