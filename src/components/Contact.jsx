import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight, MapPin } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Contact() {
  const { personal } = portfolioConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="contact" className="py-12 lg:py-16 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...(isInView ? anim(0) : { initial: { opacity: 0 } })}>
          <div className="mb-6 lg:mb-8">
            <p className="font-mono text-[11px] text-primary-light uppercase tracking-[0.2em] mb-2">Contact</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
          </div>
        </motion.div>

        {/* Full-width container matching all previous sections */}
        <motion.div
          {...(isInView ? anim(0.1) : { initial: { opacity: 0 } })}
          className="w-full"
        >
          <SpotlightCard className="p-5 sm:p-8 lg:p-12 noise gradient-border relative overflow-hidden">
            {/* Decorative ambient orb */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              {/* Header / Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Open for Technical Leadership & Advisory Inquiries</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Interested in working together?
              </h3>
              
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-3xl mb-4 text-balance">
                Whether you have a distributed systems challenge to solve, an architectural initiative to lead,
                or a leadership opportunity in {personal.location} or remotely, I would be glad to connect.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-6 sm:mb-8">
                <MapPin size={14} className="text-primary-light" />
                <span>{personal.location}</span>
              </div>

              {/* Action Buttons placed cleanly at the bottom */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-border/40">
                <a
                  href={`mailto:${personal.email}`}
                  className="group relative inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 bg-primary text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 max-w-full"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail size={16} className="relative z-10 shrink-0" />
                  <span className="relative z-10 text-xs sm:text-sm break-all sm:break-normal">{personal.email}</span>
                  <ArrowUpRight size={15} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-border-light/60 bg-surface/80 text-text-secondary hover:text-text-primary hover:border-primary-light/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <LinkedinIcon size={16} />
                  <span className="text-xs sm:text-sm font-medium">LinkedIn Profile</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
