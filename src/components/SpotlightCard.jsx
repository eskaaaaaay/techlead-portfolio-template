import { useRef, useState } from 'react'

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(124, 92, 252, 0.16)',
  borderColor = 'rgba(124, 92, 252, 0.35)',
  ...props
}) {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  // Desktop mouse handlers only (zero touch listeners for 100% native smooth scrolling on mobile)
  const handleMouseMove = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-border/50 bg-surface-card overflow-hidden ${className}`}
      {...props}
    >
      {/* Desktop Mouse Spotlight only (Hidden on mobile to ensure 120Hz native scrolling) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 hidden md:block"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 hidden md:block"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
          mask: `radial-gradient(220px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMask: `radial-gradient(220px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
