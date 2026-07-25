import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Briefcase, GraduationCap, Award, ArrowRight, Download, MapPin, Star, Pin, Quote } from 'lucide-react';

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHub = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

/* ── Brand logos ──
   Real logos (sourced from an open, CC0-licensed icon set) get an actual
   SVG. Brands that library excludes for trademark reasons (AWS, Azure,
   Salesforce, Tableau, Slack...) plus employers/universities/cert bodies
   with no safe logo source get a designed monogram badge instead, in the
   brand's real color where confidently known, or the site's own accent
   palette otherwise. */
const BRANDS = {
  python:         { logo: '/logos/python.svg', name: 'Python' },
  react:          { logo: '/logos/react.svg', name: 'React' },
  figma:          { logo: '/logos/figma.svg', name: 'Figma' },
  notion:         { logo: '/logos/notion.svg', name: 'Notion' },
  google:         { logo: '/logos/google.svg', name: 'Google' },
  googleanalytics:{ logo: '/logos/googleanalytics.svg', name: 'Google Analytics' },
  googlecloud:    { logo: '/logos/googlecloud.svg', name: 'Google Cloud' },
  databricks:     { logo: '/logos/databricks.svg', name: 'Databricks' },
  postman:        { logo: '/logos/postman.svg', name: 'Postman' },
  coursera:       { logo: '/logos/coursera.svg', name: 'Coursera' },
  apple:          { logo: '/logos/apple.svg', name: 'Apple' },
  youtube:        { logo: '/logos/youtube.svg', name: 'YouTube' },
  jira:           { logo: '/logos/jira.svg', name: 'Jira' },
  mixpanel:       { logo: '/logos/mixpanel.svg', name: 'Mixpanel' },
  sap:            { logo: '/logos/sap.svg', name: 'SAP' },
  miro:           { logo: '/logos/miro.svg', name: 'Miro' },
  claude:         { logo: '/logos/claude.svg', name: 'Claude' },
  anthropic:      { logo: '/logos/anthropic.svg', name: 'Anthropic' },
  fastapi:        { logo: '/logos/fastapi.svg', name: 'FastAPI' },
  langchain:      { logo: '/logos/langchain.svg', name: 'LangChain' },
  scrumalliance:  { logo: '/logos/scrumalliance.svg', name: 'Scrum Alliance' },
  trello:         { logo: '/logos/trello.svg', name: 'Trello' },
  zoom:           { logo: '/logos/zoom.svg', name: 'Zoom' },
  linkedin:       { component: 'LinkedIn', name: 'LinkedIn' },
  github:         { component: 'GitHub', name: 'GitHub' },

  // Fallback monograms — real known brand color
  aws:            { mono: 'AWS', color: '#FF9900', name: 'AWS' },
  azuredevops:    { mono: 'ADO', color: '#0078D4', name: 'Azure DevOps' },
  salesforce:     { mono: 'SF',  color: '#00A1E0', name: 'Salesforce' },
  tableau:        { mono: 'TB',  color: '#E97627', name: 'Tableau' },
  powerbi:        { mono: 'PBI', color: '#F2C811', name: 'Power BI' },
  slack:          { mono: 'SL',  color: '#4A154B', name: 'Slack' },
  jnj:            { mono: 'J&J', color: '#CC0000', name: 'Johnson & Johnson' },
  deloitte:       { mono: 'DC',  color: '#86BC25', name: 'Deloitte' },
  pmi:            { mono: 'PMI', color: '#6E217A', name: 'Project Management Institute' },
  mulesoft:       { mono: 'MU',  color: '#00A0DF', name: 'MuleSoft' },

  // Fallback monograms — site accent palette (no confidently-known brand color)
  amplitude:      { mono: 'AM',  color: '#7C3AED', name: 'Amplitude' },
  productboard:   { mono: 'PB',  color: '#4F46E5', name: 'Productboard' },
  deeplearningai: { mono: 'DL',  color: '#047857', name: 'DeepLearning.AI' },
  marquis:        { mono: 'WW',  color: '#B45309', name: "Marquis Who's Who" },
  pendo:          { mono: 'PD',  color: '#BE123C', name: 'Pendo.io' },
  workato:        { mono: 'WK',  color: '#0F766E', name: 'Workato' },
  wes:            { mono: 'WES', color: '#0369A1', name: 'World Education Services' },
  productschool:  { mono: 'PS',  color: '#7C3AED', name: 'Product School' },
  britishcouncil: { mono: 'BC',  color: '#4F46E5', name: 'British Council' },
  heyfurnish:     { mono: 'HF',  color: '#047857', name: 'HeyFurnish' },
  cygnus:         { mono: 'CY',  color: '#B45309', name: 'Cygnus Compliance' },
  digitalitech:   { mono: 'DI',  color: '#BE123C', name: 'Digital iTechnology' },
  openlogix:      { mono: 'OL',  color: '#0369A1', name: 'Openlogix' },
  worldsoft:      { mono: 'WT',  color: '#4F46E5', name: 'Worldsoft Technologies' },
  oakland:        { mono: 'OU',  color: '#7C3AED', name: 'Oakland University' },
  rgpv:           { mono: 'RG',  color: '#047857', name: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya' },
};

const Brand = ({ id, size = 16, radius }) => {
  const b = BRANDS[id];
  if (!b) return null;
  if (b.logo) {
    return <img src={b.logo} alt="" title={b.name} width={size} height={size} loading="lazy" style={{ display: 'inline-block', objectFit: 'contain', flexShrink: 0 }}/>;
  }
  if (b.component === 'LinkedIn') return <span title={b.name} style={{ display: 'inline-flex', color: C.subtle, flexShrink: 0 }}><LinkedIn/></span>;
  if (b.component === 'GitHub') return <span title={b.name} style={{ display: 'inline-flex', color: C.subtle, flexShrink: 0 }}><GitHub/></span>;
  /* Fallback monograms are deliberately mono-tone (not per-brand color) —
     a wall of differently-colored invented badges next to real, correctly
     colored logos read as noisy. Real logos carry the color; these recede. */
  return (
    <span title={b.name} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      width: size, height: size, borderRadius: radius ?? Math.round(size * 0.28),
      background: C.text, color: '#fff', fontSize: Math.max(7, size * 0.34), fontWeight: 800, letterSpacing: '-0.02em',
    }}>
      {b.mono}
    </span>
  );
};

