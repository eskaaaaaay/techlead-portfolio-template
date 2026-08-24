import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioConfig } from '../data/portfolioData'

const GithubIcon = ({ size = 15 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const navLinks = [
  { label: 'Leadership', href: '#leadership' },
  { label: 'About & Skills', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { personal } = portfolioConfig

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initial = personal.firstName.charAt(0).toUpperCase()
  const slug = `${personal.firstName.toLowerCase()}.${personal.lastName.toLowerCase()}`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 md:bg-surface/85 md:backdrop-blur-2xl border-b border-border/40 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden group-hover:border-primary-light transition-colors duration-300">
            <span className="font-mono font-bold text-sm text-primary-light">{initial}</span>
          </div>
          <span className="hidden sm:block font-mono text-[13px] text-text-muted group-hover:text-text-primary transition-colors duration-300 tracking-wide">
            {slug}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-[13px] text-text-muted hover:text-text-primary transition-colors duration-300 tracking-wide rounded-lg hover:bg-surface-light/40"
            >
              {link.label}
            </a>
          ))}

          {/* GitHub Repo Link Badge */}
          <a
            href="https://github.com/eskaaaaaay/techlead-portfolio-template"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-mono text-text-secondary hover:text-text-primary bg-surface border border-border/60 hover:border-primary-light/40 rounded-full transition-all duration-300 hover:bg-surface-light"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="ml-2 px-4 py-1.5 text-[13px] font-medium text-white bg-primary hover:bg-primary-light rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-surface border-b border-border/40 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-[14px] text-text-muted hover:text-text-primary transition-colors rounded-xl hover:bg-surface-light/50"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href="https://github.com/eskaaaaaay/techlead-portfolio-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-[14px] text-text-secondary bg-surface border border-border/60 rounded-xl hover:bg-surface-light"
                >
                  <GithubIcon size={16} />
                  <span>View Source on GitHub</span>
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="block px-4 py-2.5 text-[14px] font-medium text-white bg-primary rounded-xl text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
