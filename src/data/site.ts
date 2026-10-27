// Single source of truth for every fact on the site.
// Pages, JSON-LD structured data, and /llms.txt all read from here,
// so AI engines see the same facts everywhere. Edit facts here only.

export const site = {
  url: 'https://travis-woods.com',
  name: 'Travis Woods',
  title: 'Accelerate Your MSP Channel Go-to-Market | Travis Woods',
  description:
    'For cybersecurity, AI, and IT vendors who want MSPs selling, not just signing up. Travis Woods builds the partner value story, onboarding, and co-sell motion that move MSP partners from signed to selling.',
  lastUpdated: '2026-10-26',
  locale: 'en_US',
  // Set to false to hide the "open to executive roles" note on Contact and FAQ.
  openToExecutiveRoles: true,
};

export const person = {
  name: 'Travis Woods',
  jobTitle: 'Channel Strategist and Partner GTM Advisor',
  shortRole: 'MSP channel go-to-market advisor for vendors, and a former MSP owner',
  location: 'San Francisco Bay Area, California',
  email: 'travis@travis-woods.com',
  bookingUrl: 'https://meetings-na2.hubspot.com/travis14',
  linkedin: 'https://www.linkedin.com/in/traviswoods/',
  education: { degree: 'B.A. in Psychology', school: 'San Francisco State University', schoolUrl: 'https://www.sfsu.edu/' },
  certifications: ['Salesforce Administrator (2009)'],
  // One paragraph AI engines can quote verbatim. Keep it factual.
  definition:
    'Travis Woods helps cybersecurity, AI, and IT vendors accelerate go-to-market in the MSP channel. He builds the partner value story, program design, onboarding, enablement, and co-sell motions that move managed service providers (MSPs) and IT service providers (ITSPs) from signed partners to selling partners. He founded and ran Fort Point IT, a managed IT and cybersecurity provider, from 2009 to 2025, so he designs channel programs from the partner’s side of the table. He is based in the San Francisco Bay Area.',
  knowsAbout: [
    'Channel strategy',
    'Partner marketing',
    'MSP go-to-market strategy',
    'Managed service providers (MSPs)',
    'IT service providers (ITSPs)',
    'MSSPs',
    'Partner program design',
    'Partner onboarding and enablement',
    'Co-marketing and MDF programs',
    'Co-selling frameworks',
    'Distribution and marketplace go-to-market',
    'Cybersecurity go-to-market',
    'Cyber insurance channel strategy',
    'LATAM market expansion',
    'Channel community building',
  ],
};

export const bio = {
  short:
    'Vendors bring in Travis Woods when MSPs sign up but don’t sell. He ran an MSP for 16 years, so he builds partner programs, messaging, and co-sell motions from the side of the table that decides what actually gets sold.',
  long: [
    'Travis Woods is a channel strategist and former MSP owner. He founded Fort Point IT in San Francisco in 2009 and ran it for 16 years as a profitable managed IT and cybersecurity practice. In that seat he lived every side of the vendor relationship: choosing security partners, working MDF and co-marketing programs, sitting through onboarding that worked and onboarding that did not, and deciding which vendors earned a place in his stack.',
    'That operator experience is the foundation of his advisory work. Since 2025 he has advised AI, cybersecurity insurance, and IT security vendors on partner marketing, channel brand, onboarding, and go-to-market motions for the MSP and emerging channel ecosystem. His independent practice operates informally as Fort Point Advisory. He also serves as Vice President, Strategy and Channel Partnerships at DVBE Technology Colombia, a systems integrator delivering cybersecurity, infrastructure, and Smart City projects for government and enterprise clients.',
    'Travis is an active voice in the channel. He serves on The Channel Company XChange Advisory Board (formerly Vice Chair of the NexGen Advisory Board), is a GTIA Member Champion, and has spoken at Canalys Forum, XChange Security, XChange NexGen, and GTIA ChannelCon. He is based in the San Francisco Bay Area and works with partners across North America and Latin America.',
  ],
};