/* ── Color tokens (light theme) ──
   Same violet→indigo identity as before, recalibrated to AA-contrast
   depths for a white page. Lime is reserved for the Locus spotlight only. */
const C = {
  bg:         '#FFFFFF',
  surface:    '#F7F6FB',
  surfaceAlt: '#F0EDFA',
  border:     'rgba(20,18,38,0.10)',
  bHover:     'rgba(20,18,38,0.22)',
  text:       '#14121F',
  muted:      '#45414F',
  subtle:     '#6B6775',
  blue:       '#4F46E5',
  indigo:     '#4F46E5',
  emerald:    '#047857',
  gold:       '#B45309',
  purple:     '#7C3AED',
  green:      '#16A34A',
  lime:       '#84CC16',
};

/* Translucent dark-on-light fills for "ghost" elements that used to be white-on-black */
const GHOST_BG = 'rgba(20,18,38,0.045)';
const GHOST_BG_HOVER = 'rgba(20,18,38,0.08)';

const GRAD = 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)';
const G = { background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
const GE = { background: 'linear-gradient(135deg, #047857 0%, #4F46E5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

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
    badges: [{ label: '● Website Live', color: '#047857' }, { label: '◉ Mobile Beta · AR/VR', color: '#7C3AED' }],
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
    slug: 'locus', index: '06', tag: 'AI · Team Productivity',
    title: 'Locus AI',
    company: 'Founder · AI PM Bootcamp', period: '2026',
    heroValue: '3', heroLabel: 'tools unified — Slack, Notion, Gmail',
    hook: "Teams make dozens of decisions a week scattered across Slack threads and Notion docs — then lose track of why a call was made or who owns the follow-up. Locus AI auto-captures decisions, action items, and blockers as your team communicates, and resurfaces them through a searchable Decision Log and a synthesized weekly Pulse digest every Monday. Core insight validated through 10+ VoC interviews; full product designed end-to-end in Figma, building toward MVP.",
    scope: 'Solo founder · AI PM Bootcamp Cohort 9 · VoC interviews complete · 40+ screens designed in Figma · MVP in active development.',
    aiNote: 'Context-aware NLP classifier tags every Slack/Notion/Gmail message as a Decision, Action Item, or Blocker — each one cited back to its source thread.',
    metrics: [
      { value: '$12–15', label: 'Per user / month' },
      { value: '4M+',    label: 'Addressable professionals' },
      { value: '87%',    label: 'Gross margin target' },
    ],
    tags: ['Claude API', 'FastAPI', 'Slack API', 'Notion API', 'RAG'],
    filters: ['0→1', 'AI-heavy', 'Consumer'],
    badges: [{ label: '◇ 40+ Screens in Figma', color: '#7C3AED' }],
    designPreview: {
      hero: '/locus/locus-landing-hero.png',
      heroAlt: 'Locus AI landing page — hero and product dashboard',
      thumbs: [
        { src: '/locus/locus-dashboard.png', alt: 'Dashboard screen' },
        { src: '/locus/locus-decision-log.png', alt: 'Decision Log screen' },
        { src: '/locus/locus-pulse.png', alt: 'Weekly Pulse digest screen' },
        { src: '/locus/locus-search-results.png', alt: 'Search results screen' },
      ],
    },
  },
  {
    id: 'ai-job-copilot',
    slug: null, index: '06', tag: 'AI · Productivity',
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
  { label: '40+ screens designed end-to-end in Figma — Locus AI, self-designed flagship product', anchor: '#locus' },
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
    ids: ['digital-i-mobile', 'ai-job-copilot'],
  },
];

