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
  white:  '#ffffff',
  snow:   '#f5f5f7',
  ink:    '#1d1d1f',
  gray:   '#6e6e73',
  lgray:  '#86868b',
  border: 'rgba(0,0,0,0.08)',
  violet: '#7C3AED',
  gold:   '#C9974A',
};

/* ── Project data ── */
const projects = [
  {
    slug: 'jj-ai-invoice', index: '01', tag: 'MedTech · Enterprise AI',
    title: 'AI Invoice Pipeline & Cloud Migration',
    company: 'Johnson & Johnson', period: 'Oct 2025 – Present',
    heroValue: '$2.4M', heroLabel: 'in annual savings',
    hook: 'Turned a fragile SAP legacy system into a $2.4M-saving AI platform — in under a year.',
    summary: 'Led the full SAP → AWS cloud-native migration across 5 global regions and shipped an NLP/RAG invoice extraction pipeline with LLM hallucination guardrails and PII controls.',
    metrics: [{ value: '$2.4M', label: 'Annual savings' }, { value: '38%', label: 'Faster cycle time' }, { value: '400+', label: 'Analyst hrs freed/mo' }],
    tags: ['LLM', 'RAG', 'AWS', 'Microservices', 'PII Compliance'],
    headerBg: 'linear-gradient(135deg,#f3e8ff,#ede9fe)',
    accent: '#7C3AED',
  },
  {
    slug: 'deloitte-compliance', index: '02', tag: 'GovTech · Compliance SaaS',
    title: 'State Education Compliance Platform',
    company: 'Deloitte Consulting', period: 'May – Oct 2025',
    heroValue: '50+', heroLabel: 'critical defects blocked',
    hook: 'Caught 50+ critical defects before launch. Cut bug fix time by 60%. Without adding a single headcount.',
    summary: 'Owned the compliance platform for 15+ state agencies. Designed the UAT lifecycle from scratch and applied AI-assisted clustering to eliminate 34% of sprint waste.',
    metrics: [{ value: '41%', label: 'Data accuracy lift' }, { value: '50+', label: 'Defects pre-launch' }, { value: '1.6d', label: 'MTTR (was 4 days)' }],
    tags: ['UAT', 'Agile', 'AI Clustering', 'Multi-agency'],
    headerBg: 'linear-gradient(135deg,#dcfce7,#bbf7d0)',
    accent: '#16a34a',
  },
  {
    slug: 'cygnus-aml', index: '03', tag: 'FinTech · Regulatory Reporting',
    title: 'AML & ISO 20022 Compliance Engine',
    company: 'Cygnus Compliance / Bank of China', period: 'Jan – Mar 2025',
    heroValue: '$50M+', heroLabel: 'transaction volume at launch',
    hook: 'Zero to compliance-ready MVP in 8 weeks. $50M+ in transaction volume on day one.',
    summary: 'Led end-to-end discovery and delivery of a B2B regulatory reporting engine for ISO 20022 and PCI-DSS. Three rounds of usability testing drove accuracy from 85% to 97%.',
    metrics: [{ value: '$50M+', label: 'Volume at launch' }, { value: '97%', label: 'Submission accuracy' }, { value: '60%', label: 'Fewer escalations' }],
    tags: ['ISO 20022', 'PCI-DSS', 'AML/KYC', 'Python ML'],
    headerBg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)',
    accent: '#2563eb',
  },
  {
    slug: 'digital-i-mobile', index: '04', tag: 'D2C · Consumer Mobile',
    title: 'Mobile App — 0 to 75K Users',
    company: 'Digital iTechnology', period: 'Mar – Dec 2024',
    heroValue: '75K', heroLabel: 'installs from zero',
    hook: 'Took an app from zero to 75K installs while lifting retention 15 points in under a year.',
    summary: 'Owned the full product lifecycle. Ran 5 A/B tests to fix a broken onboarding funnel and built a behavioral cohort framework that identified and targeted high-churn user segments.',
    metrics: [{ value: '75K', label: 'App installs' }, { value: '33%', label: 'Onboarding lift' }, { value: '61%', label: 'Retention (↑ from 46%)' }],
    tags: ['A/B Testing', 'Cohort Analysis', 'GTM', 'Retention'],
    headerBg: 'linear-gradient(135deg,#fce7f3,#fbcfe8)',
    accent: '#db2777',
  },
  {
    slug: null, index: '05', tag: 'AI · Productivity',
    title: 'Locus',
    company: 'Side Project · AI PM Bootcamp', period: '2026',
    heroValue: '0 bytes', heroLabel: 'stored — session-only AI',
    hook: 'Privacy-first document intelligence for professionals who can\'t upload client data to ChatGPT.',
    summary: 'Building for CPAs, auditors, and consultants. Documents live in RAM only and are destroyed on session end — zero cloud exposure. Cross-document analysis via Claude + ChromaDB with a patent-pending zero-storage architecture.',
    metrics: [{ value: '0 bytes', label: 'Data stored' }, { value: '$16/mo', label: 'Target price' }, { value: '87%', label: 'Gross margin' }],
    tags: ['Claude API', 'FastAPI', 'Python', 'LangChain', 'Privacy'],
    headerBg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)',
    accent: '#059669',
  },
  {
    slug: null, index: '06', tag: 'AI · Home & Lifestyle',
    title: 'HeyFurnish',
    company: 'Founder · DwellIQ', period: '2025 – Present',
    heroValue: '90s', heroLabel: 'quiz to full design package',
    hook: 'AI interior design platform generating 3 complete room packages with 3D walkthroughs and cross-room budget optimization.',
    summary: 'Patent-pending allocation engine coordinates furniture (38%), lighting (18%), décor (24%), and storage (20%) budgets across entire homes simultaneously. Users get Budget, Balanced, and Premium packages with curated shopping lists from IKEA, West Elm, and Wayfair.',
    metrics: [{ value: '90s', label: 'To first design' }, { value: '$1.2K', label: 'Avg savings vs. designer' }, { value: '35+', label: 'Curated products' }],
    tags: ['AI Design', 'Affiliate Commerce', 'React', '0-to-1', 'PropTech'],
    headerBg: 'linear-gradient(135deg,#fff7ed,#fed7aa)',
    accent: '#ea580c',
    url: 'https://www.heyfurnish.com',
  },
  {
    slug: null, index: '07', tag: 'AI · Productivity',
    title: 'AI Job Co-pilot',
    company: 'Side Project', period: '2025',
    heroValue: '80%+', heroLabel: 'application time saved',
    hook: '0-to-1 AI tool built and shipped in one evening — automated the entire job application workflow.',
    summary: 'Automated ATS keyword gap analysis, resume bullet tailoring, and cover letter generation using LLMs. Dogfooded on real applications to Merative, Headspace, and Intuit — reduced per-application time by 80%+.',
    metrics: [{ value: '80%+', label: 'Time saved per app' }, { value: '1 eve', label: 'Built & deployed' }, { value: '3', label: 'Real apps tested' }],
    tags: ['LLMs', 'Python', 'NLP', 'ATS Optimization', 'GenAI'],
    headerBg: 'linear-gradient(135deg,#fdf4ff,#ede9fe)',
    accent: '#9333ea',
  },
];

