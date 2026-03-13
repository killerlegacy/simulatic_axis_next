'use client'
import { Fragment, useEffect, useRef, useState } from 'react'

const HERO_STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 18, suffix: '', label: 'Expert Engineers' },
  { value: 3, suffix: '', label: 'Countries Active' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const hasAnimatedStats = useRef(false)
  const [displayedStats, setDisplayedStats] = useState<number[]>(() => HERO_STATS.map(() => 0))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animFrame: number
    let particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = Array.from({ length: Math.floor((canvas.width * canvas.height) / 14000) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const gs = 60
      ctx.strokeStyle = 'rgba(0,210,180,0.06)'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke() }
      for (let y = 0; y < canvas.height; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke() }
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,210,180,${p.alpha})`; ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) { ctx.strokeStyle = `rgba(0,210,180,${(1 - d / 120) * 0.08})`; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke() }
        }
      }
      animFrame = requestAnimationFrame(draw)
    }

    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize) }
  }, [])

  useEffect(() => {
    const container = statsRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplayedStats(HERO_STATS.map(s => s.value))
      return
    }

    let animFrame = 0
    const animateStats = () => {
      const duration = 1200
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayedStats(HERO_STATS.map(s => Math.round(s.value * eased)))
        if (progress < 1) animFrame = requestAnimationFrame(step)
      }
      animFrame = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting && !hasAnimatedStats.current) {
          hasAnimatedStats.current = true
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(container)
    return () => {
      observer.disconnect()
      if (animFrame) cancelAnimationFrame(animFrame)
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <canvas ref={canvasRef} className="hero-canvas" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Industry 4.0 Simulation Experts
        </div>
        <h1 className="hero-title">
          Engineering the<br />
          <span className="gradient-text">Digital Future</span><br />
          of Operations
        </h1>
        <p className="hero-sub">
          We transform complex real-world processes into powerful digital simulations —
          optimizing warehouses, factories, hospitals, and more across Pakistan, USA, and Canada.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>View Our Work</button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>Start a Project</button>
        </div>
        <div className="hero-stats" ref={statsRef}>
          {HERO_STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className="stat">
                <span className="stat-num">{displayedStats[i]}{stat.suffix}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {i < HERO_STATS.length - 1 && <div className="stat-div" />}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
