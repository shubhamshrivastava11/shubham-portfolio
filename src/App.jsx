import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Briefcase, GraduationCap, Award, ArrowRight, Download, MapPin } from 'lucide-react';

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ── Colour tokens ── */
const C = {
  bg:      '#09090b',
  surface: 'rgba(255,255,255,0.03)',
  s2:      'rgba(255,255,255,0.05)',
  border:  'rgba(255,255,255,0.08)',
  bHover:  'rgba(255,255,255,0.15)',
  text:    '#fafafa',
  muted:   '#a1a1aa',
  subtle:  '#71717a',
  purple:  '#a855f7',
  indigo:  '#6366f1',
  gold:    '#f59e0b',
  green:   '#22c55e',
  violet:  '#8b5cf6',
};

const GRAD = 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)';
const G = { background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

/* ── Project data ── */
const projects = [
  {
    slug: null, index: '01', tag: 'AI · Home & Lifestyle',
    title: 'HeyFurnish',
    company: 'Founder & Product Lead · HeyFurnish', period: '2025 – Present',
    heroValue: '90s', heroLabel: 'quiz to full design package',
    hook: 'End-to-end AI interior design platform — live on web, mobile app in beta with AR/VR room visualization. Generates 3 tiered design packages (Budget · Balanced · Premium) with cross-room budget optimization and curated product discovery.',
    metrics: [{ value: '90s', label: 'To first design' }, { value: '$1.2K', label: 'Savings vs. designer' }, { value: '35+', label: 'Curated products' }, { value: 'AR/VR', label: 'Mobile beta' }],
    tags: ['AI Design', 'React Native', 'AR/VR', 'Affiliate Commerce', '0-to-1'],
    url: 'https://www.heyfurnish.com',
    featured: true,
    badges: [{ label: '● Website Live', color: '#22c55e' }, { label: '◉ Mobile Beta · AR/VR', color: '#a855f7' }],
  },
  {
    slug: 'jj-ai-invoice', index: '02', tag: 'MedTech · Enterprise AI',
    title: 'AI Invoice Pipeline & Cloud Migration',
    company: 'Johnson & Johnson', period: 'Oct 2025 – Present',
    heroValue: '$2.4M', heroLabel: 'annual savings',
    hook: 'Turned a fragile SAP legacy system into a $2.4M-saving AI platform — in under a year.',
    metrics: [{ value: '$2.4M', label: 'Annual savings' }, { value: '38%', label: 'Faster cycle time' }, { value: '400+', label: 'Analyst hrs freed/mo' }],
    tags: ['LLM', 'RAG', 'AWS', 'Microservices', 'PII Compliance'],
  },
  {
    slug: 'deloitte-compliance', index: '03', tag: 'GovTech · Compliance SaaS',
    title: 'State Education Compliance Platform',
    company: 'Deloitte Consulting', period: 'May – Oct 2025',
    heroValue: '50+', heroLabel: 'critical defects blocked',
    hook: 'Caught 50+ critical defects before launch. Cut bug fix time by 60%. Without adding a single headcount.',
    metrics: [{ value: '41%', label: 'Data accuracy lift' }, { value: '50+', label: 'Defects pre-launch' }, { value: '1.6d', label: 'MTTR (was 4 days)' }],
    tags: ['UAT', 'Agile', 'AI Clustering', 'Multi-agency'],
  },
  {
    slug: 'cygnus-aml', index: '04', tag: 'FinTech · Regulatory Reporting',
    title: 'AML & ISO 20022 Compliance Engine',
    company: 'Cygnus Compliance / Bank of China', period: 'Jan – Mar 2025',
    heroValue: '$50M+', heroLabel: 'transaction volume at launch',
    hook: 'Zero to compliance-ready MVP in 8 weeks. $50M+ in transaction volume on day one.',
    metrics: [{ value: '$50M+', label: 'Volume at launch' }, { value: '97%', label: 'Submission accuracy' }, { value: '60%', label: 'Fewer escalations' }],
    tags: ['ISO 20022', 'PCI-DSS', 'AML/KYC', 'Python ML'],
  },
  {
    slug: 'digital-i-mobile', index: '05', tag: 'D2C · Consumer Mobile',
    title: 'Mobile App — 0 to 75K Users',
    company: 'Digital iTechnology', period: 'Mar – Dec 2024',
    heroValue: '75K', heroLabel: 'installs from zero',
    hook: 'Took an app from zero to 75K installs while lifting retention 15 points in under a year.',
    metrics: [{ value: '75K', label: 'App installs' }, { value: '33%', label: 'Onboarding lift' }, { value: '61%', label: 'Retention (↑ from 46%)' }],
    tags: ['A/B Testing', 'Cohort Analysis', 'GTM', 'Retention'],
  },
  {
    slug: null, index: '06', tag: 'AI · Productivity',
    title: 'Locus',
    company: 'Side Project · AI PM Bootcamp', period: '2026',
    heroValue: '0 bytes', heroLabel: 'stored — session-only',
    hook: 'Privacy-first document intelligence for professionals who can\'t upload client data to ChatGPT.',
    metrics: [{ value: '0 bytes', label: 'Data stored' }, { value: '$16/mo', label: 'Target price' }, { value: '87%', label: 'Gross margin' }],
    tags: ['Claude API', 'FastAPI', 'Python', 'LangChain', 'Privacy'],
  },
  {
    slug: null, index: '07', tag: 'AI · Productivity',
    title: 'AI Job Co-pilot',
    company: 'Side Project', period: '2025',
    heroValue: '80%+', heroLabel: 'application time saved',
    hook: '0-to-1 AI tool built and shipped in one evening — automated the entire job application workflow.',
    metrics: [{ value: '80%+', label: 'Time saved per app' }, { value: '1 eve', label: 'Built & deployed' }, { value: '3', label: 'Real apps tested' }],
    tags: ['LLMs', 'Python', 'NLP', 'ATS Optimization', 'GenAI'],
  },
];

/* ── Experience & education ── */
const timeline = [
  { type: 'work', period: '2025 – Present', role: 'Founder & Product Lead',
    org: 'HeyFurnish', location: 'Remote', domain: 'AI · Home & Lifestyle',
    keyResult: { value: 'Live + Beta', label: 'Web launched · Mobile in AR/VR beta' },
    bullets: [
      'Built and shipped a full-stack AI interior design platform from zero — patent-pending cross-room budget allocation engine coordinates furniture, lighting, décor, and storage across entire homes simultaneously',
      'Currently testing AR/VR capabilities on the HeyFurnish mobile application for immersive, real-scale room visualization before final beta release',
      'Architected affiliate-first monetization model (free tier + Pro $19/mo + Studio $49/mo); integrated 35+ curated products across IKEA, West Elm, Wayfair, and boutique vendors',
    ]},
  { type: 'work', period: 'Oct 2025 – Present', role: 'Product Manager II, Enterprise AI & Platform',
    org: 'Johnson & Johnson', location: 'Jersey City, NJ', domain: 'MedTech · Enterprise AI',
    keyResult: { value: '$2.4M', label: 'Annual savings delivered' },
    bullets: [
      'Led SAP → AWS cloud-native migration across 5 global regions, eliminating a decade-old operational bottleneck',
      'Shipped NLP/RAG invoice extraction pipeline with LLM hallucination guardrails — freed 400+ analyst hrs/mo',
      'Deployed AI anomaly detection in ERP workflows, cutting downstream compliance errors by 40%',
    ]},
  { type: 'work', period: 'May – Oct 2025', role: 'Product Manager, Government Compliance',
    org: 'Deloitte Consulting', location: 'Jersey City, NJ', domain: 'GovTech · Compliance SaaS',
    keyResult: { value: '50+', label: 'Critical defects caught pre-launch' },
    bullets: [
      'Architected UAT lifecycle from scratch across 6 modules — platform now serves 15+ state education agencies',
      'Applied AI text clustering to 1,200+ backlog items, eliminating 34% sprint waste in a single session',
      'Rebuilt QA→Engineering triage: MTTR dropped from 4 days to 1.6 days with zero added headcount',
    ]},
  { type: 'work', period: 'Jan – Mar 2025', role: 'Product Manager, AML & Regulatory Compliance',
    org: 'Cygnus Compliance (Bank of China)', location: 'New York, NY', domain: 'FinTech · Regulatory Reporting',
    keyResult: { value: '$50M+', label: 'Transaction volume on day one' },
    bullets: [
      'Delivered compliance-ready ISO 20022 + AML MVP in 8 weeks, from zero discovery to production',
      'Ran 3 rounds of usability testing with 20+ compliance officers — accuracy rose from 85% to 97%',
      'VoC-driven prioritisation cut ticket escalations by 60% within 2 sprint cycles post-launch',
    ]},
  { type: 'work', period: 'Mar – Dec 2024', role: 'Product Manager, Consumer Mobile App',
    org: 'Digital iTechnology', location: 'Austin, TX', domain: 'D2C · Consumer Mobile',
    keyResult: { value: '75K', label: 'Installs from zero in 9 months' },
    bullets: [
      'Scaled app from 0 to 75K installs; hit 40% DAU/MAU ratio in Q1 post-launch',
      '5 sequential A/B tests lifted onboarding completion rate by 33%',
      'Behavioral cohort analysis drove 6-month retention from 46% to 61%',
    ]},
  { type: 'work', period: 'Jun – Sep 2023', role: 'Associate PM, Digital Investment Platform',
    org: 'Openlogix (K2 Partnering Solutions)', location: 'Bloomfield Hills, MI', domain: 'FinTech · WealthTech',
    keyResult: { value: '$2.5M', label: 'AUM at pilot launch' },
    bullets: [
      'Delivered compliance-ready investment platform MVP; $2.5M AUM secured at pilot launch',
      'ICE scoring across 50K+ SQL records reduced roadmap decision delays by 35%',
    ]},
  { type: 'edu', period: 'Jan 2022 – Dec 2023', role: 'M.S. Information Technology Management',
    org: 'Oakland University', location: 'Michigan, USA', domain: 'Graduate Studies', bullets: [] },
  { type: 'work', period: 'Jan 2018 – Nov 2020', role: 'Business Analyst, FinTech & Retail Banking',
    org: 'Worldsoft Technologies', location: 'Bhopal, India', domain: 'FinTech · Retail Banking',
    keyResult: { value: '31%', label: 'Account activation lift across 30K+ users' },
    bullets: [
      'Drove 31% account activation lift across 30K+ users via API integrations with banking partners',
      'Cut support tickets by 45%; built SQL dashboards tracking 12+ compliance KPIs',
    ]},
  { type: 'edu', period: 'Aug 2013 – May 2017', role: 'B.E. Computer Science',
    org: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya', location: 'Bhopal, India', domain: 'Undergraduate Studies', bullets: [] },
];

const skills = [
  { group: 'AI & ML',           items: ['LLMs', 'RAG', 'NLP', 'Prompt Engineering', 'Anomaly Detection', 'GenAI', 'ML Evaluation'] },
  { group: 'Product',           items: ['PRD Authoring', 'Roadmapping', 'OKRs', 'A/B Testing', 'Cohort Analysis', 'ICE/RICE', 'UAT', 'GTM Strategy', 'User Research'] },
  { group: 'Data & Analytics',  items: ['SQL', 'Python', 'Power BI', 'Tableau', 'Amplitude', 'Mixpanel', 'Data Governance'] },
  { group: 'Platforms & Tools', items: ['AWS', 'Azure DevOps', 'SAP', 'REST APIs', 'Jira', 'Figma', 'Productboard', 'Miro', 'Notion'] },
];

const certs = ['Certified Scrum Product Owner (CSPO)', 'Certified Scrum Master (CSM)', 'Advanced Google Analytics', 'Product Analytics Certification'];

/* ── Animation helper ── */
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-32px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Section header ── */
const SH = ({ eyebrow, title }) => (
  <div style={{ marginBottom: '32px' }}>
    <p style={{ fontSize: '0.625rem', fontWeight: 600, color: C.purple, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{eyebrow}</p>
    <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', fontWeight: 800, color: C.text, letterSpacing: '-0.025em', lineHeight: 1.1 }}>{title}</h2>
  </div>
);

/* ─────────────────────────────────────────── */

export default function App() {
  return (
    <div style={{ background: C.bg, color: C.text }}>

      {/* ── NAV ── */}
      <header className="nav-blur" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 28px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Shubham<span style={{ ...G, fontWeight: 800 }}>.</span>
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {[['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills']].map(([l, h]) => (
              <a key={l} href={h} className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 500 }}>{l}</a>
            ))}
          </nav>
          <a href="mailto:shrivastavashubham213@gmail.com"
            style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', background: GRAD, padding: '8px 20px', borderRadius: '980px', boxShadow: '0 4px 20px rgba(139,92,246,0.35)', textDecoration: 'none' }}>
            Hire Me
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: C.bg, paddingTop: '0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '92px 24px 0', textAlign: 'center' }}>

          {/* Available badge */}
          <motion.div {...up(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.22)', borderRadius: '980px', padding: '6px 16px' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full ping-slow" style={{ background: C.green, opacity: 0.6 }}/>
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: C.green }}/>
            </span>
            <span style={{ fontSize: '0.6875rem', color: C.muted, letterSpacing: '0.08em', fontWeight: 500, textTransform: 'uppercase' }}>
              Open to Senior PM · Staff PM roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...up(0.04)} style={{ fontSize: 'clamp(2.75rem,8vw,5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.032em', color: C.text, marginBottom: '8px' }}>
            Shubham Shrivastava
          </motion.h1>

          {/* Title with gradient */}
          <motion.p {...up(0.07)} style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 600, letterSpacing: '-0.015em', marginBottom: '18px' }}>
            <span style={G}>AI & Data</span>
            <span style={{ color: C.muted }}> · Product Manager</span>
          </motion.p>

          {/* Bio */}
          <motion.p {...up(0.1)} style={{ fontSize: '1rem', color: C.muted, maxWidth: '420px', margin: '0 auto 28px', lineHeight: 1.65 }}>
            6+ years building AI products at J&J, Deloitte, and Bank of China.
            I turn high-stakes ambiguity into products that ship and scale.
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.12)} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
            <a href="#work"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '11px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '-0.01em', boxShadow: '0 4px 20px rgba(139,92,246,0.32)', textDecoration: 'none' }}>
              See My Work <ArrowRight size={15}/>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: C.muted, border: '1px solid rgba(255,255,255,0.1)', padding: '11px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none' }}>
              <Download size={15}/> Resume
            </a>
            <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: C.muted, border: '1px solid rgba(255,255,255,0.1)', padding: '11px 18px', borderRadius: '980px', textDecoration: 'none' }}>
              <LinkedIn/>
            </a>
          </motion.div>

          {/* Location */}
          <motion.p {...up(0.13)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8125rem', color: C.subtle, marginBottom: '44px' }}>
            <MapPin size={12} style={{ color: C.purple }}/> Jersey City, NJ · Open to relocation · Remote-first OK
          </motion.p>

          {/* Profile photo */}
          <motion.div {...up(0.15)} style={{ display: 'inline-block' }}>
            <div style={{ width: '240px', height: '286px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.6)', margin: '0 auto' }}>
              <img src="/profile.png" alt="Shubham Shrivastava" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}/>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div {...up(0.18)} style={{ maxWidth: '680px', margin: '40px auto 0', padding: '36px 28px 64px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(24px,6vw,64px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {[
            { value: '$2.4M', label: 'Annual savings' },
            { value: '75K',   label: 'App installs' },
            { value: '50+',   label: 'Defects blocked' },
            { value: '6+',    label: 'Years experience' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.032em', lineHeight: 1, ...G }}>{s.value}</p>
              <p style={{ fontSize: '0.8125rem', color: C.subtle, marginTop: '6px' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ background: C.bg, padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Selected Work" title="Products I've built"/>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '10px' }}>
            {projects.map((p, i) => {
              const isLastOdd = !p.featured && i === projects.length - 1 && projects.length % 2 !== 0;
              const spanFull = p.featured || isLastOdd;
              return (
                <motion.article key={i} {...up(i * 0.04)} className="glass-card"
                  style={{
                    padding: p.featured ? '24px 28px' : '20px 22px',
                    display: 'flex', flexDirection: 'column',
                    gridColumn: spanFull ? 'span 2 / span 2' : undefined,
                    ...(p.featured ? { border: '1px solid rgba(168,85,247,0.28)', boxShadow: '0 0 32px rgba(168,85,247,0.07)' } : {}),
                  }}>

                  {/* Top: index/tag + badges + metric */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.625rem', color: C.subtle, fontVariantNumeric: 'tabular-nums' }}>{p.index}</span>
                      <span style={{ width: '1px', height: '9px', background: 'rgba(255,255,255,0.12)' }}/>
                      <span className="pill-tag" style={{ fontSize: '0.625rem', padding: '2px 8px' }}>{p.tag}</span>
                      {p.badges && p.badges.map(b => (
                        <span key={b.label} style={{ fontSize: '0.625rem', fontWeight: 600, color: b.color, background: `${b.color}14`, border: `1px solid ${b.color}30`, padding: '2px 8px', borderRadius: '980px' }}>{b.label}</span>
                      ))}
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>
                      <p style={{ fontSize: p.featured ? '1.625rem' : '1.375rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, ...G }}>{p.heroValue}</p>
                      <p style={{ fontSize: '0.5625rem', color: C.subtle, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.heroLabel}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: p.featured ? '1.125rem' : '1rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', lineHeight: 1.3, marginBottom: '2px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.6875rem', color: C.subtle, marginBottom: '10px' }}>{p.company} · {p.period}</p>

                  {/* Hook */}
                  <p style={{ fontSize: p.featured ? '0.875rem' : '0.8125rem', color: C.muted, lineHeight: 1.6, marginBottom: '14px', flex: 1 }}>{p.hook}</p>

                  {/* Metrics row */}
                  <div style={{ display: 'flex', gap: p.featured ? '24px' : '16px', marginBottom: '14px', flexWrap: 'wrap' }}>
                    {p.metrics.map((m, j) => (
                      <div key={j}>
                        <p style={{ fontSize: p.featured ? '1.0625rem' : '0.9375rem', fontWeight: 700, color: C.text, letterSpacing: '-0.018em', lineHeight: 1 }}>{m.value}</p>
                        <p style={{ fontSize: '0.5625rem', color: C.subtle, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="divider" style={{ marginBottom: '12px' }}/>

                  {/* Tags + CTA */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
                    {p.tags.slice(0, p.featured ? 5 : 3).map(t => <span key={t} className="pill-tag" style={{ fontSize: '0.625rem', padding: '2px 8px' }}>{t}</span>)}
                    {p.slug && (
                      <Link to={`/case/${p.slug}`}
                        style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', background: GRAD, color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '980px', textDecoration: 'none' }}>
                        Case study <ArrowRight size={11}/>
                      </Link>
                    )}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        style={{ marginLeft: p.slug ? '0' : 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', background: GRAD, color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '980px', textDecoration: 'none', boxShadow: p.featured ? '0 4px 16px rgba(139,92,246,0.3)' : 'none' }}>
                        Live site <ArrowRight size={11}/>
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ background: C.bg, padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Experience & Education" title="Career timeline"/>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {timeline.map((item, i) => {
              const isWork = item.type === 'work';
              const accent = isWork ? C.purple : C.gold;
              return (
                <motion.div key={i} {...up(i * 0.04)}
                  style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `2px solid ${accent}`, borderRadius: '14px', padding: '18px 22px', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  whileHover={{ borderColor: C.bHover, boxShadow: '0 6px 32px rgba(0,0,0,0.28)' }}>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 600, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${accent}12`, padding: '2px 8px', borderRadius: '980px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      {isWork ? <Briefcase size={8}/> : <GraduationCap size={8}/>} {isWork ? 'Work' : 'Education'}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: C.subtle }}>{item.period}</span>
                    <span style={{ fontSize: '0.6875rem', color: C.subtle }}>· {item.domain}</span>
                  </div>

                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.text, letterSpacing: '-0.01em', marginBottom: '2px' }}>{item.role}</h3>
                  <p style={{ fontSize: '0.8125rem', color: accent, fontWeight: 500, marginBottom: item.bullets.length > 0 ? '12px' : 0 }}>
                    {item.org} · {item.location}
                  </p>

                  {item.bullets.length > 0 && (
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: item.keyResult ? '12px' : 0 }}>
                      {item.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: C.muted, lineHeight: 1.6 }}>
                          <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.keyResult && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: '1px dashed rgba(255,255,255,0.07)' }}>
                      <span style={{ fontSize: '0.625rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Key Result</span>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.022em', lineHeight: 1, ...G }}>{item.keyResult.value}</span>
                      <span style={{ fontSize: '0.8125rem', color: C.muted }}>{item.keyResult.label}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ background: C.bg, padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Skills & Tools" title="What I work with"/>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 mb-3">
            {skills.map((g, i) => (
              <motion.div key={i} {...up(i * 0.06)} className="glass-card" style={{ padding: '20px 24px' }}>
                <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.purple, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>{g.group}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {g.items.map(item => <span key={item} className="pill-tag">{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...up(0.22)} className="glass-card" style={{ padding: '20px 24px' }}>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.gold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Award size={10}/> Certifications
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {certs.map(c => (
                <span key={c} style={{ fontSize: '0.8125rem', color: C.muted, padding: '4px 12px', borderRadius: '980px', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.18)' }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: C.bg, padding: '72px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div {...up(0)} style={{ maxWidth: '520px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.625rem', fontWeight: 600, color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Let's talk</p>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.25rem)', fontWeight: 800, letterSpacing: '-0.028em', lineHeight: 1.1, marginBottom: '14px' }}>
            Looking for a PM<br/>who <span style={G}>delivers</span>?
          </h2>
          <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.65, marginBottom: '32px' }}>
            Open to Senior PM and Staff PM roles in AI, FinTech, or Enterprise SaaS.<br/>Let's see if there's a fit.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <a href="mailto:shrivastavashubham213@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '12px 26px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(139,92,246,0.32)', textDecoration: 'none' }}>
              <Mail size={14}/> shrivastavashubham213@gmail.com
            </a>
            <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: C.muted, border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none' }}>
              <LinkedIn/> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 28px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Shubham<span style={G}>.</span>
          </span>
          <p style={{ fontSize: '0.6875rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            AI & Data Product Manager · Jersey City, NJ · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}
