import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const C = {
  bg:     '#FFFFFF',
  surface:'#F7F6FB',
  border: 'rgba(20,18,38,0.10)',
  text:   '#14121F',
  muted:  '#45414F',
  subtle: '#6B6775',
  purple: '#7C3AED',
};

const GRAD = 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)';
const G = { background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

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
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', background: C.bg }}>
        <p style={{ color: C.muted }}>Case study not found.</p>
        <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
          <ArrowLeft size={14}/> Back to portfolio
        </Link>
      </div>
    );
  }

  const accent = cs.accentColor;
  const hasVoc = Boolean(cs.voc);
  const hasGallery = Boolean(cs.gallery && cs.gallery.length);
  const order = ['problem', hasVoc && 'voc', 'approach', 'built', hasGallery && 'gallery', 'results', 'learnings'].filter(Boolean);
  const num = Object.fromEntries(order.map((key, i) => [key, String(i + 1).padStart(2, '0')]));

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: '100vh' }}>

      {/* Nav */}
      <header className="nav-blur" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
            <ArrowLeft size={15}/> Back
          </Link>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: C.purple, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cs.tag}</span>
        </div>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px 120px' }}>

        {/* Header */}
        <motion.div {...up(0)} style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '0.8125rem', color: C.subtle, marginBottom: '10px' }}>{cs.company} · {cs.period}</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: C.text, letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '16px' }}>{cs.title}</h1>
          <p style={{ fontSize: '1.0625rem', fontStyle: 'italic', fontWeight: 500, ...G, marginBottom: '36px' }}>{cs.hook}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cs.metrics.map((m, i) => (
              <div key={i} style={{ padding: '18px', borderRadius: '14px', textAlign: 'center', background: C.surface, border: `1px solid ${C.border}` }}>
                <p style={{ fontSize: '1.625rem', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '6px', ...G }}>{m.value}</p>
                <p style={{ fontSize: '0.6875rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div style={{ height: '1px', background: 'rgba(20,18,38,0.10)', marginBottom: '48px' }}/>

        {/* Problem */}
        <motion.section {...up(0.05)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num={num.problem} label="The Problem"/>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', marginBottom: '16px' }}>{cs.problem.heading}</h2>
          {cs.problem.body.map((p, i) => (
            <p key={i} style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.78, marginBottom: '16px' }}>{p}</p>
          ))}
          <div style={{ marginTop: '20px', padding: '18px 22px', borderRadius: '14px', background: `${accent}08`, borderLeft: `3px solid ${accent}` }}>
            <p style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.72, fontStyle: 'italic' }}>{cs.problem.callout}</p>
          </div>
        </motion.section>

        {/* Voice of Customer */}
        {hasVoc && (
          <motion.section {...up(0.06)} style={{ marginBottom: '48px' }}>
            <SLabel accent={accent} num={num.voc} label="Voice of Customer"/>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', marginBottom: '12px' }}>{cs.voc.heading}</h2>
            <p style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.78, marginBottom: '20px' }}>{cs.voc.intro}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ marginBottom: '20px' }}>
              {cs.voc.stats.map((s, i) => (
                <div key={i} style={{ padding: '16px', borderRadius: '14px', textAlign: 'center', background: C.surface, border: `1px solid ${C.border}` }}>
                  <p style={{ fontSize: '1.375rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '4px', ...G }}>{s.value}</p>
                  <p style={{ fontSize: '0.625rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: `1px solid ${C.border}`, marginBottom: '20px' }}>
              <img src={cs.voc.image} alt={cs.voc.imageAlt} loading="lazy" style={{ width: '100%', display: 'block' }}/>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Hypothesis validation</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cs.voc.hypotheses.map((h, i) => {
                  const resultColor = h.result === 'confirmed' ? '#047857' : h.result === 'mixed' ? '#B45309' : C.subtle;
                  const resultLabel = h.result === 'confirmed' ? 'Confirmed' : h.result === 'mixed' ? 'Mixed signal' : 'Open';
                  return (
                    <div key={i} style={{ padding: '12px 16px', borderRadius: '12px', background: C.surface, border: `1px solid ${C.border}`, borderLeft: `3px solid ${resultColor}` }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '4px' }}>
                        <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: C.text }}>{h.id} · {h.label}</p>
                        <span style={{ fontSize: '0.625rem', fontWeight: 700, color: resultColor, textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>{resultLabel}</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: C.subtle }}>{h.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3" style={{ marginBottom: cs.voc.companies ? '20px' : 0 }}>
              {cs.voc.quotes.map((q, i) => (
                <div key={i} style={{ padding: '16px 18px', borderRadius: '12px', background: C.surface, border: `1px solid ${C.border}` }}>
                  <p style={{ fontSize: '0.875rem', color: C.text, fontStyle: 'italic', lineHeight: 1.6, marginBottom: '8px' }}>"{q.quote}"</p>
                  <p style={{ fontSize: '0.75rem', color: C.subtle }}>{q.role}</p>
                </div>
              ))}
            </div>

            {cs.voc.companies && (
              <div>
                <p style={{ fontSize: '0.6875rem', color: C.subtle, marginBottom: '8px' }}>Practitioners interviewed from:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cs.voc.companies.map(co => <span key={co} className="pill-tag" style={{ fontSize: '0.75rem' }}>{co}</span>)}
                </div>
              </div>
            )}
          </motion.section>
        )}

        {/* Approach */}
        <motion.section {...up(0.08)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num={num.approach} label="My Approach"/>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', marginBottom: '28px' }}>{cs.approach.heading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cs.approach.steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '18px' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 700, color: accent, background: `${accent}12`, border: `1px solid ${accent}22`, marginTop: '2px' }}>
                  {s.num}
                </div>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.text, marginBottom: '4px' }}>{s.title}</p>
                  <p style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.72 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What I Built */}
        <motion.section {...up(0.1)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num={num.built} label="What I Built"/>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', marginBottom: '20px' }}>{cs.built.heading}</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {cs.built.items.map((item, i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: '14px', background: C.surface, border: `1px solid ${C.border}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                  <ChevronRight size={13} style={{ color: accent, flexShrink: 0, marginTop: '2px' }}/>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.text }}>{item.label}</p>
                </div>
                <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.65, paddingLeft: '21px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Product Design Gallery */}
        {hasGallery && (
          <motion.section {...up(0.11)} style={{ marginBottom: '48px' }}>
            <SLabel accent={accent} num={num.gallery} label="Product Design"/>
            {cs.galleryIntro && (
              <p style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.72, marginBottom: '24px' }}>{cs.galleryIntro}</p>
            )}
            <div className="grid md:grid-cols-2 gap-3">
              {cs.gallery.map((g, i) => (
                <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', background: C.surface, border: `1px solid ${C.border}` }}>
                  <img src={g.src} alt={g.alt} loading="lazy" style={{ width: '100%', display: 'block', borderBottom: `1px solid ${C.border}` }}/>
                  <div style={{ padding: '12px 16px' }}>
                    <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: C.text, marginBottom: '2px' }}>{g.title}</p>
                    <p style={{ fontSize: '0.8125rem', color: C.subtle, lineHeight: 1.55 }}>{g.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Results */}
        <motion.section {...up(0.12)} style={{ marginBottom: '48px' }}>
          <SLabel accent={accent} num={num.results} label="Results"/>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', marginBottom: '20px' }}>{cs.results.heading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cs.results.items.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderRadius: '14px', background: C.surface, border: `1px solid ${C.border}` }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.6875rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '6px' }}>{r.label}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.9375rem', color: C.subtle, textDecoration: 'line-through' }}>{r.before}</span>
                    <span style={{ fontSize: '0.75rem', color: C.subtle }}>→</span>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: accent }}>{r.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Learnings */}
        <motion.section {...up(0.14)} style={{ marginBottom: '64px' }}>
          <SLabel accent={accent} num={num.learnings} label="What I Learned"/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cs.learnings.map((l, i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: '14px', background: C.surface, border: `1px solid ${C.border}` }}>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.text, marginBottom: '6px' }}>{l.title}</p>
                <p style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.72 }}>{l.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Bottom nav */}
        <motion.div {...up(0.16)}>
          <div style={{ height: '1px', background: 'rgba(20,18,38,0.10)', marginBottom: '28px' }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/" className="nav-link inline-flex items-center gap-2" style={{ fontSize: '0.9375rem' }}>
              <ArrowLeft size={14}/> All projects
            </Link>
            <div style={{ display: 'flex', gap: '8px' }}>
              {caseStudies.filter(c => c.slug !== slug).slice(0, 2).map(c => (
                <Link key={c.slug} to={`/case/${c.slug}`}
                  className="nav-link"
                  style={{ fontSize: '0.8125rem', fontWeight: 500, padding: '7px 16px', borderRadius: '980px', background: C.surface, border: `1px solid ${C.border}` }}>
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
      <div style={{ flex: 1, height: '1px', background: 'rgba(20,18,38,0.10)' }}/>
      <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
    </div>
  );
}
