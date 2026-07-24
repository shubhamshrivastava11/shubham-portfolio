export const caseStudies = [
  {
    slug: 'jj-ai-invoice',
    tag: 'MedTech · Enterprise AI',
    company: 'Johnson & Johnson',
    period: 'Oct 2025 – Present',
    title: 'AI Invoice Pipeline & Cloud Migration',
    hook: 'Turned a fragile SAP legacy system into a $2.4M-saving AI platform — in under a year.',
    accentColor: '#7C3AED',
    metrics: [
      { value: '$2.4M', label: 'Annual savings' },
      { value: '38%', label: 'Faster AP cycle' },
      { value: '400+', label: 'Analyst hrs freed/mo' },
      { value: '5', label: 'Global regions' },
    ],
    problem: {
      heading: 'A legacy SAP system holding 5 global finance teams hostage',
      body: [
        'J&J\'s Accounts Payable team was running invoice processing on a monolithic SAP system that hadn\'t been modernised in over a decade. Across 5 global regions, analysts were manually keying in invoice data, cross-checking PDFs, and chasing approvals over email — a process so fragile that a single point of failure could halt payment runs for an entire region.',
        'The cost wasn\'t just the $2.4M in wasted analyst time. It was the downstream compliance risk: wrong invoice data meant wrong GL entries, which meant audit findings. Finance leadership had flagged it as a top-3 operational risk two years running — but prior attempts to fix it had died in architecture debates.',
      ],
      callout: 'Manual data entry error rate was running at 12% — every 1-in-8 invoices had a field that needed correction before it could be approved.',
    },
    approach: {
      heading: 'Discovery first, architecture second',
      steps: [
        {
          num: '01',
          title: 'Structured discovery across 5 regions',
          body: 'Ran 30+ user interviews with AP analysts, controllers, and compliance leads across the US, EU, LATAM, APAC, and EMEA regions. Mapped the full invoice lifecycle end-to-end and identified 11 distinct failure modes — from OCR errors on scanned PDFs to timezone-driven SLA misses.',
        },
        {
          num: '02',
          title: 'Built the business case for cloud migration',
          body: 'Worked with finance and engineering to quantify the cost of status quo vs. a cloud-native rebuild. The ROI model showed break-even at 14 months with $2.4M in recurring annual savings — enough to get executive sign-off in one review cycle.',
        },
        {
          num: '03',
          title: 'Designed the AI pipeline with guardrails',
          body: 'Partnered with ML engineers to spec an NLP/RAG extraction pipeline. The key design decision: mandatory human-in-the-loop review for any invoice above $50K or with confidence score below 92%. This was critical for PII compliance and to get Finance\'s buy-in.',
        },
        {
          num: '04',
          title: 'Phased AWS migration across regions',
          body: 'Sequenced the migration starting with the smallest region (APAC) as a canary. Defined rollback criteria, trained regional champions, and ran parallel processing for 6 weeks before each cutover to validate accuracy against the legacy system.',
        },
      ],
    },
    built: {
      heading: 'What shipped',
      items: [
        { label: 'NLP/RAG Invoice Extraction', desc: 'End-to-end pipeline extracting structured data from PDFs, emails, and EDI files. PII redaction baked into the pipeline before any data hits storage.' },
        { label: 'LLM Hallucination Guardrails', desc: 'Confidence scoring on every extracted field. Low-confidence fields flagged for human review rather than auto-populated — critical for a finance context where errors have real dollar consequences.' },
        { label: 'AWS Cloud-Native Migration', desc: 'Full migration from SAP monolith to microservices on AWS. Event-driven architecture with SQS queues between extraction, validation, and approval stages.' },
        { label: 'AI Anomaly Detection in ERP', desc: 'ML model running on ERP transaction data to flag invoice patterns that historically preceded compliance findings. Cut downstream errors by 40%.' },
      ],
    },
    results: {
      heading: 'Results after full rollout',
      items: [
        { before: '12% error rate', after: '<2% error rate', label: 'Invoice accuracy' },
        { before: '~6 days', after: '3.7 days', label: 'AP cycle time' },
        { before: '400+ hrs/mo manual', after: '~60 hrs/mo manual', label: 'Analyst time on data entry' },
        { before: 'Regional silos', after: 'Single unified platform', label: 'System architecture' },
      ],
    },
    learnings: [
      { title: 'Stakeholder alignment across regions is the real product', body: 'The technical migration was straightforward compared to getting 5 regional finance controllers to agree on a shared data model. I learned to customise the "why this matters" narrative per region rather than using a single global deck.' },
      { title: 'Trust in AI requires visible safety rails, not just accuracy metrics', body: 'Finance teams didn\'t care that the model was 94% accurate. They cared about what happened to the 6%. Building the human-in-the-loop review UI first — before the pipeline was fully accurate — was the decision that unlocked adoption.' },
      { title: 'Canary rollouts are non-negotiable for enterprise migrations', body: 'Running APAC as a canary region for 6 weeks before the full rollout surfaced 3 edge cases in the extraction pipeline that would have been catastrophic at scale. Never skip the canary.' },
    ],
  },
  {
    slug: 'deloitte-compliance',
    tag: 'GovTech · Compliance SaaS',
    company: 'Deloitte Consulting',
    period: 'May – Oct 2025',
    title: 'State Education Compliance Platform',
    hook: 'Caught 50+ critical defects before launch. Cut bug fix time by 60%. Without adding a single headcount.',
    accentColor: '#10b981',
    metrics: [
      { value: '50+', label: 'Defects caught pre-launch' },
      { value: '41%', label: 'Data accuracy lift' },
      { value: '1.6d', label: 'MTTR (was 4 days)' },
      { value: '15+', label: 'State agencies served' },
    ],
    problem: {
      heading: 'No QA process. 15 state agencies. A hard launch deadline.',
      body: [
        'Deloitte was building a compliance platform to help 15+ state education agencies manage federal reporting requirements. The problem: the platform was 8 weeks from launch with no formal UAT process, a backlog of 1,200+ items with zero prioritisation, and data accuracy running at roughly 59% — meaning 4-in-10 compliance records had errors that could trigger federal audit findings.',
        'The QA-to-Engineering handoff was entirely informal. Testers filed bugs in an email chain. Engineers triaged based on who was loudest. The result was a 4-day average MTTR, with critical bugs getting stuck in a queue behind cosmetic fixes.',
      ],
      callout: 'A single missed federal compliance deadline for a state agency can trigger funding clawbacks worth millions of dollars. The stakes were high.',
    },
    approach: {
      heading: 'Fixing the process before fixing the product',
      steps: [
        {
          num: '01',
          title: 'Designed the UAT lifecycle from scratch',
          body: 'Mapped the current chaos: who was testing what, in what order, with what criteria. Built a structured UAT lifecycle covering 6 platform modules — entry criteria, test case library, sign-off gates, and escalation paths. Got buy-in from both the engineering lead and the state agency project managers.',
        },
        {
          num: '02',
          title: 'Applied AI clustering to the 1,200-item backlog',
          body: 'Used NLP-based text clustering on the backlog to group semantically similar items. Surfaced 34% of backlog items as duplicates or low-signal noise. Eliminated them in one backlog grooming session — instantly reducing sprint load without any stakeholder conflict.',
        },
        {
          num: '03',
          title: 'Rebuilt the QA → Engineering triage workflow',
          body: 'Implemented severity tagging (P0–P3) with clear SLA targets per severity. P0 bugs went directly to the engineering lead\'s queue with a 4-hour response SLA. Created a shared Jira board so testers and engineers had the same real-time view of defect status.',
        },
        {
          num: '04',
          title: 'Ran intensive pre-launch UAT sprints',
          body: 'Organised 3 structured UAT sprints in the 6 weeks before launch, with state agency end users as participants. Each sprint focused on one compliance module. Ran daily defect standups to clear blockers same-day rather than letting them age.',
        },
      ],
    },
    built: {
      heading: 'What shipped',
      items: [
        { label: 'Structured UAT Lifecycle', desc: '6-module test framework with entry/exit criteria, test case library, and sign-off gates. Adopted as Deloitte\'s internal standard for GovTech engagements.' },
        { label: 'AI-Assisted Backlog Clustering', desc: 'NLP clustering pipeline that reduced a 1,200-item backlog by 34% in a single session. Freed the team to focus on what actually mattered for launch.' },
        { label: 'P0–P3 Triage System', desc: 'Severity-based SLA framework with real-time Jira tracking. P0 bugs had a 4-hour response target; MTTR dropped from 4 days to 1.6 days within 2 sprint cycles.' },
        { label: 'Data Quality Monitoring Dashboard', desc: 'Power BI dashboard tracking compliance record accuracy across all 15 agencies in real time. Lifted data accuracy from 59% to 100% at launch (41% lift).' },
      ],
    },
    results: {
      heading: 'Results at launch',
      items: [
        { before: '59% accuracy', after: '100% accuracy', label: 'Compliance data quality' },
        { before: '4.0 days avg', after: '1.6 days avg', label: 'Bug resolution time (MTTR)' },
        { before: '1,200+ items', after: '~790 items', label: 'Backlog size after clustering' },
        { before: 'Informal email QA', after: 'Structured 6-module UAT', label: 'QA process' },
      ],
    },
    learnings: [
      { title: 'Process debt is just as costly as technical debt', body: 'The platform\'s bugs weren\'t the core problem — the lack of a process to catch and fix them was. Fixing the UAT lifecycle delivered more value than any single bug fix.' },
      { title: 'AI tools for internal PM work are underused', body: 'Using NLP clustering on a backlog isn\'t a common PM move, but it saved 2-3 weeks of backlog grooming. I\'m now applying this to any backlog over 300 items.' },
      { title: 'Government stakeholders need process visibility more than product demos', body: 'State agency PMs were nervous about the launch. What calmed them down wasn\'t feature demos — it was showing them the defect tracking board and the UAT sign-off criteria. Transparency is the product in GovTech.' },
    ],
  },
  {
    slug: 'cygnus-aml',
    tag: 'FinTech · Regulatory Reporting',
    company: 'Cygnus Compliance / Bank of China',
    period: 'Jan – Mar 2025',
    title: 'AML & ISO 20022 Compliance Engine',
    hook: 'Zero to compliance-ready MVP in 8 weeks. $50M+ in transaction volume on day one.',
    accentColor: '#f59e0b',
    metrics: [
      { value: '$50M+', label: 'Transaction volume at launch' },
      { value: '97%', label: 'Submission accuracy' },
      { value: '60%', label: 'Fewer escalations' },
      { value: '8 wks', label: 'Discovery to MVP' },
    ],
    problem: {
      heading: 'An international bank with a 8-week deadline and no product',
      body: [
        'Bank of China\'s US compliance team needed a regulatory reporting engine that could handle ISO 20022 transaction reporting and AML/KYC screening before a hard regulatory deadline. They came to Cygnus Compliance with 8 weeks on the clock, no existing product to build on, and a compliance team that had never used a software-driven reporting workflow.',
        'The submission accuracy problem was the sharpest risk: manual compliance submissions were running at 85% accuracy, meaning 15% of reports had errors that required manual remediation — a process that took 2-3 days per submission and was creating a backlog of escalations that threatened the compliance deadline.',
      ],
      callout: 'Missing the ISO 20022 deadline would have resulted in regulatory sanctions. There was no option to slip the timeline.',
    },
    approach: {
      heading: 'Compressed discovery, three rounds of usability testing',
      steps: [
        {
          num: '01',
          title: 'Rapid discovery in week 1',
          body: 'Ran a 5-day discovery sprint with Bank of China\'s compliance officers and IT team. Mapped the full regulatory reporting workflow, identified the 8 data fields with the highest error rates, and documented the PCI-DSS and AML/KYC constraints that the product had to satisfy.',
        },
        {
          num: '02',
          title: 'Defined MVP scope with hard constraints',
          body: 'With 8 weeks total, I defined an MVP that covered only the ISO 20022 and core AML reporting flows — explicitly out-of-scoping KYC onboarding and audit trail features for v2. Got sign-off from the Bank of China compliance lead on the scope in writing before any engineering started.',
        },
        {
          num: '03',
          title: 'Three rounds of usability testing with compliance officers',
          body: 'Ran usability tests at week 3, week 5, and week 7 — each with 6-8 compliance officers as participants. The week-3 session revealed that the field mapping for ISO 20022 message types was deeply confusing for non-technical users. Redesigned the data entry flow entirely before week 5.',
        },
        {
          num: '04',
          title: 'Pre-launch accuracy validation',
          body: 'In week 7-8, ran the reporting engine in parallel with the manual process on 200 real transactions. Measured accuracy field-by-field. Identified 3 systematic errors in the XML serialisation layer and fixed them before go-live. Accuracy went from 91% in the first parallel run to 97% at launch.',
        },
      ],
    },
    built: {
      heading: 'What shipped',
      items: [
        { label: 'ISO 20022 Reporting Engine', desc: 'End-to-end regulatory reporting for SWIFT ISO 20022 message types. XML generation, validation, and submission to the regulatory portal with full audit trail.' },
        { label: 'AML Transaction Screening', desc: 'Automated screening of transactions against sanctions lists and AML rule sets. Flagging system with configurable thresholds per transaction type.' },
        { label: 'PCI-DSS Compliant Data Layer', desc: 'Tokenisation of sensitive payment data, field-level encryption, and access controls meeting PCI-DSS Level 1 requirements.' },
        { label: 'Compliance Dashboard', desc: 'Real-time view of submission status, error rates, and pending escalations. Reduced the need for manual status checks and cut escalation tickets by 60%.' },
      ],
    },
    results: {
      heading: 'Results at and after launch',
      items: [
        { before: '85% accuracy', after: '97% accuracy', label: 'Regulatory submission accuracy' },
        { before: '2-3 days/submission', after: 'Same-day', label: 'Error remediation time' },
        { before: 'Manual process', after: 'Automated + monitored', label: 'AML screening' },
        { before: 'High escalation volume', after: '60% fewer tickets', label: 'Compliance escalations (2 sprints)' },
      ],
    },
    learnings: [
      { title: 'Usability testing with compliance officers is different from testing with end users', body: 'Compliance officers think in regulation clauses, not UX flows. Framing usability tests around real regulatory scenarios ("show me how you\'d submit a SEPA credit transfer") unlocked far more useful feedback than task-based prompts.' },
      { title: 'Parallel running is worth the extra engineering cost', body: 'Running the new engine alongside the manual process for 2 weeks before launch cost roughly 20 extra engineering hours. It caught 3 systematic bugs that would have caused submission failures on day one. Always worth it.' },
      { title: 'Written MVP scope sign-off is a PM\'s best friend in regulated industries', body: 'Getting the Bank of China compliance lead to explicitly sign off on what was out-of-scope prevented two scope creep attempts during the sprint. In regulated industries, undocumented scope is a liability.' },
    ],
  },
  {
    slug: 'digital-i-mobile',
    tag: 'D2C · Consumer Mobile',
    company: 'Digital iTechnology',
    period: 'Mar – Dec 2024',
    title: 'Mobile App — 0 to 75K Users',
    hook: 'Took an app from zero to 75K installs while lifting retention 15 points in under a year.',
    accentColor: '#f43f5e',
    metrics: [
      { value: '75K', label: 'App installs' },
      { value: '33%', label: 'Onboarding completion lift' },
      { value: '61%', label: '6-mo retention (↑ from 46%)' },
      { value: '40%', label: 'DAU/MAU ratio in Q1' },
    ],
    problem: {
      heading: 'A new app bleeding users before they ever saw the core product',
      body: [
        'Digital iTechnology launched its consumer mobile app with strong initial download numbers driven by paid acquisition — but the product team quickly realised they had a leaky bucket: 54% of users were churning before the end of month 6, and the onboarding completion rate was sitting at 41%. Most users were dropping off before they\'d experienced the core value proposition.',
        'The team had no behavioral analytics infrastructure in place, which meant retention decisions were being made on intuition. There was no cohort view, no funnel visibility, and no A/B testing framework — just a hunch that the onboarding was "a bit long."',
      ],
      callout: 'At a CAC of $2.80 per install, a 54% churn rate meant the business was spending $2.80 to acquire users it was losing before they converted to any meaningful engagement.',
    },
    approach: {
      heading: 'Build measurement infrastructure, then run experiments',
      steps: [
        {
          num: '01',
          title: 'Built the analytics foundation',
          body: 'Instrumented the app with Amplitude event tracking across 40+ user actions. Set up cohort analysis by acquisition channel, onboarding path, and D1/D7/D30 retention. This was week 1 — nothing else mattered until we could see what was actually happening.',
        },
        {
          num: '02',
          title: 'Identified the onboarding drop-off cliff',
          body: 'Funnel analysis revealed that 63% of onboarding drop-off was happening at a single screen: a 7-field registration form on step 3. Users were abandoning before they ever reached the value-delivering features. The fix was obvious once you could see the data.',
        },
        {
          num: '03',
          title: 'Ran 5 A/B tests on the onboarding flow',
          body: 'Tested progressive disclosure (collecting only email + name upfront, deferring other fields), a social login option, and two different value proposition framings. Each test ran for 2 weeks with statistical significance targets set at 95% confidence. The progressive disclosure variant won decisively (+33% completion).',
        },
        {
          num: '04',
          title: 'Built the behavioral cohort retention framework',
          body: 'Segmented users by behavior in their first 7 days. Found that users who completed 3+ sessions in week 1 had 2.1x the 90-day retention of those who completed 1-2 sessions. Redesigned the D1-D7 experience to drive users to that third session — in-app prompts, push notification sequence, and a personalisation hook.',
        },
      ],
    },
    built: {
      heading: 'What shipped',
      items: [
        { label: 'Amplitude Analytics Stack', desc: '40+ event tracking across the full user lifecycle. Cohort dashboards for acquisition, onboarding, retention, and monetisation. First time the team had real funnel visibility.' },
        { label: 'Redesigned Onboarding Flow', desc: 'Progressive disclosure replacing the 7-field form. Social login integration. Value proposition reframing. Lifted onboarding completion from 41% to 74% (+33 points).' },
        { label: 'D1–D7 Retention Intervention', desc: 'In-app prompts, contextual push notification sequence, and personalisation hook designed to drive users to their critical third session within the first 7 days.' },
        { label: 'A/B Testing Framework', desc: 'End-to-end experiment infrastructure with pre-defined significance thresholds, holdout groups, and a results dashboard. Enabled the team to run parallel experiments for the first time.' },
      ],
    },
    results: {
      heading: 'Results over 9 months',
      items: [
        { before: '41%', after: '74%', label: 'Onboarding completion rate' },
        { before: '46%', after: '61%', label: '6-month user retention' },
        { before: '0', after: '75,000', label: 'Total app installs' },
        { before: 'No analytics', after: '40+ events tracked', label: 'Behavioral instrumentation' },
      ],
    },
    learnings: [
      { title: 'You can\'t fix retention without measurement infrastructure', body: 'The first month was entirely spent on instrumentation. It felt slow. But every experiment after that was 10x faster to design and evaluate because we had real data. Measurement is not a nice-to-have — it\'s a prerequisite.' },
      { title: 'The "third session" insight unlocked our retention strategy', body: 'Cohort analysis showed a sharp retention cliff between users who had 2 vs. 3 early sessions. That single insight shaped 6 months of roadmap decisions. It\'s a reminder that the most valuable product insights are usually hiding in behavioral segmentation, not in user interviews.' },
      { title: 'A/B testing culture requires PM leadership to establish', body: 'The team was nervous about running experiments — worried about "hurting" some users. I had to actively make the case that decisions made without data were already hurting users. Once the first test shipped and the data was clear, the team was fully bought in.' },
    ],
  },
  {
    slug: 'locus',
    tag: 'AI · Team Productivity',
    company: 'Founder · AI PM Bootcamp',
    period: '2026',
    title: 'Locus — Team Decision Memory',
    hook: 'Every team loses decisions in the noise of Slack and Notion. I designed 40+ screens end-to-end to fix it — before writing a line of backend code.',
    accentColor: '#6366F1',
    metrics: [
      { value: '40+', label: 'Screens designed' },
      { value: '10+', label: 'VoC interviews' },
      { value: '87%', label: 'Gross margin target' },
      { value: '$12–15', label: 'Price per user / mo' },
    ],
    problem: {
      heading: 'Decisions get made in Slack threads and forgotten by Friday',
      body: [
        'Every fast-moving team makes dozens of small decisions a week — which library to use, who owns a blocker, why a deadline moved — and almost none of it gets written down anywhere durable. It lives in a Slack thread that scrolls away, a Notion comment nobody re-reads, or an email that gets archived. Three weeks later, someone asks "wait, why did we do it this way?" and the answer requires archaeology.',
        'I saw this pattern repeatedly across my own PM work — re-explaining decisions to new teammates, re-litigating settled debates, and losing time to Slack search that returns everything except the one message that mattered. There was no dedicated "team memory" layer sitting on top of the tools teams already use.',
      ],
      callout: 'In VoC interviews, every PM, consultant, and eng lead I talked to described re-explaining the same decision more than once in a single quarter — with no source of truth to point to.',
    },
    approach: {
      heading: 'Designing the product before writing a line of backend code',
      steps: [
        {
          num: '01',
          title: 'Validated the pain with 10+ VoC interviews',
          body: "Talked to PMs, consultants, and engineering leads about how they currently track decisions. The consistent finding: everyone already has the data, in Slack, Notion, and Gmail — what's missing is a layer that reads it passively and resurfaces it on demand, not another tool people have to remember to update.",
        },
        {
          num: '02',
          title: 'Chose a read-only, zero-workflow-change integration model',
          body: 'Ruled out anything that required teams to change behavior, like manually logging decisions. Locus connects via OAuth to Slack, Notion, and Gmail as a read-only listener — no exports, no new workflows — so it starts delivering value from day one without any manual data entry.',
        },
        {
          num: '03',
          title: 'Designed the full product in Figma before scoping engineering',
          body: 'Rather than wireframe-then-build, I designed 40+ high-fidelity screens across the entire product surface — marketing site, onboarding, dashboard, Decision Log, Team Pulse, Search, and Settings — to pressure-test the information architecture and pricing model before committing engineering time.',
        },
        {
          num: '04',
          title: 'Modeled the business against a break-even target',
          body: 'Priced at $12/month individual and $15/user/month team tier, targeting 87% gross margin and break-even at 27–35 users. Kept CAC near-zero by designing for community-led growth — Reddit and Product Hunt — rather than paid acquisition.',
        },
      ],
    },
    built: {
      heading: 'What I designed',
      items: [
        { label: 'Marketing site & onboarding', desc: 'Landing page, Google OAuth sign-in, and a 3-step guided setup (connect Slack/Notion/Gmail → account ready) designed to get a team from zero to first captured decision in under 2 minutes.' },
        { label: 'Dashboard & natural-language search', desc: 'A "Good morning" home screen surfacing open decisions, action items, and blockers at a glance, plus a search bar that answers questions like "What did we decide about the Q3 timeline?" with cited sources.' },
        { label: 'Decision Log', desc: 'A filterable, paginated table of every captured Decision, Action Item, and Blocker — type, summary, source thread, date, and status (Current / Confirmed / Superseded) — fully searchable and exportable.' },
        { label: 'Team Pulse — weekly digest', desc: "An auto-synthesized Monday digest summarizing the week's top decisions, action items, and open blockers by confidence and recency, so no one has to scroll back through a week of Slack to catch up." },
      ],
    },
    galleryIntro: 'A sample of the 40+ screens I designed end-to-end in Figma — from first-touch marketing to the core product surface.',
    gallery: [
      { src: '/locus/locus-landing-hero.png', alt: 'Locus landing page', title: 'Landing page', caption: 'The pitch: "Never lose a team decision again." Above-the-fold hero pairs the value prop with a live dashboard preview.' },
      { src: '/locus/locus-welcome.png', alt: 'Locus welcome and sign-in screen', title: 'Welcome / sign-in', caption: 'Google OAuth sign-in — the lowest-friction entry point for a tool that needs to feel trustworthy on day one.' },
      { src: '/locus/locus-onboarding.png', alt: 'Locus onboarding flow', title: 'Guided onboarding', caption: 'Step 1 of 3: connect Slack, Notion, and Gmail as read-only sources. No exports, no copy-paste, no new workflows.' },
      { src: '/locus/locus-dashboard.png', alt: 'Locus dashboard', title: 'Dashboard', caption: 'The daily home screen — open decisions, action items, and blockers at a glance, plus natural-language search across everything captured.' },
      { src: '/locus/locus-search-results.png', alt: 'Locus search results', title: 'Search results', caption: 'Every answer links back to its original Slack thread or Notion doc — no context lost in translation.' },
      { src: '/locus/locus-decision-log.png', alt: 'Locus decision log table', title: 'Decision Log', caption: 'The full, filterable record of every decision, action item, and blocker — searchable by type, source, and status.' },
      { src: '/locus/locus-pulse.png', alt: 'Locus weekly Pulse digest', title: 'Team Pulse', caption: 'A synthesized weekly digest, delivered every Monday, so catching up never means scrolling back through a week of Slack.' },
      { src: '/locus/locus-pricing.png', alt: 'Locus pricing plans', title: 'Pricing', caption: 'Individual ($12/mo) and Team ($15/user/mo) tiers, modeled against an 87% gross-margin target and break-even at 27–35 users.' },
    ],
    results: {
      heading: 'Where the product stands',
      items: [
        { before: 'Hypothesis only', after: '10+ VoC interviews validated', label: 'Problem validation' },
        { before: 'Concept sketch', after: '40+ hi-fi screens shipped', label: 'Product design' },
        { before: 'No pricing model', after: '87% margin target · break-even at 27–35 users', label: 'Business model' },
        { before: 'Design phase', after: 'Backend + MVP in active development', label: 'Current status' },
      ],
    },
    learnings: [
      { title: 'Designing the full surface first exposes gaps early', body: 'Laying out every settings screen — Capture Controls, Privacy, Connected Sources — before writing a spec forced me to answer monetization and data-retention questions, like the 30-day raw-content purge policy, months before an engineer would have hit them.' },
      { title: 'Read-only, zero-workflow-change integrations lower the adoption bar the most', body: 'Every VoC interview confirmed the same thing: teams will not adopt a tool that asks them to manually log anything. Designing Locus as a passive listener rather than a new inbox to check was the single highest-leverage product decision.' },
      { title: 'A weekly digest beats a dashboard nobody opens', body: 'Early concepts leaned entirely on a pull-based dashboard. Adding Pulse — a push-based Monday digest — came directly from VoC feedback that people forget to check dashboards but do read a well-timed Monday email.' },
    ],
  },
];
