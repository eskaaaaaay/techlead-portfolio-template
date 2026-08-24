import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Mail,
  ArrowDown,
  Activity,
  Layers,
  Database,
  GitBranch,
  Bot
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const iconsMap = [Layers, Database, GitBranch, Bot]

const anim = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const [activeTelemetry, setActiveTelemetry] = useState(0)
  const { personal, hero } = portfolioConfig

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[550px] h-[550px] bg-primary/15 -top-32 -left-32" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
      <div className="glow-orb w-[400px] h-[400px] bg-purple-600/10 -bottom-20 -right-20" style={{ animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-8 lg:pt-28 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Info (7 cols) */}
          <div className="lg:col-span-7">
            {/* Location pill */}
            <motion.div
              custom={0} initial="hidden" animate="visible" variants={anim}
              className="flex items-center gap-1.5 text-text-muted px-3 py-1 rounded-full bg-surface-light/40 border border-border/40 w-fit mb-5"
            >
              <MapPin size={13} className="text-primary-light" />
              <span className="text-[12px] font-mono tracking-wide">{personal.location}</span>
            </motion.div>

            {/* Name */}
            <div className="mb-4">
              <motion.h1 custom={1} initial="hidden" animate="visible" variants={anim}
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em]"
              >
                {personal.firstName}
              </motion.h1>
              <motion.h1 custom={2} initial="hidden" animate="visible" variants={anim}
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] gradient-text"
              >
                {personal.lastName}
              </motion.h1>
            </div>

            {/* Roles - pill badges */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={anim}
              className="flex flex-wrap items-center gap-2 mb-5"
            >
              {hero.roles.map((role) => (
                <motion.span
                  key={role}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-mono text-[11px] sm:text-[12px] text-text-secondary px-3.5 py-1 rounded-full border border-border/60 bg-surface-light/50 hover:border-primary-light/40 transition-colors"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Summary */}
            <motion.p custom={4} initial="hidden" animate="visible" variants={anim}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-7 text-balance"
            >
              {hero.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={5} initial="hidden" animate="visible" variants={anim}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href={`mailto:${personal.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 bg-primary text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail size={16} className="relative z-10" />
                <span className="relative z-10 text-[14px]">{personal.email}</span>
              </motion.a>
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border-light/60 text-text-secondary hover:text-text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <LinkedinIcon size={16} />
                <span className="text-[14px]">LinkedIn Profile</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Technical Overview Dashboard (5 cols) */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={anim}
            className="lg:col-span-5"
          >
            <SpotlightCard className="p-5 sm:p-6 noise gradient-border shadow-2xl shadow-primary/5">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border/50 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light">
                    <Activity size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">Technical Profile</h3>
                    <p className="text-[10px] font-mono text-text-muted">Core Focus & Architecture</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-surface border border-border text-[10px] font-mono text-primary-light">
                  <span>{personal.yearsOfExperience} Exp</span>
                </div>
              </div>

              {/* Interactive Node Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {hero.telemetry.map((node, i) => {
                  const Icon = iconsMap[i % iconsMap.length]
                  const isSelected = activeTelemetry === i
                  return (
                    <button
                      key={node.label}
                      onClick={() => setActiveTelemetry(i)}
                      className={`p-3 rounded-xl border text-left transition-all duration-300 active:scale-95 ${
                        isSelected
                          ? 'border-primary-light/60 bg-surface-light shadow-md shadow-primary/10 ring-1 ring-primary-light/30'
                          : 'border-border/40 bg-surface/60 hover:border-border-light hover:bg-surface-light/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon size={16} className={node.color} />
                        <span className="text-[9px] font-mono text-text-muted px-1.5 py-0.5 rounded bg-surface border border-border/50">
                          {node.tag}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-text-primary truncate">{node.label}</p>
                      <p className="text-[10px] font-mono text-text-muted mt-0.5">{node.status}</p>
                    </button>
                  )
                })}
              </div>

              {/* Profile Details */}
              <div className="p-3.5 rounded-xl bg-surface/90 border border-border/60 font-mono text-[11px] space-y-1.5 text-text-secondary">
                <div className="flex items-center justify-between text-text-muted text-[10px] pb-1 border-b border-border/40">
                  <span>FOCUS</span>
                  <span className="text-primary-light font-semibold">{hero.badgeText}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-text-muted">Primary Stack:</span>
                  <span className="text-text-primary font-medium">{personal.primaryStack}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Methodology:</span>
                  <span className="text-text-primary">Agile / Full SDLC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Location:</span>
                  <span className="text-text-primary">{personal.location}</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

        {/* Tech marquee */}
        <motion.div custom={6} initial="hidden" animate="visible" variants={anim} className="mt-8 lg:mt-10">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2.5">Enterprise Core Stack & Tools</p>
          <div className="fade-edges overflow-hidden">
            <div className="flex marquee w-max">
              {[...hero.marqueeTechnologies, ...hero.marqueeTechnologies].map((tech, i) => (
                <span key={i}
                  className="inline-flex items-center px-3.5 py-1 mr-2.5 rounded-full border border-border/60 bg-surface-light/50 font-mono text-[11px] text-text-muted whitespace-nowrap hover:text-primary-light hover:border-primary/30 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <a href="#leadership" className="flex flex-col items-center gap-1 text-text-muted/40 hover:text-text-muted transition-colors">
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