export const experience = [
  {
    // Informal trade name, not a registered company, so it is not listed as an employer in structured data.
    org: 'Fort Point Advisory (independent practice)',
    role: 'Independent channel GTM advisor',
    independent: true,
    start: '2025',
    end: 'Present',
    summary:
      'Advises AI, cybersecurity insurance, and IT security vendors on partner marketing and go-to-market motions across MSP and emerging channel ecosystems.',
    points: [
      'Leads channel brand engagements that turn a partner-facing narrative into programs partners can execute.',
      'Designs onboarding frameworks and partner campaigns that shorten time to value for MSP partners.',
      'Builds distributor and ecosystem relationships that support co-marketing, incentives, and partner engagement at scale.',
    ],
  },
  {
    org: 'DVBE Technology Colombia S.A.S.',
    role: 'Vice President, Strategy and Channel Partnerships',
    start: '2023',
    end: 'Present',
    summary:
      'Growth and strategy leader at a systems integrator focused on cybersecurity, IT infrastructure, and Smart City projects in Colombia.',
    points: [
      'Builds vendor-aligned partner solutions for public sector and enterprise cybersecurity initiatives.',
      'Uses global technology partnerships to support multimillion-dollar government and infrastructure projects.',
      'Expands the LATAM presence through distributor relationships, channel readiness, and partner activation.',
    ],
  },
  {
    org: 'Sprout Technology Group',
    role: 'Chief Information Officer',
    start: '2023',
    end: '2024',
    summary: 'Executive leader for technology strategy, partner-enabled go-to-market, and alliance-driven service innovation.',
    points: [
      'Designed and launched a partner-enabled cybersecurity service funded through the AWS Enterprise Discount Program, giving MSP and SI partners a security offer to package and deliver.',
      'Aligned product, marketing, sales, and partner stakeholders around commercializing partner-delivered security services.',
    ],
  },
  {
    org: 'Fort Point IT',
    role: 'Founder and CEO',
    start: '2009',
    end: '2025',
    summary: 'Founded and ran a profitable MSP and managed cybersecurity practice in San Francisco for 16 years.',
    points: [
      'Grew recurring revenue 43% between 2019 and 2022 through channel partnerships and vendor alignment.',
      'Improved sales close rates by 80% with sales enablement and a co-sell motion built with vendor partners.',
      'Turned vendor enablement, MDF, and partner campaigns into new customer acquisition.',
      'Selected and ran security vendor partnerships from the partner side, including WatchGuard and Malwarebytes (ThreatDown).',
    ],
  },
  {
    org: 'Trilogy Integrated Resources',
    role: 'Salesforce Administrator and Business Development Lead',
    start: '2007',
    end: '2009',
    summary: 'Implemented CRM automation and sales forecasting to improve pipeline visibility in public sector markets.',
    points: [],
  },
];

export const results = [
  { figure: '16 years', label: 'running an MSP and managed cybersecurity practice' },
  { figure: '43%', label: 'recurring revenue growth at Fort Point IT, 2019 to 2022' },
  { figure: '80%', label: 'improvement in sales close rates with a vendor co-sell motion' },
  { figure: 'Multimillion-dollar', label: 'government and enterprise wins in LATAM' },
];

