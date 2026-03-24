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
    type: 'education',
  },
  {
    degree: 'Intermediate (PCM)',
    institution: 'Narayana Group of Institutions',
    detail: 'Score: 96%',
    period: '2021 – 2023',
    type: 'education',
  },
];

const training = [
  {
    title: 'AI Powered NLP',
    org: 'AlgoTutor Academy',
    detail: 'LLM Architectures · RAG Workflows · Prompt Engineering',
    type: 'training',
    highlight: true,
  },
];

const certs = [
  {
    title: 'Cloud Computing',
    org: 'NPTEL',
    type: 'cert',
    link: 'https://drive.google.com/file/d/19R2cnVBr54FrjhNltFurL7hjuM2EgjV3/view?usp=drivesdk',
  },
  {
    title: 'Data Structures & Algorithms',
    org: 'Apna College',
    type: 'cert',
    link: 'https://drive.google.com/file/d/1459IZ-p6bWEbb1DrmGIufC87p7TVFve5/view?usp=drivesdk',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 bg-[#111111]">
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <span className="label-tag">04 — Education & Certifications</span>
          <span className="flex-1 h-px bg-[#2C2C2C]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Education */}
          <div className="lg:col-span-2">
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

            {/* Featured Training */}
            <motion.p {...fadeUp(0.3)} className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.2em] uppercase mt-12 mb-6">
              Key Training
            </motion.p>
            {training.map(({ title, org, detail }) => (
              <motion.div
                key={title}
                {...fadeUp(0.35)}
                className="border border-[#9D8DF1]/30 bg-[rgba(157,141,241,0.05)] rounded-sm p-6 relative overflow-hidden"
              >
                {/* Accent corner */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#9D8DF1]" />
                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[0.6rem] text-[#9D8DF1] tracking-widest uppercase bg-[rgba(157,141,241,0.15)] px-2 py-0.5 rounded-sm">
                      Featured
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#ffffff] mb-1 drop-shadow-md">{title}</h3>
                  <p className="text-[#9D8DF1] text-sm font-medium mb-3">{org}</p>
                  <p className="text-[#777] text-sm">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates sidebar */}
          <div>
            <motion.p {...fadeUp(0.1)} className="font-mono text-[0.65rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-8">
              Certifications
            </motion.p>
            <div className="flex flex-col gap-4">
              {certs.map(({ title, org, link }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(0.15 + i * 0.1)}
                  className="relative group h-[104px] w-full [perspective:1000px] cursor-default"
                >
                  <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] relative">
                    
                    {/* FRONT */}
                    <div className="absolute inset-0 border border-[#2C2C2C] bg-[#1A1A1A] rounded-sm p-5 [backface-visibility:hidden] flex items-center">
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-8 h-8 rounded-sm bg-[rgba(157,141,241,0.1)] border border-[rgba(157,141,241,0.2)] flex items-center justify-center flex-shrink-0 transition-colors">
                          <span className="text-[#9D8DF1] text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-[#ffffff] text-lg font-semibold mb-0.5 drop-shadow-sm">{title}</h4>
                          <p className="font-mono text-[0.6rem] text-[#666] tracking-wider">{org}</p>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 border border-[#9D8DF1]/50 bg-[#1A1A1A] rounded-sm [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center overflow-hidden">
                       {/* Subtle background abstract for 'preview' */}
                       <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                         <svg className="w-24 h-24 text-[#9D8DF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                         </svg>
                       </div>
                       
                       <a 
                         href={link} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="relative z-10 px-5 py-2 border border-[#9D8DF1] text-[#9D8DF1] text-xs uppercase tracking-widest font-mono hover:bg-[#9D8DF1] hover:text-[#08080E] transition-colors rounded-sm shadow-[0_0_15px_rgba(157,141,241,0.3)]"
                       >
                         View Certificate
                       </a>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 p-5 border border-[#2C2C2C] rounded-sm bg-[#1A1A1A]"
            >
              <p className="font-mono text-[0.6rem] text-[#555] tracking-widest uppercase mb-3">Current Focus</p>
              <ul className="flex flex-col gap-2">
                {['LLM Architectures', 'RAG Pipelines', 'Prompt Engineering', 'Android (Jetpack Compose)'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9D8DF1] flex-shrink-0" />
                    <span className="text-[#888] text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
