import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GitBranch,
  Bot,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  Users
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const icons = [Layers, GitBranch, Bot, Users]

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function LeadershipPillars() {
  const { leadershipPillars } = portfolioConfig
  const [activeTab, setActiveTab] = useState(leadershipPillars[0]?.id || 'architecture')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const currentPillar = leadershipPillars.find((p) => p.id === activeTab) || leadershipPillars[0]

  return (
    <section id="leadership" className="py-12 lg:py-16 relative overflow-hidden" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...(isInView ? anim(0) : { initial: { opacity: 0 } })}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 lg:mb-8">
            <div>
              <p className="font-mono text-[11px] text-primary-light uppercase tracking-[0.2em] mb-2">
                Tech Leadership & Architecture
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Engineering <span className="gradient-text">Excellence</span>
              </h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-[15px] max-w-md">
              Core focus areas as a Technical Lead: bridging system architecture, modern Git CI/CD release governance, and team leadership.
            </p>
          </div>
        </motion.div>

        {/* Tab Selectors with instant touch feedback */}
        <motion.div
          {...(isInView ? anim(0.06) : { initial: { opacity: 0 } })}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
        >
          {leadershipPillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length]
            const isActive = activeTab === pillar.id
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] ${
                  isActive
                    ? 'border-primary-light bg-surface-light shadow-md shadow-primary/10 ring-1 ring-primary-light/40'
                    : 'border-border/50 bg-surface-card/70 hover:border-border-light hover:bg-surface-light/40'
                }`}
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-primary text-white' : 'bg-surface border border-border text-text-muted'
                  }`}
                >
                  <Icon size={17} />
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isActive ? 'text-text-primary' : 'text-text-secondary'
                    }`}
                  >
                    {pillar.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-mono text-text-muted truncate">
                    {pillar.badge}
                  </p>
                </div>
              </button>
            )
          })}
        </motion.div>

        {/* Instant Active Content Showcase */}
        <div key={currentPillar.id} className="transition-opacity duration-200">
          <SpotlightCard className="p-5 sm:p-8 lg:p-10 noise gradient-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left details (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light font-mono text-[11px] mb-3">
                    <Sparkles size={12} />
                    <span>{currentPillar.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2">
                    {currentPillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-text-muted">
                    {currentPillar.subtitle}
                  </p>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {currentPillar.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    Core Technical Focus
                  </p>
                  <div className="grid sm:grid-cols-1 gap-2">
                    {currentPillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 size={16} className="mt-0.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-border/40">
                  {currentPillar.keyPoints.map((point, i) => (
                    <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-surface/80 border border-border/40 text-center">
                      <p className="text-xs sm:text-sm lg:text-base font-bold text-text-primary truncate">{point.value}</p>
                      <p className="text-[9px] sm:text-[10px] font-mono text-text-muted uppercase tracking-wider mt-0.5">{point.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right code artifact (5 cols) */}
              <div className="lg:col-span-5 flex flex-col h-full w-full overflow-hidden">
                <div className="rounded-xl border border-border bg-surface/95 overflow-hidden shadow-xl shadow-black/40 flex-1 flex flex-col w-full">
                  {/* Header */}
                  <div className="px-4 py-2.5 border-b border-border/60 bg-surface-light/60 flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-text-muted ml-2 truncate">
                        architecture-artifacts / {currentPillar.id}.cs
                      </span>
                    </div>
                    <Terminal size={13} className="text-text-muted shrink-0" />
                  </div>

                  {/* Code block */}
                  <div className="p-3.5 font-mono text-[10px] sm:text-[11px] leading-relaxed text-text-secondary overflow-x-auto select-none bg-surface/80 flex-1">
                    <pre className="text-emerald-400/90 whitespace-pre">
                      <code>{currentPillar.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Status footer bar */}
                  <div className="px-3.5 py-2 border-t border-border/50 bg-surface-light/40 flex items-center justify-between text-[10px] font-mono text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Verified Architecture Pattern</span>
                    </div>
                    <span className="text-primary-light">Enterprise Stack</span>
                  </div>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