export const advisory = [
  {
    org: 'The Channel Company',
    role: 'XChange Advisory Board Member; former Vice Chair, NexGen Advisory Board',
    current: true,
    url: 'https://event.thechannelco.com/nexgen/advisory-board',
    detail: 'Shapes content, peer engagement, and vendor engagement for XChange events that educate and connect MSPs.',
  },
  {
    org: 'GTIA (Global Technology Industry Association)',
    role: 'Member Champion',
    current: true,
    url: 'https://gtia.org/',
    detail: 'Champions GTIA membership with a focus on international and LATAM members. Former member of the Channel Development Advisory Council.',
  },
  {
    org: 'HENNGE North America',
    role: 'Advisory Board Member',
    current: true,
    url: '',
    detail: 'Provides channel strategy and go-to-market guidance for an international IAM and cybersecurity SaaS company, including recruiting a partner advisory council.',
  },
  {
    org: 'Theo AI',
    role: 'Product Advisory Board Member',
    current: true,
    url: '',
    detail: 'Advises an emerging AI product for the MSP and ITSP market on positioning, features, and building an audience of influence.',
  },
  {
    org: 'Pax8',
    role: 'Former Partner Advisory Council Member',
    current: false,
    url: '',
    detail: 'Recommended and vetted new vendors and products for the Pax8 Marketplace from the MSP perspective.',
  },
];

export const memberships = [
  { org: 'FBI InfraGard, San Francisco Members Alliance', url: 'https://www.infragard.org/' },
  { org: 'ISSA Silicon Valley', url: '' },
  { org: 'ISC2', url: 'https://www.isc2.org/' },
  { org: 'Toastmasters International (Club President, 2026)', url: 'https://www.toastmasters.org/' },
];

export const speaking = {
  stages: ['Canalys Forum', 'XChange Security', 'XChange NexGen', 'GTIA ChannelCon', 'Channel Insider Podcast'],
  formats: ['Keynotes', 'Panel moderation', 'Panel discussions', 'Workshops', 'Partner focus groups and advisory sessions'],
  topics: [
    {
      title: 'What MSPs wish vendors knew',
      text: 'An operator view of how MSPs choose vendors, why they stall in onboarding, and what earns a place in the stack.',
    },
    {
      title: 'Building partner programs on trust',
      text: 'Why the partner value story matters more than tiers and points, and how to make it simple enough to sell.',
    },
    {
      title: 'Cybersecurity go-to-market through the channel',
      text: 'Packaging, pricing, and positioning security services so MSPs can sell them with margin.',
    },
    {
      title: 'AI as a managed services revenue opportunity',
      text: 'Where MSPs can turn AI into services clients will pay for, and how vendors can help them get there.',
    },
    {
      title: 'Expanding into LATAM through partners',
      text: 'Lessons from building distributor and partner relationships in Colombia and across Latin America.',
    },
  ],
};

// The problems vendors bring to the first conversation. Written in the vendor's voice.
export const problems = [
  {
    title: 'Partners sign up, then go quiet',
    text: 'Your partner count keeps growing. Deal registrations and revenue don’t. Signed partners are not selling partners.',
  },
  {
    title: 'MSPs can’t repeat your value story',
    text: 'If an MSP can’t explain in one sentence how you help them grow, they won’t put their client relationships on the line for you.',
  },
  {
    title: 'Onboarding never gets to a first win',
    text: 'Portal logins, generic training, and no early deal. Partners lose momentum before they ever close.',
  },
  {
    title: 'Your offer doesn’t fit how MSPs make money',
    text: 'Packaging, pricing, and terms that ignore MSP margin and service delivery costs keep you out of the stack.',
  },
  {
    title: 'Incentives reward the wrong behavior',
    text: 'MDF that is too hard to claim and tiers built on points instead of selling activity leave budget on the table.',
  },
  {
    title: 'No one owns the channel yet',
    text: 'You need senior channel leadership now, before you are ready to hire a full-time channel chief.',
  },
];

// What a vendor walks away with.
export const outcomes = [
  'A partner value story MSPs understand, believe, and repeat to their clients',
  'Packaging and pricing MSPs can sell with margin',
  'Onboarding designed to get every new partner to a first win',
  'Co-sell plays and talk tracks your team and your partners run the same way',
  'Incentives and MDF that reward the selling behavior you want',
  'A channel motion that scales into new markets, including Latin America',
];

