import { services } from '@/lib/data'

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-label">Who We Are</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Simulation as a<br /><em>competitive advantage</em></h2>
            <p>At Simulatic Axis, we believe that before you build it, you should simulate it. Our team of <strong>13 simulation engineers</strong> and <strong>5 AI & software experts</strong> brings deep technical knowledge and cross-industry experience to every engagement.</p>
            <p>We work at the intersection of engineering, data science, and operational excellence — helping organizations make confident decisions, reduce costs, and unlock performance they didn&apos;t know was possible.</p>
            <div className="about-highlights">
              {[
                { icon: '🌐', title: 'Global Reach',      sub: 'Active operations in Pakistan, USA & Canada' },
                { icon: '⚡', title: 'Fast Delivery',     sub: '50+ projects completed in just 6 months' },
                { icon: '🔬', title: 'Research-Backed',   sub: 'Proven academic & enterprise methodologies' },
              ].map(h => (
                <div className="highlight-item" key={h.title}>
                  <div className="highlight-icon">{h.icon}</div>
                  <div><strong>{h.title}</strong><span>{h.sub}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card-stack">
              {[
                { icon: '🏭', tag: 'Manufacturing', text: 'Production line balancing & bottleneck removal' },
                { icon: '🏥', tag: 'Healthcare',    text: 'Patient flow & facility digital twins' },
                { icon: '📦', tag: 'Logistics',     text: 'Warehouse & inventory optimization' },
                { icon: '✈️', tag: 'Aviation',      text: 'Airport baggage handling systems' },
              ].map(c => (
                <div className="about-card" key={c.tag}>
                  <div className="ac-top"><span className="ac-icon">{c.icon}</span><span className="ac-tag">{c.tag}</span></div>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-label">What We Do</div>
        <h2 className="section-title centered">End-to-End Simulation<br /><em>Services</em></h2>
        <p className="section-desc">From concept to actionable insight — we cover the full simulation lifecycle.</p>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.num}>
              <div className="sc-number">{s.num}</div>
              <span className="sc-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>{s.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Tools() {
  return (
    <section className="tools-section" id="tools">
      <div className="container">
        <div className="section-label">Our Tech Stack</div>
        <h2 className="section-title centered">Powered by<br /><em>Industry-Leading Platforms</em></h2>
        <div className="tools-grid">
          {[
            { cls: 'simio',   label: 'Simio',   title: 'Simio',          desc: 'Object-based 3D simulation for complex manufacturing and logistics systems.' },
            { cls: 'flexsim', label: 'FlexSim', title: 'FlexSim',        desc: 'High-fidelity 3D simulation for warehouses, hospitals, and industrial systems.' },
            { cls: 'arena',   label: 'Arena',   title: 'Arena',          desc: 'Process-driven discrete event simulation for queuing and service operations.' },
            { cls: 'ai',      label: 'AI/ML',   title: 'AI & Data Science', desc: 'Machine learning integration for predictive modeling and intelligent optimization.' },
          ].map(t => (
            <div className="tool-card" key={t.cls}>
              <div className={`tool-logo ${t.cls}`}>{t.label}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    { num: '01', title: 'Discovery & Scoping',  desc: 'We meet with your team to understand the system, define goals, identify KPIs, and scope the simulation boundaries.' },
    { num: '02', title: 'Data Collection',       desc: 'We gather process data, time-motion studies, historical records, and operational parameters to build an accurate model.' },
    { num: '03', title: 'Model Development',     desc: 'Our engineers build the simulation using Simio, FlexSim, or Arena — validated against real-world baseline data.' },
    { num: '04', title: 'Analysis & Scenarios',  desc: 'We run what-if scenarios, design experiments, and stress-test your process to extract maximum insight.' },
    { num: '05', title: 'Recommendations',       desc: 'Actionable, data-backed recommendations delivered in a clear report with visual dashboards and simulation replays.' },
  ]
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-label">How We Work</div>
        <h2 className="section-title centered">Our Proven<br /><em>Simulation Process</em></h2>
        <div className="process-steps">
          {steps.map((s, i) => (
            <>
              <div className="process-step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <div className="step-body"><h4>{s.title}</h4><p>{s.desc}</p></div>
              </div>
              {i < steps.length - 1 && <div className="process-connector" key={`c${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

const SocialIcons = ({ extraClass = '' }) => (
  <div className={`social-icons ${extraClass}`}>
    <a href="https://www.linkedin.com/company/simulatic-axis/" target="_blank" rel="noopener" className="social-icon si-linkedin" title="LinkedIn">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://www.youtube.com/@SimulaticAxis" target="_blank" rel="noopener" className="social-icon si-youtube" title="YouTube">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    </a>
    <a href="https://www.upwork.com/freelancers/~010a09da2e61b6306e" target="_blank" rel="noopener" className="social-icon si-upwork" title="Upwork">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.567v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H1.48v7.112c0 2.914 2.37 5.303 5.284 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.655 1.109 3.244 0 5.888-2.652 5.888-5.896C24 7.007 21.804 5.018 18.561 5.018z"/></svg>
    </a>
    <a href="https://www.fiverr.com/engr_ameer21?public_mode=true" target="_blank" rel="noopener" className="social-icon si-fiverr" title="Fiverr">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.25 16.25v-7.5h-7.5V7.125A1.125 1.125 0 0 1 9.875 6h1.5V3.75h-1.5A3.375 3.375 0 0 0 6.5 7.125V8.75H4.75V11H6.5v5.25H4.75V18.5h7.5v-2.25H10.5V11h5.25v5.25h-1.5V18.5h4.5v-2.25zM18.5 6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/></svg>
    </a>
  </div>
)

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-label">Let&apos;s Collaborate</div>
            <h2 className="section-title">Ready to Simulate<br /><em>Your Operations?</em></h2>
            <p>Whether you&apos;re optimizing a warehouse, planning a healthcare facility, or building a proof of concept — we&apos;re ready to help. Schedule a meeting today and let&apos;s explore what&apos;s possible.</p>
            <div className="contact-details">
              {[
                { icon: '🌍', title: 'Global Operations',  sub: 'Pakistan · USA · Canada' },
                { icon: '⚡', title: 'Fast Response',      sub: 'We respond within 24 hours' },
                { icon: '💼', title: 'Free Consultation',  sub: 'Initial scoping call at no cost' },
              ].map(c => (
                <div className="contact-item" key={c.title}>
                  <span className="ci-icon">{c.icon}</span>
                  <div><strong>{c.title}</strong><span>{c.sub}</span></div>
                </div>
              ))}
            </div>
            <div className="social-label">Find us on</div>
            <SocialIcons />
          </div>
          <div className="contact-form-wrap">
            <form className="contact-form" action="https://formspree.io/f/mkoqrbjb" method="POST">
              <div className="form-row">
                <div className="form-group"><label>Your Name</label><input type="text" name="name" placeholder="John Smith" required /></div>
                <div className="form-group"><label>Company</label><input type="text" name="company" placeholder="ACME Corp" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Email Address</label><input type="email" name="email" placeholder="john@company.com" required /></div>
                <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" placeholder="+1 (555) 000-0000" /></div>
              </div>
              <div className="form-group">
                <label>Industry</label>
                <select name="industry">
                  <option value="">Select your industry</option>
                  {['Manufacturing','Warehousing & Logistics','Healthcare','Aviation & Transportation','Academic / Research','Food & Beverage','Chemical / R&D','Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Tell us about your project</label>
                <textarea rows={4} name="message" placeholder="Describe the system you'd like to simulate and your key objectives..." />
              </div>
              <button type="submit" className="btn-primary full-width">
                Send Message <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">⬡</span>
              <span className="logo-text">Simulatic<strong>Axis</strong></span>
            </a>
            <p>Transforming complex operations into competitive advantages through expert simulation and digital transformation.</p>
            <SocialIcons extraClass="footer-social" />
          </div>
          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>{[['#about','About Us'],['#services','Services'],['#projects','Projects'],['#contact','Contact']].map(([h,l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
          </div>
          <div className="footer-links">
            <h5>Services</h5>
            <ul>{['Manufacturing Simulation','Warehouse & Logistics','Healthcare Simulation','Digital Twins'].map(s => <li key={s}><a href="#services">{s}</a></li>)}</ul>
          </div>
          <div className="footer-links">
            <h5>Platforms</h5>
            <ul>{['Simio','FlexSim','Arena','AI & ML Integration'].map(p => <li key={p}><a href="#tools">{p}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Simulatic Axis. All rights reserved.</p>
          <p>Simulation · Digital Transformation · Industry 4.0</p>
        </div>
      </div>
    </footer>
  )
}
