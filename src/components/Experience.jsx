import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, ChevronRight, TrendingUp } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Experience() {
  const { timeline, personal } = portfolioConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="experience" className="py-12 lg:py-16 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div {...(isInView ? anim(0) : { initial: { opacity: 0 } })}>
          <div className="mb-3">
            <p className="font-mono text-[11px] text-primary-light uppercase tracking-[0.2em] mb-2">Experience</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Career <span className="gradient-text">Timeline</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-[15px] max-w-xl mb-8">
            {personal.yearsOfExperience} years of full-stack engineering and leadership across enterprise environments.
          </p>
        </motion.div>

        {/* ─── Vertical Connected Timeline ─── */}
        <div className="relative">
          {/* Vertical Connecting Spine (desktop) */}
          <div className="hidden lg:block absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary-light via-primary/40 to-border/40" />

          {/* Milestone Cards with Anchored Nodes */}
          <div className="space-y-5">
            {timeline.map((m, i) => (
              <motion.div
                key={m.year + m.company}
                {...(isInView ? anim(0.08 + i * 0.08) : { initial: { opacity: 0 } })}
                className="relative lg:pl-12"
              >
                {/* Vertical Timeline Node (desktop) */}
                <div className="hidden lg:flex absolute left-0 top-7 -translate-x-1/2 items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      m.current
                        ? 'border-primary-light bg-primary shadow-lg shadow-primary/50 ring-4 ring-primary-light/30 animate-pulse'
                        : 'border-purple-400 bg-surface-light'
                    } transition-all duration-300`}
                  />
                </div>

                <SpotlightCard className="noise gradient-border group">
                  <div className="relative z-10 flex flex-col lg:flex-row">
                    {/* Left column: year & meta */}
                    <div className="lg:w-60 shrink-0 p-5 lg:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/40 bg-surface-card/40">
                      <div>
                        {/* Year + Current Tag */}
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-3xl lg:text-4xl font-bold tracking-tighter text-text-primary/15 group-hover:text-primary-light/30 transition-colors duration-500 leading-none">
                            {m.year}
                          </p>
                          {m.current && (
                            <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                              Present
                            </span>
                          )}
                        </div>

                        {/* Company info */}
                        <p className="text-sm font-bold text-text-primary mb-0.5">{m.company}</p>
                        <p className="font-mono text-[11px] text-text-muted tracking-wide">{m.location}</p>
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 text-text-muted font-mono text-[11px]">
                        <Calendar size={12} className="text-primary-light" />
                        <span>{m.period}</span>
                      </div>
                    </div>

                    {/* Right column: role & details */}
                    <div className="flex-1 p-5 lg:p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-2.5">
                        <div className={`w-6 h-1 rounded-full bg-gradient-to-r ${m.accent}`} />
                        <h3 className="text-base lg:text-lg font-bold tracking-tight text-text-primary">{m.title}</h3>
                      </div>

                      <p className="font-mono text-[11px] text-primary-light mb-3.5">
                        Focus: {m.badge}
                      </p>

                      <ul className="space-y-2">
                        {m.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2.5">
                            <ChevronRight size={14} className="mt-0.5 text-primary/60 shrink-0" />
                            <span className="text-[13px] text-text-secondary leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth summary */}
        <motion.div
          {...(isInView ? anim(0.45) : { initial: { opacity: 0 } })}
          className="mt-6 flex flex-wrap items-center gap-3 px-5 py-3 rounded-2xl border border-border/40 bg-surface-light/40"
        >
          <TrendingUp size={18} className="text-primary-light shrink-0" />
          <span className="text-[13px] text-text-secondary">
            Demonstrated continuous career progression across senior engineering and technical leadership roles.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