const FILTER_TABS = ['All', 'Enterprise AI', '0→1', 'Consumer', 'AI-heavy'];

const LOCUS_SPOTLIGHT_STATS = [
  { value: '40+',    label: 'Screens designed' },
  { value: '10+',    label: 'VoC interviews' },
  { value: '87%',    label: 'Margin target' },
  { value: '$12–15', label: 'Per user / mo' },
];

/* ── Experience & education ── */
const timeline = [
  { type: 'work', period: '2025 – Present', role: 'Founder & Product Lead',
    org: 'HeyFurnish', location: 'Remote', domain: 'AI · Home & Lifestyle', accent: '#0F766E', brand: 'heyfurnish',
    keyResult: { value: 'Live + Beta', label: 'Web launched · Mobile in AR/VR beta' },
    bullets: [
      'Defined ICP (homeowners undertaking full-room renovations, $800–$2K budgets) through 15+ discovery interviews before writing a line of code',
      'Architected patent-pending cross-room budget allocation engine; chose affiliate-first monetization (free → $19/mo Pro → $49/mo Studio) targeting sub-30-day payback',
      'Running iterative AR/VR feedback loops with mobile beta users ahead of final release — real-scale room visualization as the core differentiator vs. web-only competitors',
    ]},
  { type: 'work', period: 'Oct 2025 – Present', role: 'Product Manager II, Enterprise AI & Platform',
    org: 'Johnson & Johnson', location: 'Jersey City, NJ', domain: 'MedTech · Enterprise AI', accent: '#7C3AED', brand: 'jnj',
    keyResult: { value: '$2.4M', label: 'Annual savings delivered' },
    bullets: [
      'Partnered with Engineering, Finance, Legal & Compliance across 5 global regions to align discovery, phasing, and acceptance criteria for a decade-long platform replacement',
      'Led AI product decisions: evaluated multiple extraction approaches, selected NLP/RAG with LLM hallucination guardrails after red-teaming outputs against MedTech audit standards',
      'Owned roadmap sequencing and executive stakeholder communication through a regulated cloud migration — zero compliance incidents across all deployment phases',
    ]},
  { type: 'work', period: 'May – Oct 2025', role: 'Product Manager, Government Compliance',
    org: 'Deloitte Consulting', location: 'Jersey City, NJ', domain: 'GovTech · Compliance SaaS', accent: '#047857', brand: 'deloitte',
    keyResult: { value: '50+', label: 'Critical defects caught pre-launch' },
    bullets: [
      'Coordinated QA, Engineering, and State Compliance Officers across 15+ agencies and 6 modules — designed UAT processes, severity taxonomy, and triage SLAs from zero',
      'Applied AI text clustering to 1,200+ backlog items in a single session — separated high-signal from noise before sprint planning without tooling spend',
      'Rebuilt the QA-to-Engineering handoff: defined runbooks and escalation paths that cut decision latency without adding headcount',
    ]},
  { type: 'work', period: 'Jan – Mar 2025', role: 'Product Manager, AML & Regulatory Compliance',
    org: 'Cygnus Compliance (Bank of China)', location: 'New York, NY', domain: 'FinTech · Regulatory Reporting', accent: '#B45309', brand: 'cygnus',
    keyResult: { value: '$50M+', label: 'Transaction volume on day one' },
    bullets: [
      'Led discovery and roadmap for a greenfield AML product — 3 rounds of usability testing with 20+ compliance officers shaped every prioritization decision from day one',
      'Translated PCI-DSS, AML/KYC, and ISO 20022 requirements into a phased delivery plan that reached production in 8 weeks from kickoff',
      'Used post-launch VoC data to identify the top escalation drivers and eliminate them within 2 sprint cycles — ticket volume fell 60%',
    ]},
  { type: 'work', period: 'Mar – Dec 2024', role: 'Product Manager, Consumer Mobile App',
    org: 'Digital iTechnology', location: 'Austin, TX', domain: 'D2C · Consumer Mobile', accent: '#BE123C', brand: 'digitalitech',
    keyResult: { value: '75K', label: 'Installs from zero in 9 months' },
    bullets: [
      'Designed and ran 5 sequential A/B tests targeting onboarding funnel failure points identified via Amplitude cohort analysis — systematically eliminated each drop-off',
      'Built a behavioral segmentation framework (activation, high-churn, re-engagement cohorts) enabling targeted in-app and push campaigns at scale via Mixpanel',
      'Led GTM strategy and channel mix decisions — defined launch sequencing and KPIs that drove 40% DAU/MAU in Q1 post-launch',
    ]},
  { type: 'work', period: 'Jun – Sep 2023', role: 'Associate PM, Digital Investment Platform',
    org: 'Openlogix (K2 Partnering Solutions)', location: 'Bloomfield Hills, MI', domain: 'FinTech · WealthTech', accent: '#0369A1', brand: 'openlogix',
    keyResult: { value: '$2.5M', label: 'AUM secured at pilot launch' },
    bullets: [
      'Applied ICE scoring across 50K+ SQL records to rationalize roadmap prioritization and reduce decision delays by 35%',
      'Delivered a compliance-ready investment platform MVP — coordinated Engineering, Compliance, and client stakeholders in parallel to hit a hard go-live date',
    ]},
  { type: 'edu', period: 'Jan 2022 – Dec 2023', role: 'M.S. Information Technology Management',
    org: 'Oakland University', location: 'Michigan, USA', domain: 'Graduate Studies', brand: 'oakland', bullets: [] },
  { type: 'work', period: 'Jan 2018 – Nov 2020', role: 'Business Analyst, FinTech & Retail Banking',
    org: 'Worldsoft Technologies', location: 'Bhopal, India', domain: 'FinTech · Retail Banking', accent: '#4F46E5', brand: 'worldsoft',
    keyResult: { value: '31%', label: 'Account activation lift across 30K+ users' },
    bullets: [
      'Designed API integration strategy with banking partners — defined data contracts and error handling that drove account activation at scale across 30K+ users',
      'Built SQL dashboards tracking 12+ compliance KPIs, giving operations real-time regulatory health visibility and cutting support tickets by 45%',
    ]},
  { type: 'edu', period: 'Aug 2013 – May 2017', role: 'B.E. Computer Science',
    org: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya', location: 'Bhopal, India', domain: 'Undergraduate Studies', brand: 'rgpv', bullets: [] },
];

const CORE_STRENGTHS = [
  'LLMs & RAG systems',
  'Product experimentation',
  'Analytics & data-driven roadmapping',
  '0→1 product development',
];

/* Only actual branded tools get a logo — generic methodology/skill labels (A/B Testing, RAG, OKRs...) stay plain text */
const SKILL_BRAND = {
  Python: 'python', 'Power BI': 'powerbi', Tableau: 'tableau', Amplitude: 'amplitude', Mixpanel: 'mixpanel',
  AWS: 'aws', 'Azure DevOps': 'azuredevops', SAP: 'sap', Jira: 'jira', Figma: 'figma', Productboard: 'productboard', Miro: 'miro', Notion: 'notion',
};

/* Same idea for project tech tags */
const TAG_BRAND = {
  AWS: 'aws', 'React Native': 'react', 'Python ML': 'python', Python: 'python',
  'Claude API': 'claude', FastAPI: 'fastapi', 'Slack API': 'slack', 'Notion API': 'notion',
};

const skills = [
  { group: 'AI & ML',           items: ['LLMs', 'RAG', 'NLP', 'Prompt Engineering', 'Anomaly Detection', 'GenAI', 'ML Evaluation'] },
  { group: 'Product',           items: ['PRD Authoring', 'Roadmapping', 'OKRs', 'A/B Testing', 'Cohort Analysis', 'ICE/RICE', 'UAT', 'GTM Strategy', 'User Research'] },
  { group: 'Data & Analytics',  items: ['SQL', 'Python', 'Power BI', 'Tableau', 'Amplitude', 'Mixpanel', 'Data Governance'] },
  { group: 'Platforms & Tools', items: ['AWS', 'Azure DevOps', 'SAP', 'REST APIs', 'Jira', 'Figma', 'Productboard', 'Miro', 'Notion'] },
];

/* Curated to what's relevant/impactful for a Senior AI PM search — dropped
   redundant tiers (5x Workato Automation Pro I–III), duplicate intro
   courses, and credentials unrelated to the pitch (IELTS, YouTube Music,
   Apple Search Ads, Dreamforce attendance, WES degree-equivalency). */
const CERTIFICATIONS = [
  {
    group: 'AI & GenAI',
    items: [
      { name: 'AI For Everyone', issuer: 'DeepLearning.AI', brand: 'deeplearningai', date: 'May 2026' },
      { name: 'Artificial Intelligence Micro-Certification (AIC)™', issuer: 'Product School', brand: 'productschool', date: 'Sep 2024' },
      { name: 'Responsible AI: Applying AI Principles with Google Cloud', issuer: 'Google', brand: 'google', date: 'Apr 2024' },
      { name: 'Gen AI & Business Operations', issuer: 'Workato', brand: 'workato', date: 'May 2024', expires: 'May 2026' },
    ],
  },
  {
    group: 'Product & Agile',
    items: [
      { name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', brand: 'scrumalliance', date: 'Mar 2025', expires: 'Mar 2027' },
      { name: 'Certified Scrum Product Owner (CSPO)', issuer: 'Scrum Alliance', brand: 'scrumalliance', date: 'Mar 2025', expires: 'Mar 2027' },
      { name: 'Product Discovery Certification', issuer: 'Pendo.io', brand: 'pendo', date: 'Mar 2025' },
      { name: 'Fundamentals of Agile Project Management', issuer: 'Project Management Institute', brand: 'pmi', date: 'Mar 2025' },
      { name: 'Technical Product Management', issuer: 'Project Management Institute', brand: 'pmi', date: 'Mar 2024' },
      { name: 'Product Analytics Micro-Certification (PAC)™', issuer: 'Product School', brand: 'productschool', date: 'Oct 2024' },
    ],
  },
  {
    group: 'Cloud & Data',
    items: [
      { name: 'Advanced Google Analytics', issuer: 'Google', brand: 'google', date: 'Apr 2024', expires: 'Apr 2027' },
      { name: 'Academy Accreditation — Databricks Lakehouse Fundamentals', issuer: 'Databricks', brand: 'databricks', date: 'May 2024' },
      { name: 'Google Cloud Foundations', issuer: 'LinkedIn', brand: 'linkedin', date: 'Apr 2024' },
    ],
  },
  {
    group: 'Recognition',
    items: [
      { name: 'Honored Listee', issuer: "Marquis Who's Who", brand: 'marquis', date: 'Mar 2025', expires: 'Dec 2029' },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "After collaborating closely with Shubham on a project, I must say, his exceptional skills and dedication truly stood out. Shubham consistently showed strong leadership qualities, skillfully coordinating tasks and ensuring we met our project milestones. His strategic approach and keen attention to detail were incredibly valuable to our team's success. Wishing him all the best in his future endeavors.",
    name: 'Deepa Palariya',
    title: 'Data Analyst, Magna International',
    relationship: 'Worked together on the same team',
    date: 'April 2024',
    accent: '#7C3AED',
  },
  {
    quote: 'I had the pleasure of working with Shubham at Openlogix, where he impressed me with his technical expertise, problem-solving skills, and dedication to delivering high-quality solutions. Shubham is a skilled software engineer with a strong understanding of backend development. He is a great team player who communicates effectively and is always eager to learn and take on new challenges.',
    name: 'Akash Ranglani',
    title: 'Mulesoft Integration Architect',
    relationship: 'Managed Shubham directly at Openlogix',
    date: 'April 2024',
    accent: '#0369A1',
  },
];

/* ── Animation helper ── */
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Hover helpers (inline event handlers) ── */
const hoverGhost = {
  onMouseEnter: e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = 'rgba(20,18,38,0.25)'; e.currentTarget.style.background = GHOST_BG_HOVER; e.currentTarget.style.transform = 'translateY(-1px)'; },
  onMouseLeave: e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = GHOST_BG; e.currentTarget.style.transform = ''; },
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
            {[['Locus AI', '#locus'], ['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['Testimonials', '#testimonials']].map(([l, h]) => (
              <a key={l} href={h} className="nav-link" style={{ fontSize: '0.875rem', fontWeight: 500 }}>{l}</a>
            ))}
          </nav>
          <a href="mailto:shrivastavashubham213@gmail.com"
            style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', background: GRAD, padding: '8px 20px', borderRadius: '980px', boxShadow: '0 4px 20px rgba(124,58,237,0.35)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(124,58,237,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.35)'; }}>
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
              <motion.div {...up(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)', borderRadius: '980px', padding: '6px 14px' }}>
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
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(4,120,87,0.08)', border: '1px solid rgba(4,120,87,0.2)', borderRadius: '980px', padding: '5px 12px' }}>
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
              <motion.div {...up(0.115)} style={{ marginBottom: '28px', paddingLeft: '12px', borderLeft: `2px solid rgba(124,58,237,0.3)` }}>
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
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '10px 22px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(124,58,237,0.32)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.32)'; }}>
                  See My Work <ArrowRight size={15}/>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(20,18,38,0.045)', color: C.muted, border: `1px solid ${C.border}`, padding: '10px 22px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s, transform 0.15s' }}
                  {...hoverGhost}>
                  <Download size={15}/> Resume
                </a>
                <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(20,18,38,0.045)', color: C.muted, border: `1px solid ${C.border}`, padding: '10px 16px', borderRadius: '980px', textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.purple; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}>
                  <LinkedIn/>
                </a>
                <a href="https://github.com/shubhamshrivastava11" target="_blank" rel="noreferrer" aria-label="GitHub"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(20,18,38,0.045)', color: C.muted, border: `1px solid ${C.border}`, padding: '10px 16px', borderRadius: '980px', textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = 'rgba(20,18,38,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}>
                  <GitHub/>
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
                <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}/>
                <div style={{ position: 'relative', zIndex: 1, width: '260px', height: '320px', borderRadius: '28px', overflow: 'hidden', boxShadow: `0 0 0 1px rgba(124,58,237,0.22), 0 20px 48px rgba(20,18,38,0.18)` }}>
                  <img src="/profile.jpg" alt="Shubham Shrivastava" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}/>
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

      {/* ── LOCUS SPOTLIGHT ── */}
      <section id="locus" style={{ padding: '8px 0 64px', background: C.bg }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...up(0)}
            style={{
              position: 'relative',
              borderRadius: '28px',
              padding: 'clamp(28px,4vw,52px)',
              background: `linear-gradient(175deg, ${C.surface} 0%, #FFFFFF 65%)`,
              border: '1px solid rgba(124,58,237,0.16)',
              boxShadow: '0 24px 64px rgba(20,18,38,0.08), 0 4px 20px rgba(124,58,237,0.06)',
              overflow: 'hidden',
            }}>
            {/* Lime glow — the one nod to Locus's own brand, kept local to this section */}
            <div style={{ position: 'absolute', top: '-140px', right: '-120px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(132,204,22,0.22) 0%, transparent 70%)', pointerEvents: 'none' }}/>

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '18px', position: 'relative' }}>
              <Pin size={13} style={{ color: C.purple }} strokeWidth={2.5}/>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: C.purple, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                Locus AI · Flagship Product · Pinned
              </span>
            </div>

            <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-14" style={{ position: 'relative' }}>

              {/* ── LEFT: story ── */}
              <div style={{ flex: '1 1 380px' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem,3.4vw,2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: C.text, marginBottom: '16px' }}>
                  Never lose a <span style={G}>team decision</span> again.
                </h2>
                <p style={{ fontSize: '0.9375rem', color: C.muted, lineHeight: 1.75, marginBottom: '22px', maxWidth: '480px' }}>
                  Locus AI auto-captures decisions, action items, and blockers from Slack, Notion, and Gmail — resurfacing them through a searchable Decision Log and a weekly Pulse digest. I designed the entire product myself, 40+ screens end-to-end in Figma, before writing a line of backend code.
                </p>

                {/* Stat row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px', marginBottom: '26px' }}>
                  {LOCUS_SPOTLIGHT_STATS.map((m, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '1.3125rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, ...GE }}>{m.value}</p>
                      <p style={{ fontSize: '0.625rem', color: C.subtle, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                  <Link to="/case/locus"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '11px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(124,58,237,0.3)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 26px rgba(124,58,237,0.45)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.3)'; }}>
                    View full case study <ArrowRight size={15}/>
                  </Link>
                  <a href="#work"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GHOST_BG, color: C.muted, border: `1px solid ${C.border}`, padding: '11px 22px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s' }}
                    {...hoverGhost}>
                    See all work
                  </a>
                </div>
              </div>

              {/* ── RIGHT: framed screenshot ── */}
              <div style={{ flex: '1 1 420px' }}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 20px 48px rgba(20,18,38,0.14)', background: '#FFFFFF' }}>
                  <div style={{ display: 'flex', gap: '6px', padding: '10px 14px', borderBottom: `1px solid ${C.border}`, background: '#FAFAFC' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#F87171' }}/>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FBBF24' }}/>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#34D399' }}/>
                  </div>
                  <img src="/locus/locus-dashboard.png" alt="Locus dashboard — decisions, action items, and blockers at a glance" style={{ width: '100%', display: 'block' }}/>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  {[
                    { src: '/locus/locus-decision-log.png', alt: 'Decision Log screen' },
                    { src: '/locus/locus-pulse.png', alt: 'Weekly Pulse digest screen' },
                    { src: '/locus/locus-search-results.png', alt: 'Search results screen' },
                  ].map((t, ti) => (
                    <Link key={ti} to="/case/locus" style={{ flex: 1, display: 'block' }}>
                      <img
                        src={t.src}
                        alt={t.alt}
                        loading="lazy"
                        style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px', border: `1px solid ${C.border}`, transition: 'border-color 0.15s, opacity 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.opacity = '0.85'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.opacity = '1'; }}
                      />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
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
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{group.label}</span>
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
                          ...(p.featured ? { border: `1px solid rgba(124,58,237,0.28)`, boxShadow: '0 0 32px rgba(124,58,237,0.07)' } : {}),
                        }}
                        whileHover={{ y: -3, transition: { duration: 0.18 } }}>

                        {/* Top row */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.625rem', color: C.subtle, fontVariantNumeric: 'tabular-nums' }}>{p.index}</span>
                            <span style={{ width: '1px', height: '9px', background: C.border }}/>
                            <span className="pill-tag" style={{ fontSize: '0.625rem', padding: '2px 8px' }}>{p.tag}</span>
                            {p.badges && p.badges.map(b => (
                              <span key={b.label} style={{ fontSize: '0.625rem', fontWeight: 600, color: b.color, background: `${b.color}1A`, border: `1px solid ${b.color}33`, padding: '2px 8px', borderRadius: '980px' }}>{b.label}</span>
                            ))}
                          </div>
                          <div style={{ textAlign: 'right', marginLeft: 'auto', maxWidth: '200px' }}>
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
                          <p style={{ fontSize: '0.6875rem', color: C.subtle, lineHeight: 1.5, marginBottom: p.aiNote ? '6px' : '14px', paddingLeft: '10px', borderLeft: `2px solid rgba(124,58,237,0.25)`, fontStyle: 'italic' }}>{p.scope}</p>
                        )}

                        {/* AI note */}
                        {p.aiNote && (
                          <p style={{ fontSize: '0.6875rem', color: '#047857', lineHeight: 1.5, marginBottom: '14px', paddingLeft: '10px', borderLeft: `2px solid rgba(124,58,237,0.45)` }}>⚡ {p.aiNote}</p>
                        )}

                        {/* Design preview (Figma) */}
                        {p.designPreview && (
                          <div style={{ marginBottom: '14px' }}>
                            <img
                              src={p.designPreview.hero}
                              alt={p.designPreview.heroAlt}
                              loading="lazy"
                              style={{ width: '100%', display: 'block', borderRadius: '10px', border: `1px solid ${C.border}`, boxShadow: '0 8px 24px rgba(20,18,38,0.12)' }}
                            />
                            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                              {p.designPreview.thumbs.map((t, ti) => (
                                <a key={ti} href={t.src} target="_blank" rel="noreferrer" style={{ flex: 1, display: 'block' }}>
                                  <img
                                    src={t.src}
                                    alt={t.alt}
                                    loading="lazy"
                                    style={{ width: '100%', height: '52px', objectFit: 'cover', objectPosition: 'top', borderRadius: '6px', border: `1px solid ${C.border}`, transition: 'border-color 0.15s, opacity 0.15s' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.opacity = '0.85'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.opacity = '1'; }}
                                  />
                                </a>
                              ))}
                            </div>
                          </div>
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
                          {p.tags.slice(0, p.featured ? 5 : 3).map(t => (
                            <span key={t} className="pill-tag" style={{ fontSize: '0.625rem', padding: '2px 8px', ...(TAG_BRAND[t] ? { display: 'inline-flex', alignItems: 'center', gap: '5px' } : {}) }}>
                              {TAG_BRAND[t] && <Brand id={TAG_BRAND[t]} size={11} radius={3}/>}
                              {t}
                            </span>
                          ))}
                          {p.slug && (
                            <Link to={`/case/${p.slug}`}
                              style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', background: GRAD, color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '980px', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,58,237,0.45)'; }}
                              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                              Case study <ArrowRight size={11}/>
                            </Link>
                          )}
                          {p.url && (
                            <a href={p.url} target="_blank" rel="noopener noreferrer"
                              style={{ marginLeft: p.slug ? '0' : 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', background: GRAD, color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px', borderRadius: '980px', textDecoration: 'none', boxShadow: p.featured ? '0 4px 16px rgba(124,58,237,0.3)' : 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,58,237,0.5)'; }}
                              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = p.featured ? '0 4px 16px rgba(124,58,237,0.3)' : 'none'; }}>
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
              const accent = isWork ? (item.accent || C.blue) : C.gold;
              return (
                <motion.div key={i} {...up(i * 0.04)}
                  style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `2px solid ${accent}`, borderRadius: '14px', padding: '18px 22px', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  whileHover={{ borderColor: C.bHover, boxShadow: '0 8px 28px rgba(20,18,38,0.12)' }}>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 600, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${accent}14`, padding: '2px 8px', borderRadius: '980px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      {isWork ? <Briefcase size={8}/> : <GraduationCap size={8}/>} {isWork ? 'Work' : 'Education'}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: C.subtle }}>{item.period}</span>
                    <span style={{ fontSize: '0.6875rem', color: C.subtle }}>· {item.domain}</span>
                  </div>

                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: C.text, letterSpacing: '-0.01em', marginBottom: '2px' }}>{item.role}</h3>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.8125rem', color: accent, fontWeight: 500, marginBottom: item.bullets.length > 0 ? '12px' : 0 }}>
                    {item.brand && <Brand id={item.brand} size={16} radius={5}/>}
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
          <motion.div {...up(0.04)} style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.18)', borderRadius: '14px', padding: '18px 24px', marginBottom: '16px' }}>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Star size={10}/> Core Strengths
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CORE_STRENGTHS.map(s => (
                <span key={s} style={{ fontSize: '0.875rem', color: C.blue, padding: '4px 14px', borderRadius: '980px', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 mb-3">
            {skills.map((g, i) => (
              <motion.div key={i} {...up(i * 0.06)} className="glass-card" style={{ padding: '20px 24px' }}>
                <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>{g.group}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {g.items.map(item => (
                    <span key={item} className="pill-tag" style={SKILL_BRAND[item] ? { display: 'inline-flex', alignItems: 'center', gap: '6px' } : undefined}>
                      {SKILL_BRAND[item] && <Brand id={SKILL_BRAND[item]} size={14} radius={4}/>}
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...up(0.22)} style={{ marginTop: '8px' }}>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: C.gold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Award size={10}/> Licenses & Certifications
            </p>
            <p style={{ fontSize: '0.8125rem', color: C.subtle, marginBottom: '20px' }}>
              {CERTIFICATIONS.reduce((n, g) => n + g.items.length, 0)} credentials across product, AI, agile, and automation.
            </p>

            {CERTIFICATIONS.map((group, gi) => (
              <div key={group.group} style={{ marginBottom: gi === CERTIFICATIONS.length - 1 ? 0 : '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: C.text, whiteSpace: 'nowrap' }}>{group.group}</span>
                  <span style={{ fontSize: '0.625rem', color: C.subtle }}>({group.items.length})</span>
                  <div style={{ flex: 1, height: '1px', background: C.border }}/>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {group.items.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 12px', borderRadius: '12px', background: C.surface, border: `1px solid ${C.border}` }}>
                      <Brand id={c.brand} size={22} radius={6}/>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: C.text, lineHeight: 1.35 }}>{c.name}</p>
                        <p style={{ fontSize: '0.6875rem', color: C.subtle, marginTop: '2px' }}>
                          {c.issuer} · {c.date}{c.expires ? ` – ${c.expires}` : ''}{c.expired ? ` (expired ${c.expired})` : ''}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ background: C.bg, padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 28px' }}>
          <motion.div {...up(0)}>
            <SH eyebrow="Social Proof" title="What colleagues say"/>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} {...up(i * 0.08)} className="glass-card" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column' }}>
                <Quote size={20} style={{ color: t.accent, opacity: 0.5, marginBottom: '10px', flexShrink: 0 }} fill={t.accent} strokeWidth={0}/>
                <p style={{ fontSize: '0.9375rem', color: C.text, lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>
                  "{t.quote}"
                </p>
                <div className="divider" style={{ marginBottom: '16px' }}/>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8125rem', fontWeight: 700, color: '#fff', background: t.accent }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: C.text }}>{t.name}</p>
                    <p style={{ fontSize: '0.75rem', color: C.subtle }}>{t.title}</p>
                  </div>
                  <span style={{ color: C.subtle, flexShrink: 0 }}><LinkedIn/></span>
                </div>
                <p style={{ fontSize: '0.6875rem', color: C.subtle, marginTop: '12px', paddingTop: '12px', borderTop: `1px dashed ${C.border}` }}>
                  {t.relationship} · {t.date} · LinkedIn recommendation
                </p>
              </motion.div>
            ))}
          </div>
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
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: GRAD, color: '#fff', padding: '12px 26px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(124,58,237,0.32)', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s', wordBreak: 'break-word', maxWidth: '100%' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.32)'; }}>
              <Mail size={14}/> shrivastavashubham213@gmail.com
            </a>
            <a href="https://linkedin.com/in/shubhamshrivastava11/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(20,18,38,0.045)', color: C.muted, border: `1px solid ${C.border}`, padding: '12px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s, transform 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.purple; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}>
              <LinkedIn/> LinkedIn
            </a>
            <a href="https://github.com/shubhamshrivastava11" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(20,18,38,0.045)', color: C.muted, border: `1px solid ${C.border}`, padding: '12px 24px', borderRadius: '980px', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s, transform 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = 'rgba(20,18,38,0.25)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ''; }}>
              <GitHub/> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: '32px 28px' }}>
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