// The Channel Clarity Process. A real sequence, so it is numbered.
export const process = [
  {
    step: 1,
    name: 'Insight',
    color: 'navy',
    summary: 'Find exactly where your partners lose trust or stall.',
    points: [
      'Pressure-test your partner value story from the MSP side',
      'Assess your messaging, onboarding, and enablement',
      'Review incentives, co-sell assets, and deal registration flow',
      'Pinpoint where partners stall between signing and selling',
      'Align sales, marketing, and partner teams on one go-to-market narrative',
    ],
  },
  {
    step: 2,
    name: 'Trust',
    color: 'red',
    summary: 'Give MSPs a story and a motion they believe in.',
    points: [
      'Build a partner narrative that answers the MSP’s real question: how do you help me grow?',
      'Write trust-first messaging for MSPs and ITSPs',
      'Design a go-to-market motion simple enough to sell',
      'Document repeatable co-sell plays',
      'Rework onboarding so partners get an early win',
      'Define KPIs that track partner revenue, not just partner sign-ups',
    ],
  },
  {
    step: 3,
    name: 'Activation',
    color: 'teal',
    summary: 'Turn signed partners into selling partners.',
    points: [
      'Build co-selling and enablement frameworks your partners actually use',
      'Create joint value plays you and your MSPs run together',
      'Launch incentives that reinforce the behavior you want',
      'Simplify program tiers and partner journeys',
      'Equip your sellers with talk tracks that land with MSPs',
      'Set up the motion to scale into new markets such as LATAM',
    ],
  },
];

export const services = [
  {
    name: 'MSP go-to-market strategy',
    text: 'Clarify your value to MSPs and design the go-to-market plays that drive adoption and revenue, not just sign-ups.',
  },
  {
    name: 'Partner program design',
    text: 'Incentives, onboarding, and enablement frameworks that scale, and that partners can actually follow.',
  },
  {
    name: 'Fractional channel leadership',
    text: 'A senior channel leader working inside your team before you are ready to hire a full-time channel chief.',
  },
  {
    name: 'Partner advisory councils and community',
    text: 'Advisory councils and community programs that put real MSP feedback into your roadmap and build long-term partner trust.',
  },
  {
    name: 'LATAM expansion',
    text: 'Distributors, partners, and go-to-market for vendors entering Colombia and the rest of Latin America.',
  },
  {
    name: 'Partner events and speaking',
    text: 'Keynotes, panels, and partner focus groups that bring an MSP operator’s view to your partner audience.',
  },
];

export const whoFor = [
  'Cybersecurity vendors launching or fixing an MSP program',
  'AI companies bringing a product to MSPs and ITSPs for the first time',
  'Cyber insurance providers using MSPs as a distribution channel',
  'Emerging vendors that need channel leadership before a full-time hire',
  'Vendors whose partner count is growing faster than partner revenue',
  'Distributors and marketplaces designing vendor and partner programs',
];

// Travel figures as shown on the previous site. Update the label and numbers together.
export const travel = {
  label: 'One recent year on the road',
  stats: [
    { figure: '48', label: 'industry conferences' },
    { figure: '49', label: 'flights' },
    { figure: '66,819', label: 'miles' },
  ],
};

