import { portfolioConfig } from '../data/portfolioData'
import { Mail } from 'lucide-react'

const LinkedinIcon = ({ size = 14, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer() {
  const { personal } = portfolioConfig
  const initial = personal.firstName.charAt(0).toUpperCase()
  const slug = `${personal.firstName.toLowerCase()}.${personal.lastName.toLowerCase()}`

  return (
    <footer className="border-t border-border/30 py-10 relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Made by Loggdin Showcase Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-surface-card to-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm font-semibold text-text-primary">
              <span className="gradient-text font-bold">Loggdin</span> - Design Studio based in Dublin
            </p>
          </div>

          <a
            href="mailto:hello@loggdin.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border/60 hover:border-primary-light/40 text-text-secondary hover:text-text-primary text-xs font-mono transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 shrink-0"
          >
            <Mail size={13} className="text-primary-light" />
            <span>hello@loggdin.com</span>
          </a>
        </div>

        {/* Bottom: Standard Footer Nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/20 text-xs font-mono text-text-muted">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-bold text-[10px] text-primary-light">{initial}</span>
            </div>
            <span className="tracking-wide text-text-secondary">{slug}</span>
          </div>

          {/* Copyright */}
          <p className="text-center">
            &copy; {new Date().getFullYear()} {personal.firstName} {personal.lastName}. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-text-primary transition-colors"
            >
              Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-text-primary transition-colors"
            >
              <LinkedinIcon size={12} />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
