import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Briefcase, GraduationCap, Award, ArrowRight, Download, MapPin, Star } from 'lucide-react';

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ── Color tokens ── */
const C = {
  bg:      '#000000',
  surface: '#111111',
  s2:      'rgba(17,17,17,0.9)',
  border:  'rgba(255,255,255,0.09)',
  bHover:  'rgba(255,255,255,0.2)',
  text:    '#FFFFFF',
  muted:   '#E4E4E7',
  subtle:  '#A1A1AA',
  blue:    '#818CF8',
  indigo:  '#6366F1',
  emerald: '#34D399',
  gold:    '#FCD34D',
  purple:  '#C084FC',
  green:   '#4ADE80',
};

const GRAD = 'linear-gradient(135deg, #C084FC 0%, #818CF8 100%)';
const G = { background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
const GE = { background: 'linear-gradient(135deg, #34D399 0%, #818CF8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

/* ── Rotating hero achievements ── */
const ACHIEVEMENTS = [
  { value: '$2.4M',  label: 'annual savings',        context: 'J&J AI invoice pipeline' },
  { value: '97%',   label: 'submission accuracy',    context: 'Bank of China AML engine' },
  { value: '75K',   label: 'installs from zero',     context: '9-month consumer mobile GTM' },
];

/* ── Project data ── */
const projects = [
  {
    id: 'heyfurnish',
    slug: null, index: '01', tag: 'AI · Home & Lifestyle',
    title: 'HeyFurnish',
    company: 'Founder & Product Lead', period: '2025 – Present',
    heroValue: '90s', heroLabel: 'to full design package',
    hook: 'Most furniture-buying happens room-by-room — leaving homes visually unbalanced and budgets misallocated. I designed and shipped HeyFurnish to fix this: an AI platform that simultaneously optimizes budget across furniture, lighting, décor, and storage, generating three tiered design packages in 90 seconds. Web is live; mobile app is in AR/VR beta for real-scale room visualization before final launch.',
    scope: 'Sole founder · Full-stack product ownership from zero: strategy, AI architecture, affiliate monetization, and mobile roadmap · Patent-pending budget allocation engine · 35+ vendor integrations.',
    aiNote: 'Cross-room constraint-satisfaction engine — simultaneously allocates budget across all room elements rather than styling pieces in isolation.',
    metrics: [
      { value: '90s',   label: 'To first design package' },
      { value: '$1.2K', label: 'Avg savings vs. designer' },
      { value: 'AR/VR', label: 'Mobile pre-launch beta' },
    ],
    tags: ['AI Design', 'React Native', 'AR/VR', 'Affiliate Commerce', '0-to-1'],
    url: 'https://www.heyfurnish.com',
    featured: true,
    badges: [{ label: '● Website Live', color: '#34D399' }, { label: '◉ Mobile Beta · AR/VR', color: '#C084FC' }],
    filters: ['0→1', 'AI-heavy', 'Consumer'],
  },
  {
    id: 'jj-ai-invoice',
    slug: 'jj-ai-invoice', index: '02', tag: 'MedTech · Enterprise AI',
    title: 'AI Invoice Pipeline & Cloud Migration',
    company: 'Johnson & Johnson', period: 'Oct 2025 – Present',
    heroValue: '$2.4M', heroLabel: 'annual savings',
    hook: "J&J's invoice processing ran on decade-old SAP infrastructure — siloed across 5 global regions, manual at scale, and accumulating compliance risk. I led end-to-end platform migration to AWS and shipped an NLP/RAG extraction pipeline with LLM hallucination guardrails and PII controls, replacing manual review for a significant share of invoice volume.",
    scope: '5 global regions · Engineering, Finance, Legal & Compliance cross-functional · MedTech regulatory context · Phased migration with zero compliance incidents.',
    aiNote: 'LLM hallucination guardrails keep all outputs audit-safe; PII controls meet MedTech regulatory standards before any data persists.',
    metrics: [
      { value: '$2.4M', label: 'Annual savings' },
      { value: '400+',  label: 'Analyst hrs freed/mo' },
      { value: '40%',   label: 'Fewer compliance errors' },
    ],
    tags: ['LLM', 'RAG', 'AWS', 'Microservices', 'PII Compliance'],
    filters: ['Enterprise AI', 'AI-heavy'],
  },
  {
    id: 'deloitte-compliance',
    slug: 'deloitte-compliance', index: '03', tag: 'GovTech · Compliance SaaS',
    title: 'State Education Compliance Platform',
    company: 'Deloitte Consulting', period: 'May – Oct 2025',
    heroValue: '50+', heroLabel: 'defects caught pre-launch',
    hook: 'The platform had no formal UAT process — defects surfaced late, sprint planning was reactive, and engineering triage averaged 4 days per issue. I designed the UAT lifecycle from scratch across 6 modules, applied AI text clustering to 1,200+ backlog items to eliminate low-signal work, and rebuilt the QA-to-engineering handoff — with zero added headcount.',
    scope: '15+ state education agencies · 6 product modules · AI text clustering (unsupervised NLP) on 1,200+ backlog items · Multi-agency regulated environment.',
    aiNote: 'Unsupervised NLP text clustering applied to 1,200+ backlog items — surfaced high-signal work before sprint planning without tooling investment.',
    metrics: [
      { value: '50+',  label: 'Defects caught pre-launch' },
      { value: '1.6d', label: 'MTTR (was 4 days)' },
      { value: '34%',  label: 'Sprint waste eliminated' },
    ],
    tags: ['UAT', 'Agile', 'AI Clustering', 'Multi-agency'],
    filters: ['Enterprise AI', 'AI-heavy'],
  },
  {
    id: 'cygnus-aml',
    slug: 'cygnus-aml', index: '04', tag: 'FinTech · Regulatory Reporting',
    title: 'AML & ISO 20022 Compliance Engine',
    company: 'Cygnus Compliance / Bank of China', period: 'Jan – Mar 2025',
    heroValue: '$50M+', heroLabel: 'transaction volume at launch',
    hook: 'No existing product, a hard regulatory deadline, and a bank client needing ISO 20022 + AML compliance from zero. I led the full lifecycle — discovery, three rounds of usability testing with 20+ compliance officers, prioritized roadmap, and shipped to production — taking submission accuracy from 85% to 97% in 8 weeks from kickoff.',
    scope: '0→1 in 8 weeks · PCI-DSS + AML/KYC compliance · 20+ compliance officer stakeholders · B2B regulated financial services.',
    metrics: [
      { value: '$50M+', label: 'Transaction volume at launch' },
      { value: '97%',   label: 'Submission accuracy (was 85%)' },
      { value: '60%',   label: 'Fewer escalations post-launch' },
    ],
    tags: ['ISO 20022', 'PCI-DSS', 'AML/KYC', 'Python ML'],
    filters: ['Enterprise AI', '0→1'],
  },
  {
    id: 'digital-i-mobile',
    slug: 'digital-i-mobile', index: '05', tag: 'D2C · Consumer Mobile',
    title: 'Mobile App — 0 to 75K Users',
    company: 'Digital iTechnology', period: 'Mar – Dec 2024',
    heroValue: '75K', heroLabel: 'installs from zero',
    hook: 'The app launched with a broken onboarding funnel — killing conversions before users reached core value — and no experimentation framework in place. I owned the full product lifecycle: designed and ran 5 sequential A/B tests to fix the funnel, built a behavioral cohort framework to identify and re-engage high-churn segments, and led the GTM plan that hit 40% DAU/MAU within Q1.',
    scope: 'Full lifecycle ownership · D2C consumer mobile · Amplitude + Mixpanel for behavioral cohort analysis and experiment measurement.',
    metrics: [
      { value: '75K', label: 'Installs from zero' },
      { value: '61%', label: 'Retention (↑ from 46%)' },
      { value: '33%', label: 'Onboarding lift from A/B tests' },
    ],
    tags: ['A/B Testing', 'Cohort Analysis', 'GTM', 'Retention'],
    filters: ['Consumer'],
  },
  {
    id: 'locus',
    slug: null, index: '06', tag: 'AI · Privacy · Productivity',
    title: 'Locus',
    company: 'Founder · AI PM Bootcamp', period: '2026',
    heroValue: '0 bytes', heroLabel: 'stored — session-only',
    hook: "CPAs, auditors, and consultants can't use mainstream AI tools for client work — data privacy rules prevent uploading sensitive documents to cloud services. Locus solves this with zero-storage document intelligence: documents live in RAM only and are destroyed at session end. Core insight validated through 10+ VoC interviews; building toward MVP targeting 87% gross margin.",
    scope: 'Solo founder · AI PM Bootcamp Cohort 9 · VoC interviews complete · MVP in active development.',
    aiNote: 'Zero-storage RAG pipeline — ChromaDB in-memory + Claude API. No documents persist after the session ends.',
    metrics: [
      { value: '0 bytes', label: 'Data persisted post-session' },
      { value: '4M+',    label: 'Addressable professionals' },
      { value: '87%',    label: 'Gross margin target' },
    ],
    tags: ['Claude API', 'FastAPI', 'LangChain', 'ChromaDB', 'Privacy'],
    filters: ['0→1', 'AI-heavy', 'Consumer'],
  },
  {
    id: 'ai-job-copilot',
    slug: null, index: '07', tag: 'AI · Productivity',
    title: 'AI Job Co-pilot',
    company: 'Side Project', period: '2025',
    heroValue: '80%+', heroLabel: 'time saved per application',
    hook: 'Tailoring a strong job application takes 45–90 minutes of repetitive, high-effort work that degrades in quality across multiple submissions. I built an end-to-end tool in one evening: ATS keyword gap analysis, resume bullet tailoring, and cover letter generation. Dogfooded on real applications to Merative, Headspace, and Intuit.',
    scope: 'Solo build · Shipped and validated on real applications in one evening.',
    metrics: [
      { value: '80%+', label: 'Time saved per application' },
      { value: '3',    label: 'Workflow steps automated' },
      { value: '1 eve', label: 'Build-to-validation cycle' },
    ],
    tags: ['LLMs', 'Python', 'NLP', 'ATS Optimization', 'GenAI'],
    filters: ['0→1', 'AI-heavy', 'Consumer'],
  },
];

/* ── Work section structure ── */
const HIGHLIGHTS = [
  { label: '$2.4M annual savings — J&J AI Invoice Pipeline & Cloud Migration', anchor: '#jj-ai-invoice' },
  { label: '$50M+ transaction volume on day one — AML Compliance Engine (Bank of China)', anchor: '#cygnus-aml' },
  { label: '0 → 75K installs in 9 months — Consumer Mobile App (Digital iTechnology)', anchor: '#digital-i-mobile' },
];

const GROUPS = [
  {
    label: '0→1 · Founder',
    desc: 'Products I designed, built, and shipped from scratch — full ownership from discovery to launch.',
    ids: ['heyfurnish'],
  },
  {
    label: 'Enterprise AI & Compliance Platforms',
    desc: 'AI-native products inside regulated, multi-stakeholder environments with real business and compliance stakes.',
    ids: ['jj-ai-invoice', 'deloitte-compliance', 'cygnus-aml'],
  },
  {
    label: 'Consumer Growth · Side Projects & Experiments',
    desc: 'Growth-stage products, rapid experiments, and founder bets built on tight timelines.',
    ids: ['digital-i-mobile', 'locus', 'ai-job-copilot'],
  },
];

const FILTER_TABS = ['All', 'Enterprise AI', '0→1', 'Consumer', 'AI-heavy'];

/* ── Experience & education ── */
const timeline = [
  { type: 'work', period: '2025 – Present', role: 'Founder & Product Lead',
    org: 'HeyFurnish', location: 'Remote', domain: 'AI · Home & Lifestyle',
    keyResult: { value: 'Live + Beta', label: 'Web launched · Mobile in AR/VR beta' },
    bullets: [
      'Defined ICP (homeowners undertaking full-room renovations, $800–$2K budgets) through 15+ discovery interviews before writing a line of code',
      'Architected patent-pending cross-room budget allocation engine; chose affiliate-first monetization (free → $19/mo Pro → $49/mo Studio) targeting sub-30-day payback',
      'Running iterative AR/VR feedback loops with mobile beta users ahead of final release — real-scale room visualization as the core differentiator vs. web-only competitors',
    ]},
  { type: 'work', period: 'Oct 2025 – Present', role: 'Product Manager II, Enterprise AI & Platform',
    org: 'Johnson & Johnson', location: 'Jersey City, NJ', domain: 'MedTech · Enterprise AI',
    keyResult: { value: '$2.4M', label: 'Annual savings delivered' },
    bullets: [
      'Partnered with Engineering, Finance, Legal & Compliance across 5 global regions to align discovery, phasing, and acceptance criteria for a decade-long platform replacement',
      'Led AI product decisions: evaluated multiple extraction approaches, selected NLP/RAG with LLM hallucination guardrails after red-teaming outputs against MedTech audit standards',
      'Owned roadmap sequencing and executive stakeholder communication through a regulated cloud migration — zero compliance incidents across all deployment phases',
    ]},
  { type: 'work', period: 'May – Oct 2025', role: 'Product Manager, Government Compliance',
    org: 'Deloitte Consulting', location: 'Jersey City, NJ', domain: 'GovTech · Compliance SaaS',
    keyResult: { value: '50+', label: 'Critical defects caught pre-launch' },
    bullets: [
      'Coordinated QA, Engineering, and State Compliance Officers across 15+ agencies and 6 modules — designed UAT processes, severity taxonomy, and triage SLAs from zero',
      'Applied AI text clustering to 1,200+ backlog items in a single session — separated high-signal from noise before sprint planning without tooling spend',
      'Rebuilt the QA-to-Engineering handoff: defined runbooks and escalation paths that cut decision latency without adding headcount',
    ]},
  { type: 'work', period: 'Jan – Mar 2025', role: 'Product Manager, AML & Regulatory Compliance',
    org: 'Cygnus Compliance (Bank of China)', location: 'New York, NY', domain: 'FinTech · Regulatory Reporting',
    keyResult: { value: '$50M+', label: 'Transaction volume on day one' },
    bullets: [
      'Led discovery and roadmap for a greenfield AML product — 3 rounds of usability testing with 20+ compliance officers shaped every prioritization decision from day one',
      'Translated PCI-DSS, AML/KYC, and ISO 20022 requirements into a phased delivery plan that reached production in 8 weeks from kickoff',
      'Used post-launch VoC data to identify the top escalation drivers and eliminate them within 2 sprint cycles — ticket volume fell 60%',
    ]},
  { type: 'work', period: 'Mar – Dec 2024', role: 'Product Manager, Consumer Mobile App',
    org: 'Digital iTechnology', location: 'Austin, TX', domain: 'D2C · Consumer Mobile',
    keyResult: { value: '75K', label: 'Installs from zero in 9 months' },
    bullets: [
      'Designed and ran 5 sequential A/B tests targeting onboarding funnel failure points identified via Amplitude cohort analysis — systematically eliminated each drop-off',
      'Built a behavioral segmentation framework (activation, high-churn, re-engagement cohorts) enabling targeted in-app and push campaigns at scale via Mixpanel',
      'Led GTM strategy and channel mix decisions — defined launch sequencing and KPIs that drove 40% DAU/MAU in Q1 post-launch',
    ]},
  { type: 'work', period: 'Jun – Sep 2023', role: 'Associate PM, Digital Investment Platform',
    org: 'Openlogix (K2 Partnering Solutions)', location: 'Bloomfield Hills, MI', domain: 'FinTech · WealthTech',
    keyResult: { value: '$2.5M', label: 'AUM secured at pilot launch' },
    bullets: [
      'Applied ICE scoring across 50K+ SQL records to rationalize roadmap prioritization and reduce decision delays by 35%',
      'Delivered a compliance-ready investment platform MVP — coordinated Engineering, Compliance, and client stakeholders in parallel to hit a hard go-live date',
    ]},
  { type: 'edu', period: 'Jan 2022 – Dec 2023', role: 'M.S. Information Technology Management',
    org: 'Oakland University', location: 'Michigan, USA', domain: 'Graduate Studies', bullets: [] },
  { type: 'work', period: 'Jan 2018 – Nov 2020', role: 'Business Analyst, FinTech & Retail Banking',
    org: 'Worldsoft Technologies', location: 'Bhopal, India', domain: 'FinTech · Retail Banking',
    keyResult: { value: '31%', label: 'Account activation lift across 30K+ users' },
    bullets: [
      'Designed API integration strategy with banking partners — defined data contracts and error handling that drove account activation at scale across 30K+ users',
      'Built SQL dashboards tracking 12+ compliance KPIs, giving operations real-time regulatory health visibility and cutting support tickets by 45%',
    ]},
  { type: 'edu', period: 'Aug 2013 – May 2017', role: 'B.E. Computer Science',
    org: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya', location: 'Bhopal, India', domain: 'Undergraduate Studies', bullets: [] },
];

const CORE_STRENGTHS = [
  'LLMs & RAG systems',
  'Product experimentation',
  'Analytics & data-driven roadmapping',
  '0→1 product development',
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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Hover helpers (inline event handlers) ── */
const hoverLift = {
  onMouseEnter: e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,132,252,0.45)'; },
  onMouseLeave: e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; },
};
const hoverGhost = {
  onMouseEnter: e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-1px)'; },
  onMouseLeave: e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; },
};

