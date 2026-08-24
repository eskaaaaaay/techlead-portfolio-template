import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Layers, Database, Users, Sparkles, Award } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const skillCategories = {
  all: 'All Skills',
  backend: 'Backend & Architecture',
  data_ai: 'Data & AI',
  devops: 'DevOps & Cloud',
  frontend: 'Frontend',
  leadership: 'Leadership & Agile',
}

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  const { personal, skills, certifications } = portfolioConfig
  const [selectedCategory, setSelectedCategory] = useState('leadership')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === selectedCategory)

  const stats = [
    { icon: Code2, value: personal.yearsOfExperience, label: 'Years of Experience', sublabel: 'Full-Stack Architecture' },
    { icon: Layers, value: 'Cloud Core', label: 'Primary Focus', sublabel: personal.primaryStack },
    { icon: Database, value: 'Enterprise', label: 'Data & Architecture', sublabel: 'High-Throughput Services' },
    { icon: Users, value: 'Leadership', label: 'Current Role', sublabel: 'Technical Direction' },
  ]

  return (
    <section id="about" className="py-12 lg:py-16 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...(isInView ? anim(0) : { initial: { opacity: 0 } })}>
          <div className="mb-6 lg:mb-8">
            <p className="font-mono text-[11px] text-primary-light uppercase tracking-[0.2em] mb-2">About</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Engineering <span className="gradient-text">Leadership</span>
            </h2>
          </div>
        </motion.div>

        {/* ─── Row 1: Bio + Stats ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Bio: takes 2/3 */}
          <motion.div
            {...(isInView ? anim(0.05) : { initial: { opacity: 0 } })}
            className="lg:col-span-2"
          >
            <SpotlightCard className="p-5 lg:p-7 noise gradient-border h-full flex flex-col justify-center">
              <div className="space-y-3.5 text-[14px] sm:text-[15px] leading-[1.75] text-text-secondary">
                <p>
                  A results-driven <span className="text-text-primary font-semibold">{personal.title}</span> with
                  over {personal.yearsOfExperience} years of hands-on experience building enterprise applications and distributed systems.
                </p>
                <p>
                  Specialized in translating high-level business objectives into scalable software architecture, leading engineering squads,
                  and championing modern Git CI/CD release engineering and automated quality gates.
                </p>
                <p>
                  {personal.shortBio}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Stats: 2x2 grid in 1/3 */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...(isInView ? anim(0.08 + i * 0.04) : { initial: { opacity: 0 } })}
              >
                <SpotlightCard className="p-4 sm:p-5 noise gradient-border flex flex-col items-center justify-center text-center group h-full">
                  <stat.icon
                    size={18}
                    className="mx-auto mb-2 text-text-muted group-hover:text-primary-light transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <p className="text-lg sm:text-xl font-bold text-text-primary mb-0.5 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.08em] leading-snug">
                    {stat.label}
                  </p>
                  <p className="text-[9px] font-mono text-primary-light/80 mt-0.5 truncate max-w-full">
                    {stat.sublabel}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Row 2: Categorized Skills + Certifications ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Skills: takes 2/3 */}
          <motion.div
            {...(isInView ? anim(0.2) : { initial: { opacity: 0 } })}
            className="lg:col-span-2"
          >
            <SpotlightCard className="p-5 lg:p-7 noise gradient-border h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles size={15} className="text-primary-light" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight">Verified Skills & Technical Competencies</h3>
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">{filteredSkills.length} skills</span>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 pb-3 border-b border-border/40">
                  {Object.entries(skillCategories).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                        selectedCategory === key
                          ? 'bg-primary text-white font-medium'
                          : 'bg-surface/80 border border-border/40 text-text-muted hover:text-text-secondary hover:bg-surface-light'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {filteredSkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -1.5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className="font-mono text-[11px] px-3 py-1 rounded-lg bg-surface/90 border border-border/50 text-text-secondary hover:text-white hover:border-primary-light/60 hover:bg-primary/10 transition-colors duration-200 cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Certifications: 1/3 */}
          <motion.div
            {...(isInView ? anim(0.25) : { initial: { opacity: 0 } })}
          >
            <SpotlightCard className="p-5 lg:p-7 noise gradient-border h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award size={15} className="text-primary-light" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">Certifications & Credentials</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2.5 group">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                    <div>
                      <p className="text-[13px] text-text-secondary group-hover:text-text-primary transition-colors duration-200 leading-snug">
                        {cert.name}
                      </p>
                      <span className="text-[10px] font-mono text-text-muted">
                        {cert.tag}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