export const faqs = [
  {
    q: 'How can a vendor accelerate go-to-market in the MSP channel?',
    a: 'Start with the partner value story, not the program tiers. MSPs adopt vendors they can explain, package, and sell with margin. Travis Woods helps vendors find where partners stall (Insight), build a value story and co-sell motion MSPs believe in (Trust), and then turn signed partners into selling partners with onboarding, enablement, and incentives (Activation).',
  },
  {
    q: 'Why do MSP partner programs stall after partners sign up?',
    a: 'Usually for one of a few reasons: MSPs can’t explain the vendor’s value to their clients, the product is hard to package and price with margin, onboarding never produces a first win, or incentives reward activity instead of selling. Travis Woods saw each of these from inside his own MSP before he started advising vendors.',
  },
  {
    q: 'What do MSPs look for when choosing a new vendor?',
    a: 'Trust, a product they can package and price profitably, support after the deal, and a vendor that understands how a managed services business runs. Tier points and logo placement matter far less than most vendors expect.',
  },
  {
    q: 'What is the Channel Clarity Process?',
    a: 'The Channel Clarity Process is Travis Woods’ three-step method for getting MSPs to sell a vendor’s product. Insight finds where partners lose trust or stall. Trust builds a partner narrative, messaging, and co-sell plays MSPs believe in. Activation turns signed partners into selling partners with enablement, incentives, and simpler partner journeys.',
  },
  {
    q: 'Do we need a full-time channel chief before entering the MSP channel?',
    a: 'Not necessarily. Travis Woods works as a fractional channel chief for emerging vendors that need senior channel leadership before they are ready to hire a full-time channel executive.',
  },
  {
    q: 'What kinds of vendors does Travis Woods work with?',
    a: 'Cybersecurity vendors, AI companies, cyber insurance providers, and IT security vendors selling through MSPs, MSSPs, systems integrators, and distributors. Most are emerging vendors entering the MSP channel, or established vendors whose partner programs are not producing engaged, selling partners.',
  },
  {
    q: 'What happens on the first call?',
    a: 'A 30-minute conversation about where your partners stall and what it would take to get them moving. Bring your partner numbers and your current pitch.',
  },
  {
    q: 'Can Travis Woods help us expand into Latin America?',
    a: 'Yes. He is Vice President, Strategy and Channel Partnerships at DVBE Technology Colombia, a systems integrator working on cybersecurity, infrastructure, and Smart City projects, and he helps vendors enter LATAM through distributors and partners.',
  },
  {
    q: 'Who is Travis Woods?',
    a: 'Travis Woods is an MSP channel go-to-market advisor based in the San Francisco Bay Area. He founded and ran Fort Point IT, a managed IT and cybersecurity provider, from 2009 to 2025, and now helps cybersecurity, AI, and IT vendors get MSPs selling their products.',
  },
  {
    q: 'How is Travis Woods different from other channel consultants?',
    a: 'He ran an MSP for 16 years. He has been the partner on the receiving end of vendor programs, MDF, onboarding, and co-sell motions, so he understands MSP economics, margin pressure, service delivery, and how MSPs actually decide which vendors to back. Vendors get that operator view built into their go-to-market.',
  },
  {
    q: 'Which industry advisory boards does Travis Woods serve on?',
    a: 'He serves on The Channel Company XChange Advisory Board (formerly Vice Chair of the NexGen Advisory Board), is a GTIA Member Champion, and advises HENNGE North America and Theo AI. He is a former member of the Pax8 Partner Advisory Council and the GTIA Channel Development Advisory Council.',
  },
  {
    q: 'Can Travis Woods speak to our partners or at our event?',
    a: 'Yes. He has spoken at Canalys Forum, XChange Security, XChange NexGen, GTIA ChannelCon, and the Channel Insider Podcast, and he gives keynotes, moderates panels, and leads partner focus groups.',
  },
  {
    q: 'How do I get started?',
    a: 'Book time directly at meetings-na2.hubspot.com/travis14, connect on LinkedIn at linkedin.com/in/traviswoods, or email travis@travis-woods.com.',
  },
];

export const executiveRoleFaq = {
  q: 'Is Travis Woods open to full-time channel leadership roles?',
  a: 'Yes. Alongside his advisory work, he is open to conversations about vendor-side executive roles such as VP of Channel, Head of MSP, or Chief MSP Officer at cybersecurity, SaaS, and infrastructure companies.',
};

export const nav = [
  { href: '/services/', label: 'How I help' },
  { href: '/about/', label: 'Why Travis' },
  { href: '/speaking/', label: 'Speaking' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

// Footer and llms.txt list every page, including ones kept out of the main menu.
export const footerNav = [...nav, { href: '/advisory-boards/', label: 'Advisory boards' }];
