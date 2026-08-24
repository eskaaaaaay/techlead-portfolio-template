import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, Shield, Award, Sparkles } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { portfolioConfig } from '../data/portfolioData'

const icons = [Sparkles, Shield, Award]
const colors = [
  { color: 'from-emerald-500/20 to-teal-500/20', iconColor: 'text-emerald-400' },
  { color: 'from-blue-500/20 to-indigo-500/20', iconColor: 'text-blue-400' },
  { color: 'from-amber-500/20 to-orange-500/20', iconColor: 'text-amber-400' },
]

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Volunteering() {
  const { volunteering } = portfolioConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  if (!volunteering || volunteering.length === 0) return null

  return (
    <section id="volunteering" className="py-12 lg:py-16 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div {...(isInView ? anim(0) : { initial: { opacity: 0 } })}>
          <div className="mb-6 lg:mb-8">
            <p className="font-mono text-[11px] text-primary-light uppercase tracking-[0.2em] mb-2">Community</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Volunteering & <span className="gradient-text">Impact</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {volunteering.map((item, i) => {
            const Icon = icons[i % icons.length]
            const colorTheme = colors[i % colors.length]
            return (
              <motion.div
                key={item.role + item.organization}
                {...(isInView ? anim(0.06 + i * 0.08) : { initial: { opacity: 0 } })}
              >
                <SpotlightCard className="p-5 lg:p-6 noise gradient-border h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${colorTheme.color} border border-border/50 flex items-center justify-center ${colorTheme.iconColor}`}>
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-text-muted px-2.5 py-0.5 rounded-full bg-surface border border-border/40">
                        {item.category}
                      </span>
                    </div>

                    {/* Role & Org */}
                    <h3 className="text-base lg:text-lg font-bold text-text-primary mb-1 tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-primary-light mb-3">
                      {item.organization}
                    </p>

                    {/* Meta info */}
                    <div className="space-y-1 mb-4 pb-3 border-b border-border/40 font-mono text-[11px] text-text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/30">
                    <span className="font-mono text-[10px] text-text-muted/80">
                      {item.badge}
                    </span>
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
