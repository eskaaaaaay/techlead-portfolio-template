import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Brain, Cpu } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const icons = [Brain, Cpu, GraduationCap]

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Education() {
  const { education } = portfolioConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="education" className="py-12 lg:py-16 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...(isInView ? anim(0) : { initial: { opacity: 0 } })}>
          <div className="mb-6 lg:mb-8">
            <p className="font-mono text-[11px] text-primary-light uppercase tracking-[0.2em] mb-2">Education</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Academic <span className="gradient-text">Foundation</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={edu.degree + edu.institution}
                {...(isInView ? anim(0.06 + i * 0.08) : { initial: { opacity: 0 } })}
              >
                <SpotlightCard className="p-5 lg:p-6 noise gradient-border h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Row: Icon + Period Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-mono text-[11px] text-primary-light uppercase tracking-wider font-semibold">
                            {edu.specialization}
                          </p>
                          <h3 className="text-base lg:text-lg font-bold text-text-primary tracking-tight">
                            {edu.degree}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-y border-border/40 font-mono text-[11px] text-text-muted mb-3.5">
                      <span className="text-text-primary font-medium">{edu.institution}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar size={11} /> {edu.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} /> {edu.location}</span>
                      </div>
                    </div>

                    <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-surface/90 border border-border/40 text-text-muted hover:text-text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