/* ── Experience & education ── */
const timeline = [
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Section header ── */
const SectionHeader = ({ label, title }) => (
  <div style={{ marginBottom: '56px' }}>
    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: C.violet, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{label}</p>
    <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: C.ink, letterSpacing: '-0.022em', lineHeight: 1.1 }}>{title}</h2>
  </div>
);

/* ─────────────────────────────────────────── */

export default function App() {
  return (
    <div style={{ background: C.white, color: C.ink }}>

      {/* ── NAV ── */}
      <header className="nav-blur" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 24px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '1.0625rem', fontWeight: 600, color: C.ink, letterSpacing: '-0.01em' }}>
            Shubham<span style={{ color: C.violet }}>.</span>
          </span>
          <nav className="hidden md:flex items-center gap-7">
            {[['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills']].map(([l, h]) => (
              <a key={l} href={h} className="nav-link" style={{ fontSize: '0.875rem' }}>{l}</a>
            ))}
          </nav>
          <a href="mailto:shrivastavashubham213@gmail.com"
            className="transition-opacity hover:opacity-85"
            style={{ fontSize: '0.875rem', fontWeight: 500, color: C.white, background: C.violet, padding: '7px 18px', borderRadius: '980px', boxShadow: '0 2px 10px rgba(124,58,237,0.28)' }}>
            Hire Me
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '108px 24px 0', textAlign: 'center' }}>

          {/* Available badge */}
          <motion.div {...up(0)} className="inline-flex items-center gap-2 mb-10"
            style={{ background: C.snow, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '980px', padding: '6px 16px' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full ping-slow" style={{ background: '#34c759', opacity: 0.6 }}/>
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#34c759' }}/>
            </span>
            <span style={{ fontSize: '0.6875rem', color: C.gray, letterSpacing: '0.07em', fontWeight: 500, textTransform: 'uppercase' }}>
              Open to Senior PM · Staff PM roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...up(0.03)} style={{ fontSize: 'clamp(3.5rem,9vw,6.5rem)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em', color: C.ink, marginBottom: '16px' }}>
            Shubham Shrivastava
          </motion.h1>

          {/* Title */}
          <motion.p {...up(0.06)} style={{ fontSize: 'clamp(1.35rem,2.8vw,2rem)', fontWeight: 400, color: C.gray, letterSpacing: '-0.01em', marginBottom: '22px' }}>
            AI & Data Product Manager
          </motion.p>

          {/* Bio */}
          <motion.p {...up(0.09)} style={{ fontSize: '1.125rem', color: C.gray, maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            6+ years building AI products at J&J, Deloitte, and Bank of China.
            I turn high-stakes ambiguity into products that ship and scale.
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.11)} className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <a href="#work"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-85"
              style={{ background: C.violet, color: C.white, padding: '13px 30px', borderRadius: '980px', fontSize: '1.0625rem', fontWeight: 500, letterSpacing: '-0.01em', boxShadow: '0 4px 18px rgba(124,58,237,0.3)' }}>
              See My Work <ArrowRight size={16}/>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
              style={{ background: C.white, color: C.ink, border: '1px solid rgba(0,0,0,0.12)', padding: '13px 30px', borderRadius: '980px', fontSize: '1.0625rem', fontWeight: 500 }}>
              <Download size={16}/> Resume
            </a>
            <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-75"
              style={{ background: C.white, color: C.gray, border: '1px solid rgba(0,0,0,0.12)', padding: '13px 22px', borderRadius: '980px', fontSize: '1.0625rem' }}>
              <LinkedIn/>
            </a>
          </motion.div>

          {/* Location */}
          <motion.p {...up(0.12)} className="flex items-center justify-center gap-1.5 mb-14"
            style={{ fontSize: '0.875rem', color: C.lgray }}>
            <MapPin size={12} style={{ color: C.violet }}/> Jersey City, NJ · Open to relocation · Remote-first OK
          </motion.p>

          {/* Profile photo */}
          <motion.div {...up(0.14)} style={{ display: 'inline-block' }}>
            <div style={{ width: '260px', height: '310px', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 48px 96px rgba(0,0,0,0.14), 0 12px 32px rgba(0,0,0,0.08)', margin: '0 auto' }}>
              <img src="/profile.png" alt="Shubham Shrivastava" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}/>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div {...up(0.16)}
          style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 72px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(32px,7vw,96px)', borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '56px' }}>
          {[
            { value: '$2.4M', label: 'Annual savings' },
            { value: '75K',   label: 'App installs' },
            { value: '50+',   label: 'Defects blocked' },
            { value: '6+',    label: 'Years experience' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 700, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: '0.9375rem', color: C.gray, marginTop: '8px' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ background: C.snow, padding: '100px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...up(0)}>
            <SectionHeader label="Selected Work" title="Products I've built"/>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {projects.map((p, i) => (
              <motion.article key={i} {...up(i * 0.07)}
                style={{ background: C.white, borderRadius: '22px', overflow: 'hidden', boxShadow: '0 2px 24px rgba(0,0,0,0.07)', transition: 'box-shadow 0.22s ease, transform 0.22s ease' }}
                whileHover={{ y: -3, boxShadow: '0 20px 56px rgba(0,0,0,0.12)' }}>

                {/* Pastel header with hero metric */}
                <div style={{ background: p.headerBg, padding: '36px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: p.accent, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${p.accent}18`, padding: '3px 10px', borderRadius: '980px', display: 'inline-block', marginBottom: '8px' }}>
                      {p.tag}
                    </span>
                    <p style={{ fontSize: '0.8125rem', color: C.lgray }}>{p.index} of {projects.length}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 'clamp(2.5rem,5.5vw,3.8rem)', fontWeight: 800, color: C.ink, letterSpacing: '-0.035em', lineHeight: 1 }}>{p.heroValue}</p>
                    <p style={{ fontSize: '0.8125rem', color: C.gray, marginTop: '2px' }}>{p.heroLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px 40px 36px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.015em', marginBottom: '4px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: C.gray, marginBottom: '16px' }}>{p.company} · {p.period}</p>

                  <p style={{ fontSize: '0.9375rem', color: p.accent, fontStyle: 'italic', fontWeight: 500, marginBottom: '12px' }}>{p.hook}</p>
                  <p style={{ fontSize: '0.9375rem', color: C.gray, lineHeight: 1.7, marginBottom: '24px' }}>{p.summary}</p>

                  {/* Metrics */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', paddingTop: '18px', borderTop: '1px solid rgba(0,0,0,0.07)', marginBottom: '20px' }}>
                    {p.metrics.map((m, j) => (
                      <div key={j}>
                        <span style={{ fontSize: '1.375rem', fontWeight: 700, color: C.ink, letterSpacing: '-0.02em' }}>{m.value}</span>
                        <span style={{ fontSize: '0.8125rem', color: C.gray, marginLeft: '6px' }}>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags + CTA */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                    {p.tags.map(t => <span key={t} className="pill-tag">{t}</span>)}
                    {p.slug && (
                      <Link to={`/case/${p.slug}`}
                        className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                        style={{ marginLeft: 'auto', background: C.ink, color: C.white, fontSize: '0.8125rem', fontWeight: 500, padding: '7px 18px', borderRadius: '980px' }}>
                        Case study <ArrowRight size={12}/>
                      </Link>
                    )}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                        style={{ marginLeft: p.slug ? '8px' : 'auto', background: C.ink, color: C.white, fontSize: '0.8125rem', fontWeight: 500, padding: '7px 18px', borderRadius: '980px' }}>
                        Live site <ArrowRight size={12}/>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ background: C.white, padding: '100px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...up(0)}>
            <SectionHeader label="Experience & Education" title="Career timeline"/>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {timeline.map((item, i) => {
              const isWork = item.type === 'work';
              const accent = isWork ? C.violet : C.gold;
              return (
                <motion.div key={i} {...up(i * 0.045)}
                  style={{ background: C.snow, borderRadius: '18px', padding: '24px 28px', borderLeft: `3px solid ${accent}`, transition: 'box-shadow 0.2s ease' }}
                  whileHover={{ boxShadow: '0 8px 36px rgba(0,0,0,0.09)' }}>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${accent}12`, padding: '2px 10px', borderRadius: '980px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {isWork ? <Briefcase size={9}/> : <GraduationCap size={9}/>} {isWork ? 'Work' : 'Education'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: C.lgray }}>{item.period}</span>
                    <span style={{ fontSize: '0.75rem', color: C.lgray }}>· {item.domain}</span>
                  </div>

                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: C.ink, letterSpacing: '-0.01em', marginBottom: '2px' }}>{item.role}</h3>
                  <p style={{ fontSize: '0.875rem', color: accent, fontWeight: 500, marginBottom: item.bullets.length > 0 ? '16px' : 0 }}>
                    {item.org} · {item.location}
                  </p>

                  {item.bullets.length > 0 && (
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.07)', marginBottom: item.keyResult ? '16px' : 0 }}>
                      {item.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9375rem', color: C.gray, lineHeight: 1.65 }}>
                          <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.keyResult && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '14px', borderTop: '1px dashed rgba(0,0,0,0.08)' }}>
                      <span style={{ fontSize: '0.6875rem', color: C.lgray, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Key Result</span>
                      <span style={{ fontSize: '1.5rem', fontWeight: 700, color: accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{item.keyResult.value}</span>
                      <span style={{ fontSize: '0.875rem', color: C.gray }}>{item.keyResult.label}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ background: C.snow, padding: '100px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...up(0)}>
            <SectionHeader label="Skills & Tools" title="What I work with"/>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {skills.map((g, i) => (
              <motion.div key={i} {...up(i * 0.06)}
                style={{ background: C.white, borderRadius: '18px', padding: '24px 28px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: C.violet, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{g.group}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {g.items.map(item => <span key={item} className="pill-tag">{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...up(0.2)}
            style={{ background: C.white, borderRadius: '18px', padding: '24px 28px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: C.gold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={12}/> Certifications
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {certs.map(c => (
                <span key={c} style={{ fontSize: '0.8125rem', color: C.gray, padding: '5px 14px', borderRadius: '980px', background: 'rgba(201,151,74,0.07)', border: '1px solid rgba(201,151,74,0.18)' }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: C.white, padding: '120px 24px', textAlign: 'center' }}>
        <motion.div {...up(0)} style={{ maxWidth: '520px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: C.lgray, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Let's talk</p>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: C.ink, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '16px' }}>
            Looking for a PM<br/>who <span style={{ color: C.violet }}>delivers</span>?
          </h2>
          <p style={{ fontSize: '1.0625rem', color: C.gray, lineHeight: 1.7, marginBottom: '40px' }}>
            Open to Senior PM and Staff PM roles in AI, FinTech, or Enterprise SaaS.<br/>Let's see if there's a fit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:shrivastavashubham213@gmail.com"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ background: C.ink, color: C.white, padding: '14px 32px', borderRadius: '980px', fontSize: '1rem', fontWeight: 500 }}>
              <Mail size={15}/> shrivastavashubham213@gmail.com
            </a>
            <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ background: 'transparent', color: C.ink, border: '1px solid rgba(0,0,0,0.12)', padding: '14px 32px', borderRadius: '980px', fontSize: '1rem', fontWeight: 500 }}>
              <LinkedIn/> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.ink, padding: '36px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ fontSize: '1.0625rem', fontWeight: 600, color: C.white, letterSpacing: '-0.01em' }}>
            Shubham<span style={{ color: C.violet }}>.</span>
          </span>
          <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            AI & Data Product Manager · Jersey City, NJ · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}
