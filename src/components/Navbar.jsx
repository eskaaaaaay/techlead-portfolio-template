import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioConfig } from '../data/portfolioData'

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
          <a
            href={`mailto:${personal.email}`}
            className="ml-3 px-4 py-1.5 text-[13px] font-medium text-white bg-primary hover:bg-primary-light rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
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
              <div className="pt-2">
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