/* ── Section header ── */
const SH = ({ eyebrow, title }) => (
  <div style={{ marginBottom: '36px' }}>
    <p style={{ fontSize: '0.625rem', fontWeight: 600, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>{eyebrow}</p>
    <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', fontWeight: 800, color: C.text, letterSpacing: '-0.025em', lineHeight: 1.1 }}>{title}</h2>
  </div>
);

/* ─────────────────────────────────────────── */

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [achIdx, setAchIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAchIdx(i => (i + 1) % ACHIEVEMENTS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const ach = ACHIEVEMENTS[achIdx];

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
            style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', background: GRAD, padding: '8px 20px', borderRadius: '980px', boxShadow: '0 4px 20px rgba(192,132,252,0.35)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(192,132,252,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(192,132,252,0.35)'; }}>
            Hire Me
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '88px 28px 0' }}>

          {/* Two-column layout: text left, photo right */}
          {/* flex-col-reverse on mobile puts photo on top */}
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-16">

            {/* ── LEFT: all text content ── */}
            <div className="flex-1">

              {/* Status badge */}
              <motion.div {...up(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px', background: 'rgba(192,132,252,0.08)', border: '1px solid rgba(192,132,252,0.22)', borderRadius: '980px', padding: '6px 14px' }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full ping-slow" style={{ background: C.green, opacity: 0.6 }}/>
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: C.green }}/>
                </span>
                <span style={{ fontSize: '0.6875rem', color: C.muted, letterSpacing: '0.08em', fontWeight: 500, textTransform: 'uppercase' }}>
                  Open to Senior PM · Staff PM · NYC or Remote
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1 {...up(0.04)} style={{ fontSize: 'clamp(2.25rem,5vw,3.75rem)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.032em', color: C.text, marginBottom: '10px' }}>
                Shubham<br/>Shrivastava
              </motion.h1>

              {/* Title */}
              <motion.p {...up(0.07)} style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '16px' }}>
                <span style={G}>AI Product Leader</span>
                <span style={{ color: C.subtle }}> · Enterprise & Consumer</span>
              </motion.p>

              {/* Rotating achievement ticker */}
              <motion.div {...up(0.09)} style={{ marginBottom: '20px', height: '36px', display: 'flex', alignItems: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={achIdx}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '980px', padding: '5px 12px' }}>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 800, ...GE }}>{ach.value}</span>
                    <span style={{ fontSize: '0.75rem', color: C.muted }}>{ach.label}</span>
                    <span style={{ width: '1px', height: '10px', background: C.border }}/>
                    <span style={{ fontSize: '0.6875rem', color: C.subtle }}>{ach.context}</span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Bio */}
              <motion.p {...up(0.1)} style={{ fontSize: '0.9375rem', color: C.muted, maxWidth: '480px', marginBottom: '18px', lineHeight: 1.75 }}>
                I ship AI-native products in regulated domains — and build 0→1 bets that find product-market fit. From $2.4M savings pipelines at J&J to founding HeyFurnish from scratch, I lead with discovery, move fast with data, and own outcomes end-to-end.
              </motion.p>

              {/* Where I'm best leveraged */}
              <motion.div {...up(0.115)} style={{ marginBottom: '28px', paddingLeft: '12px', borderLeft: `2px solid rgba(192,132,252,0.3)` }}>
                <p style={{ fontSize: '0.625rem', color: C.subtle, fontWeight: 600, marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Where I'm best leveraged</p>
                <p style={{ fontSize: '0.8125rem', color: C.muted, lineHeight: 1.6 }}>
                  <span style={{ color: C.blue }}>FinTech · MedTech · GovTech</span>
                  <span style={{ color: C.subtle }}> &nbsp;·&nbsp; </span>
                  <span style={{ color: C.purple }}>0→1 consumer products</span>
                  <span style={{ color: C.subtle }}> &nbsp;·&nbsp; </span>
                  <span style={{ color: C.emerald }}>Regulated enterprise systems</span>
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div {...up(0.12)} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <a href="#work"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '10px 22px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(192,132,252,0.32)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,132,252,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(192,132,252,0.32)'; }}>
                  See My Work <ArrowRight size={15}/>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: C.muted, border: `1px solid ${C.border}`, padding: '10px 22px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s, transform 0.15s' }}
                  {...hoverGhost}>
                  <Download size={15}/> Resume
                </a>
                <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: C.muted, border: `1px solid ${C.border}`, padding: '10px 16px', borderRadius: '980px', textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.purple; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}>
                  <LinkedIn/>
                </a>
              </motion.div>

              {/* Location */}
              <motion.p {...up(0.13)} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: C.subtle }}>
                <MapPin size={12} style={{ color: C.purple }}/> Jersey City, NJ · Open to relocation · Remote-first OK
              </motion.p>
            </div>

            {/* ── RIGHT: profile photo ── */}
            <motion.div {...up(0.05)} className="flex justify-center md:justify-end flex-shrink-0">
              <div style={{ position: 'relative' }}>
                {/* Glow behind photo */}
                <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}/>
                <div style={{ position: 'relative', zIndex: 1, width: '260px', height: '320px', borderRadius: '28px', overflow: 'hidden', boxShadow: `0 0 0 1px rgba(192,132,252,0.2), 0 24px 64px rgba(0,0,0,0.7)` }}>
                  <img src="/profile.png" alt="Shubham Shrivastava" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}/>
                </div>
              </div>
            </motion.div>

          </div>{/* end two-col */}

          {/* Stats strip — full width below both columns */}
          <motion.div {...up(0.2)} style={{ margin: '52px 0 0', padding: '28px 0 52px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', borderTop: `1px solid ${C.border}` }}>
            {[
              { value: '$2.4M', label: 'Annual savings', sub: 'J&J AI pipeline' },
              { value: '75K',   label: 'App installs',   sub: 'from zero in 9 mo' },
              { value: '97%',   label: 'Accuracy',       sub: 'AML compliance' },
              { value: '6+',    label: 'Years',          sub: 'PM experience' },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1, ...GE }}>{s.value}</p>
                <p style={{ fontSize: '0.8125rem', color: C.muted, fontWeight: 500, marginTop: '4px' }}>{s.label}</p>
                <p style={{ fontSize: '0.6875rem', color: C.subtle, marginTop: '2px' }}>{s.sub}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ background: C.bg, padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Selected Work" title="Products I've built & shipped"/>
          </motion.div>

          {/* Selected highlights TL;DR */}
          <motion.div {...up(0.06)} style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.blue}`, borderRadius: '14px', padding: '20px 24px', marginBottom: '28px' }}>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Selected highlights</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {HIGHLIGHTS.map((h, i) => (
                <a key={i} href={h.anchor}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: C.muted, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.text}
                  onMouseLeave={e => e.currentTarget.style.color = C.muted}>
                  <span style={{ color: C.emerald, fontWeight: 700, flexShrink: 0 }}>→</span>
                  {h.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Filter bar */}
          <motion.div {...up(0.08)} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {FILTER_TABS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  fontSize: '0.75rem', fontWeight: 600, padding: '6px 16px', borderRadius: '980px',
                  border: `1px solid ${activeFilter === f ? 'transparent' : C.border}`,
                  cursor: 'pointer', transition: 'all 0.15s',
                  background: activeFilter === f ? GRAD : 'transparent',
                  color: activeFilter === f ? '#fff' : C.muted,
                }}>
                {f}
              </button>
            ))}
          </motion.div>

          {/* Project groups */}
          {GROUPS.map((group, gi) => {
            const groupProjects = projects.filter(p => group.ids.includes(p.id));
            const visible = activeFilter === 'All'
              ? groupProjects
              : groupProjects.filter(p => p.filters.includes(activeFilter));
            if (visible.length === 0) return null;
            return (
              <div key={gi} style={{ marginBottom: '40px' }}>
                {/* Group header */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>{group.label}</span>
                    <div style={{ flex: 1, height: '1px', background: C.border }}/>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: C.subtle }}>{group.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '10px' }}>
                  {visible.map((p, i) => {
                    const isLastOdd = !p.featured && p === visible[visible.length - 1] && visible.length % 2 !== 0;
                    const spanFull = p.featured || isLastOdd;
                    return (
                      <motion.article key={p.id} id={p.id} {...up(i * 0.05)}
                        className="glass-card"
                        style={{
                          padding: p.featured ? '24px 28px' : '20px 22px',
                          display: 'flex', flexDirection: 'column',
                          gridColumn: spanFull ? 'span 2 / span 2' : undefined,
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                          ...(p.featured ? { border: `1px solid rgba(192,132,252,0.28)`, boxShadow: '0 0 32px rgba(192,132,252,0.07)' } : {}),
                        }}
                        whileHover={{ y: -3, transition: { duration: 0.18 } }}>

                        {/* Top row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.625rem', color: C.subtle, fontVariantNumeric: 'tabular-nums' }}>{p.index}</span>
                            <span style={{ width: '1px', height: '9px', background: C.border }}/>
                            <span className="pill-tag" style={{ fontSize: '0.625rem', padding: '2px 8px' }}>{p.tag}</span>
                            {p.badges && p.badges.map(b => (
                              <span key={b.label} style={{ fontSize: '0.625rem', fontWeight: 600, color: b.color, background: `${b.color}1A`, border: `1px solid ${b.color}33`, padding: '2px 8px', borderRadius: '980px' }}>{b.label}</span>
                            ))}
                          </div>
                          <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>
                            <p style={{ fontSize: p.featured ? '1.625rem' : '1.375rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, ...GE }}>{p.heroValue}</p>
                            <p style={{ fontSize: '0.5625rem', color: C.subtle, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.heroLabel}</p>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: p.featured ? '1.125rem' : '1rem', fontWeight: 700, color: C.text, letterSpacing: '-0.015em', lineHeight: 1.3, marginBottom: '2px' }}>{p.title}</h3>
                        <p style={{ fontSize: '0.6875rem', color: C.subtle, marginBottom: '10px' }}>{p.company} · {p.period}</p>

                        {/* Hook */}
                        <p style={{ fontSize: p.featured ? '0.875rem' : '0.8125rem', color: C.muted, lineHeight: 1.65, marginBottom: '10px', flex: 1 }}>{p.hook}</p>

                        {/* Scope line */}
                        {p.scope && (
                          <p style={{ fontSize: '0.6875rem', color: C.subtle, lineHeight: 1.5, marginBottom: p.aiNote ? '6px' : '14px', paddingLeft: '10px', borderLeft: `2px solid rgba(192,132,252,0.25)`, fontStyle: 'italic' }}>{p.scope}</p>
                        )}

                        {/* AI note */}
                        {p.aiNote && (
                          <p style={{ fontSize: '0.6875rem', color: '#34D399', lineHeight: 1.5, marginBottom: '14px', paddingLeft: '10px', borderLeft: `2px solid rgba(192,132,252,0.45)` }}>⚡ {p.aiNote}</p>
                        )}

                        {/* Metrics */}
                        <div style={{ display: 'flex', gap: p.featured ? '24px' : '16px', marginBottom: '14px', flexWrap: 'wrap' }}>
                          {p.metrics.map((m, j) => (
                            <div key={j}>
                              <p style={{ fontSize: p.featured ? '1.0625rem' : '0.9375rem', fontWeight: 700, color: C.emerald, letterSpacing: '-0.018em', lineHeight: 1 }}>{m.value}</p>
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
                              style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', background: GRAD, color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '980px', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(192,132,252,0.45)'; }}
                              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                              Case study <ArrowRight size={11}/>
                            </Link>
                          )}
                          {p.url && (
                            <a href={p.url} target="_blank" rel="noopener noreferrer"
                              style={{ marginLeft: p.slug ? '0' : 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', background: GRAD, color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '980px', textDecoration: 'none', boxShadow: p.featured ? '0 4px 16px rgba(192,132,252,0.3)' : 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(192,132,252,0.5)'; }}
                              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = p.featured ? '0 4px 16px rgba(192,132,252,0.3)' : 'none'; }}>
                              Live site <ArrowRight size={11}/>
                            </a>
                          )}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ background: C.bg, padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Experience & Education" title="Career timeline"/>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {timeline.map((item, i) => {
              const isWork = item.type === 'work';
              const accent = isWork ? C.blue : C.gold;
              return (
                <motion.div key={i} {...up(i * 0.04)}
                  style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `2px solid ${accent}`, borderRadius: '14px', padding: '18px 22px', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  whileHover={{ borderColor: C.bHover, boxShadow: '0 6px 32px rgba(0,0,0,0.28)' }}>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 600, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${accent}14`, padding: '2px 8px', borderRadius: '980px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
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
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '12px', borderTop: `1px solid ${C.border}`, marginBottom: item.keyResult ? '12px' : 0 }}>
                      {item.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: C.muted, lineHeight: 1.6 }}>
                          <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.keyResult && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '10px', borderTop: `1px dashed ${C.border}` }}>
                      <span style={{ fontSize: '0.625rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Key Result</span>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.022em', lineHeight: 1, ...GE }}>{item.keyResult.value}</span>
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
      <section id="skills" style={{ background: C.bg, padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Skills & Tools" title="What I work with"/>
          </motion.div>

          {/* Core strengths */}
          <motion.div {...up(0.04)} style={{ background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.18)', borderRadius: '14px', padding: '18px 24px', marginBottom: '16px' }}>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Star size={10}/> Core Strengths
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CORE_STRENGTHS.map(s => (
                <span key={s} style={{ fontSize: '0.875rem', color: C.blue, padding: '4px 14px', borderRadius: '980px', background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.25)', fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 mb-3">
            {skills.map((g, i) => (
              <motion.div key={i} {...up(i * 0.06)} className="glass-card" style={{ padding: '20px 24px' }}>
                <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>{g.group}</p>
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
      <section style={{ background: C.bg, padding: '72px 24px', textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
        <motion.div {...up(0)} style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.625rem', fontWeight: 600, color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>Let's talk</p>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.25rem)', fontWeight: 800, letterSpacing: '-0.028em', lineHeight: 1.1, marginBottom: '14px' }}>
            Looking for an AI PM<br/>who can <span style={G}>own it end-to-end</span>?
          </h2>
          <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.7, marginBottom: '10px' }}>
            I'm best suited for <strong style={{ color: C.text }}>Senior PM and Staff PM roles</strong> where AI/ML is core to the product — in FinTech, MedTech, GovTech, or Enterprise SaaS.
          </p>
          <p style={{ fontSize: '0.9375rem', color: C.subtle, lineHeight: 1.65, marginBottom: '32px' }}>
            I operate at both <span style={{ color: C.blue }}>0→1</span> (greenfield, discovery-first, fast validation) and <span style={{ color: C.emerald }}>1→10</span> (experimentation, cross-functional execution, data-driven scaling). Let's see if there's a fit.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <a href="mailto:shrivastavashubham213@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '12px 26px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(192,132,252,0.32)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(192,132,252,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(192,132,252,0.32)'; }}>
              <Mail size={14}/> shrivastavashubham213@gmail.com
            </a>
            <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.06)', color: C.muted, border: `1px solid ${C.border}`, padding: '12px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s, transform 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.blue; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}>
              <LinkedIn/> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'rgba(255,255,255,0.02)', borderTop: `1px solid ${C.border}`, padding: '32px 28px' }}>
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
