import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const C = {
  white:  '#ffffff',
  snow:   '#f5f5f7',
  ink:    '#1d1d1f',
  gray:   '#6e6e73',
  lgray:  '#86868b',
  border: 'rgba(0,0,0,0.08)',
  violet: '#7C3AED',
  gold:   '#C9974A',
};

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = caseStudies.find(c => c.slug === slug);

  if (!cs) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', background: C.white }}>
        <p style={{ color: C.gray }}>Case study not found.</p>
        <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
          <ArrowLeft size={14}/> Back to portfolio
        </Link>
      </div>
    );
  }

  const accent = cs.accentColor;

  return (
    <div style={{ background: C.white, color: C.ink, minHeight: '100vh' }}>

      {/* Nav */}
      <header className="nav-blur" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
            <ArrowLeft size={15}/> Back
          </Link>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cs.tag}</span>
        </div>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 120px' }}>

        {/* Header */}
        <motion.div {...up(0)} style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '0.8125rem', color: C.lgray, marginBottom: '8px' }}>{cs.company} · {cs.period}</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: C.ink, letterSpacing: '-0.022em', lineHeight: 1.1, marginBottom: '16px' }}>{cs.title}</h1>
          <p style={{ fontSize: '1.0625rem', fontStyle: 'italic', fontWeight: 500, color: accent, marginBottom: '36px' }}>{cs.hook}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cs.metrics.map((m, i) => (
              <div key={i} style={{ padding: '16px', borderRadius: '14px', textAlign: 'center', background: `${accent}0a`, border: `1px solid ${accent}28` }}>
                <p style={{ fontSize: '1.75rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.022em', lineHeight: 1, marginBottom: '4px' }}>{m.value}</p>
                <p style={{ fontSize: '0.75rem', color: C.gray, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', marginBottom: '48px' }}/>

        {/* Problem */}
        <motion.section {...up(0.05)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num="01" label="The Problem"/>
          <h2 style={{ fontSize: '1.3125rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.015em', marginBottom: '16px' }}>{cs.problem.heading}</h2>
          {cs.problem.body.map((p, i) => (
            <p key={i} style={{ fontSize: '1rem', color: C.gray, lineHeight: 1.75, marginBottom: '16px' }}>{p}</p>
          ))}
          <div style={{ marginTop: '20px', padding: '18px 22px', borderRadius: '14px', background: `${accent}08`, borderLeft: `3px solid ${accent}` }}>
            <p style={{ fontSize: '1rem', color: C.ink, lineHeight: 1.7, fontStyle: 'italic' }}>{cs.problem.callout}</p>
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section {...up(0.08)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num="02" label="My Approach"/>
          <h2 style={{ fontSize: '1.3125rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.015em', marginBottom: '28px' }}>{cs.approach.heading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cs.approach.steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '18px' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 700, color: accent, background: `${accent}10`, border: `1px solid ${accent}28`, marginTop: '2px' }}>
                  {s.num}
                </div>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: C.ink, marginBottom: '4px' }}>{s.title}</p>
                  <p style={{ fontSize: '0.9375rem', color: C.gray, lineHeight: 1.7 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What I Built */}
        <motion.section {...up(0.1)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num="03" label="What I Built"/>
          <h2 style={{ fontSize: '1.3125rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.015em', marginBottom: '20px' }}>{cs.built.heading}</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {cs.built.items.map((item, i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: '14px', background: C.snow }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                  <ChevronRight size={13} style={{ color: accent, flexShrink: 0, marginTop: '2px' }}/>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.ink }}>{item.label}</p>
                </div>
                <p style={{ fontSize: '0.875rem', color: C.gray, lineHeight: 1.65, paddingLeft: '21px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section {...up(0.12)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num="04" label="Results"/>
          <h2 style={{ fontSize: '1.3125rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.015em', marginBottom: '20px' }}>{cs.results.heading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cs.results.items.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderRadius: '14px', background: C.snow }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.75rem', color: C.lgray, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{r.label}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.9375rem', color: C.lgray, textDecoration: 'line-through' }}>{r.before}</span>
                    <span style={{ fontSize: '0.75rem', color: C.lgray }}>→</span>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: accent }}>{r.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Learnings */}
        <motion.section {...up(0.14)} style={{ marginBottom: '64px' }}>
          <SLabel accent={accent} num="05" label="What I Learned"/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cs.learnings.map((l, i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: '14px', background: C.snow }}>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.ink, marginBottom: '6px' }}>{l.title}</p>
                <p style={{ fontSize: '0.9375rem', color: C.gray, lineHeight: 1.7 }}>{l.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Bottom nav */}
        <motion.div {...up(0.16)}>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', marginBottom: '28px' }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.9375rem' }}>
              <ArrowLeft size={14}/> All projects
            </Link>
            <div style={{ display: 'flex', gap: '8px' }}>
              {caseStudies.filter(c => c.slug !== slug).slice(0, 2).map(c => (
                <Link key={c.slug} to={`/case/${c.slug}`}
                  className="nav-link transition-opacity hover:opacity-80"
                  style={{ fontSize: '0.8125rem', fontWeight: 500, padding: '7px 16px', borderRadius: '980px', background: C.snow, border: '1px solid rgba(0,0,0,0.08)' }}>
                  {c.company} →
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}

function SLabel({ accent, num, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
      <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: accent }}>{num}</span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.07)' }}/>
      <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: C.lgray, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
    </div>
  );
}
