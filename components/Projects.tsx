'use client'
import { useState } from 'react'
import Image from 'next/image'
import { projects, tagClass } from '@/lib/data'

const filters = ['all', 'manufacturing', 'logistics', 'healthcare', 'academic', 'service']

export default function Projects() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-label">Our Work</div>
        <h2 className="section-title centered">Portfolio of<br /><em>Real-World Projects</em></h2>
        <p className="section-desc">Over 50 projects delivered in 6 months across industries and continents.</p>

        <div className="filter-bar">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(p => (
            <div key={p.id} className={`project-card${p.featured ? ' featured' : ''}`}>
              <div className="pc-image">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={190}
                  style={{ width: '100%', height: '190px', objectFit: 'cover' }}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  loading="lazy"
                />
              </div>
              <div className="pc-header">
                <span className={`pc-tag ${tagClass[p.tag] ?? ''}`}>{p.tag}</span>
                <span className="pc-tool">{p.tool}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="pc-footer">
                <span className="pc-region">{p.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
