export const siteInfo = {
  companyName: "ELITECH Distributor Co., Ltd.",
  tagline: "GLOBAL TECHNOLOGY. LOCAL EXPERTISE.",
  headline: "Securing Cambodia's Digital Future",
  description: "Delivering trusted cybersecurity and enterprise technology solutions from global innovators to businesses and institutions across Cambodia.",
  establishedYear: "2020",
  phone: "+855 88 8888 218",
  email: "info@elitech-dist.com",
  location: "Phnom Penh, Cambodia",
  websiteUrl: "https://www.elitech-dist.com",
  address: "Canadia Tower, 18th Floor, Monivong Blvd, Phnom Penh, Kingdom of Cambodia",
};

export const stats = [
  { value: "150+", label: "Customers" },
  { value: "10+", label: "Industries" },
  { value: "2020", label: "Established" },
  { value: "GLOBAL", label: "Partners" },
];

export const allSolutionsData = [
  {
    id: "01",
    code: "endpoint",
    title: "Endpoint Security",
    category: "Core Security",
    shortDesc: "Protect devices and users against malware, ransomware, and unauthorized access.",
    fullDesc: "Safeguard every laptop, desktop, mobile device, and virtual server across your distributed workforce. Powered by multi-layered defense engines, behavioral analytics, host intrusion prevention (HIPS), and automated containment to neutralize advanced persistent threats before execution.",
    features: [
      "Multi-layered signature & machine learning behavioral detection",
      "Real-time ransomware remediation & file rollback shield",
      "Host-based Intrusion Prevention System (HIPS) and exploit blocker",
      "Cloud-delivered zero-day unknown sample analysis sandbox",
      "Centralized cloud-native management console with remote deployment"
    ],
    brands: ["ESET", "Sangfor"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    badge: "01 — Endpoint Security"
  },
  {
    id: "02",
    code: "email",
    title: "Email Security & M365 Defense",
    category: "Communication Security",
    shortDesc: "Protect business communication against phishing, malware, BEC, and impersonation.",
    fullDesc: "Shield your primary communication gateway with AI-driven email filtering, business email compromise (BEC) protection, deep sandboxing, and compliance archiving. Seamlessly integrates with Microsoft 365 and Google Workspace to eliminate targeted spam and executive impersonation.",
    features: [
      "Advanced AI Phishing & Spear-Phishing Interception",
      "Executive Impersonation & Business Email Compromise (BEC) defense",
      "Automated Malicious URL inspection & live Attachment Sandboxing",
      "Tamper-proof 10-year regulatory email archiving & e-discovery",
      "Automated employee security awareness simulation & training"
    ],
    brands: ["Hornet Security", "ESET"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    badge: "02 — Email Security"
  },
  {
    id: "03",
    code: "data",
    title: "Data Protection & DLP",
    category: "Information Protection",
    shortDesc: "Protect sensitive business information and prevent internal and external data loss.",
    fullDesc: "Gain full visibility into sensitive company data flows across endpoints, cloud storage, USB channels, and network transfers. Enforce contextual policies that prevent accidental leaks and malicious insider exfiltration without disrupting daily business operations.",
    features: [
      "Automated sensitive data discovery, optical character recognition (OCR) & tagging",
      "Insider threat behavior analytics & abnormal transfer alerts",
      "Peripheral control: USB, external media, Bluetooth, and print lockdown",
      "Enforced policy-based file encryption for external collaboration",
      "Regulatory compliance reporting for Banking (NBC), ISO 27001 & GDPR"
    ],
    brands: ["Safetica", "ESET"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    badge: "03 — Data Protection"
  },
  {
    id: "04",
    code: "network",
    title: "Network Perimeter Defense",
    category: "Network Security",
    shortDesc: "Next-generation firewalls, secure web gateways, and perimeter access control.",
    fullDesc: "Safeguard enterprise branch offices, headquarters, and data centers against external intrusions. Combines deep packet inspection, application-level traffic control, and converged SD-WAN for optimal speed and uncompromised security.",
    features: [
      "Next-Generation Application Firewall (NGAF) with bi-directional DPI",
      "Integrated Intrusion Prevention System (IPS) and SSL/TLS decryption",
      "Secure branch-to-cloud SD-WAN with intelligent link failover",
      "Web Content Filtering & Anti-Ransomware gateway inspection",
      "Zero Trust Network Access (ZTNA) for remote staff and contractors"
    ],
    brands: ["Sangfor"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    badge: "04 — Network Defense"
  },
  {
    id: "05",
    code: "cloud",
    title: "Cloud Infrastructure Defense",
    category: "Infrastructure Security",
    shortDesc: "Hyper-converged cloud infrastructure and virtualized security operations.",
    fullDesc: "Modernize legacy server rooms into software-defined, highly resilient cloud architectures with built-in micro-segmentation, continuous backup, and sub-second disaster recovery failover.",
    features: [
      "Hyper-Converged Infrastructure (HCI) software-defined virtualization",
      "Native micro-segmentation and East-West traffic inspection",
      "Automated continuous snapshotting and fast disaster recovery replication",
      "Multi-tenant workload isolation and high-availability clustering",
      "Unified single-pane management for compute, storage, and networking"
    ],
    brands: ["Sangfor"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    badge: "05 — Cloud Infrastructure"
  },
  {
    id: "06",
    code: "suite",
    title: "ELITECH Business Suite",
    category: "Bundled Solutions",
    shortDesc: "Turnkey enterprise packages combining endpoint, email, and backup for Cambodian businesses.",
    fullDesc: "A complete, cost-effective cybersecurity stack engineered specifically for SMEs, microfinance institutions, and regional commercial enterprises that require corporate-strength security without immense complexity.",
    features: [
      "Complete endpoint anti-malware and cloud firewall protection",
      "Enterprise email hygiene and spam interceptor",
      "Automated cloud backup and data ransomware immunity",
      "Zero-hardware-required cloud management portal",
      "Direct technical setup and advisory from ELITECH Phnom Penh"
    ],
    brands: ["ESET", "Hornet Security", "Safetica"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    badge: "06 — Business Suite"
  },
  {
    id: "07",
    code: "edr",
    title: "EDR & XDR Extended Detection",
    category: "Advanced Detection",
    shortDesc: "Detect, hunt, and automatically respond to advanced threats across endpoints and networks.",
    fullDesc: "Elevate your enterprise defense posture with telemetry correlation across endpoints, identities, cloud workloads, and networks. Rapidly trace adversary lateral movement, map attacks to MITRE ATT&CK, and isolate compromised hosts with a single click.",
    features: [
      "Full interactive process timeline & root-cause forensic trees",
      "MITRE ATT&CK framework mapping for suspicious behaviors",
      "One-click host network isolation and automated artifact kill",
      "Live cross-domain telemetry ingestion across cloud & on-premise seats",
      "Custom threat hunting rule creation and automated IOC scanning"
    ],
    brands: ["ESET", "PRE Security", "Sangfor"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    badge: "07 — EDR & XDR"
  },
  {
    id: "08",
    code: "ai-secops",
    title: "AI-Native SecOps (CyberAI™)",
    category: "Autonomous Security",
    shortDesc: "Agentic AI architecture that transforms SOC investigation and autonomous response.",
    fullDesc: "Modernize your security operations center with purposeful SecOps AI agents. Autonomous triage cuts alert fatigue by over 90%, conducts instant root-cause investigations, and orchestrates remediation workflows in milliseconds.",
    features: [
      "Agentic SecOps AI assistants purpose-trained on cyber operations",
      "Automated alert clustering, deduplication, and false-positive reduction",
      "Natural language investigation queries and autonomous incident summaries",
      "Pre-built automated playbook orchestration and script execution",
      "10x faster Mean-Time-To-Detect (MTTD) and Mean-Time-To-Respond (MTTR)"
    ],
    brands: ["PRE Security"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    badge: "08 — CyberAI™ SecOps"
  },
  {
    id: "09",
    code: "threat",
    title: "Continuous Threat Hunting & Intelligence",
    category: "Advanced Detection",
    shortDesc: "Proactive adversary hunting and real-time global threat feeds tailored to APAC.",
    fullDesc: "Move from reactive security alerts to proactive adversary hunting. Continuous threat intelligence feeds identify emerging zero-day vulnerabilities, weaponized exploit kits, and active threat actor campaigns targeting Southeast Asia.",
    features: [
      "Real-time Indicators of Compromise (IOC) and YARA/Sigma rule scanning",
      "Threat intelligence correlation from global and regional research laboratories",
      "Proactive adversary pattern hunting before ransomware deployment",
      "Continuous vulnerability assessment and patch prioritization",
      "Executive threat briefing reports for security leadership and boards"
    ],
    brands: ["PRE Security", "ESET"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    badge: "09 — Threat Intelligence"
  },
  {
    id: "10",
    code: "soc",
    title: "Corporate Managed SOC Defense",
    category: "Security Operations",
    shortDesc: "24/7 Security Operations Center monitoring, incident response, and escalation.",
    fullDesc: "Empower your organization with round-the-clock eyes-on-glass monitoring without the multi-million-dollar cost of building an in-house 24/7 SOC. Combines state-of-the-art telemetry platforms with certified security analysts.",
    features: [
      "24/7 continuous log aggregation, correlation, and anomaly monitoring",
      "Dedicated incident escalation channels with guaranteed response SLAs",
      "Live containment coordination with your local IT team",
      "Monthly posture reviews and strategic security roadmap guidance",
      "Turnkey compliance audit logs for regulatory oversight"
    ],
    brands: ["PRE Security", "CodeRed ASM"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    badge: "10 — Managed SOC"
  },
  {
    id: "11",
    code: "asm",
    title: "Attack Surface Management (ASM)",
    category: "Digital Risk",
    shortDesc: "Automated continuous outside-in discovery of exposed corporate internet assets.",
    fullDesc: "Gain visibility into what cyber attackers see. Continuous outside-in scanning discovers forgotten subdomains, shadow IT, exposed cloud databases, expired SSL certificates, and vulnerable web servers before exploitation.",
    features: [
      "Zero-installation outside-in scanning requiring only your domain name",
      "Automated discovery of shadow IT, APIs, and forgotten dev servers",
      "Real-time alerts on newly opened ports, SSL issues, and CVE vulnerabilities",
      "Attack path simulation and adversary exploitability scoring",
      "Comprehensive external risk posture report for executive leadership"
    ],
    brands: ["CodeRed ASM"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    badge: "11 — Attack Surface"
  },
  {
    id: "12",
    code: "darkweb",
    title: "Dark Web & Breach Monitoring",
    category: "Digital Risk",
    shortDesc: "Track leaked corporate credentials, database dumps, and underground forum chatter.",
    fullDesc: "Continuous intelligence crawling across dark web forums, paste sites, and closed Telegram channels identifies compromised employee credentials, executive email leaks, and stolen corporate data before weaponization.",
    features: [
      "24/7 scanning of dark web marketplaces, forums, and botnet logs",
      "Instant breach alerts when corporate credentials or hashes appear",
      "Executive VIP monitoring for compromised personal and work accounts",
      "Supply chain and vendor breach exposure correlation",
      "Actionable remediation workflows to force password resets and session revocation"
    ],
    brands: ["CodeRed ASM"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    badge: "12 — Dark Web Monitoring"
  },
  {
    id: "13",
    code: "brand",
    title: "Executive Brand & Scam Defense",
    category: "Digital Risk",
    shortDesc: "Detect and expedite takedown of fraudulent impersonation domains, mobile apps, and phishing.",
    fullDesc: "Protect your corporate reputation, executive identity, and customers from fraudulent phishing portals, fake social media channels, and typosquatted domains imitating your brand.",
    features: [
      "Continuous typosquatting and impersonation domain registration radar",
      "Fake social media and fraudulent executive profile detection",
      "Rogue mobile app detection across third-party APK repositories",
      "Expedited global registrar and hosting takedown support",
      "Customer fraud protection analytics and phishing attack feeds"
    ],
    brands: ["CodeRed ASM"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    badge: "13 — Brand Defense"
  },
  {
    id: "14",
    code: "presales",
    title: "Local Pre-Sales Architecture",
    category: "Value-Added Services",
    shortDesc: "Direct engineering design, Bill of Materials sizing, and client POC setups.",
    fullDesc: "ELITECH's dedicated team of certified pre-sales solution architects in Phnom Penh assists reseller partners and corporate clients with solution design, product demonstrations, competitive benchmarking, and tailored sizing.",
    features: [
      "Free proof-of-concept (POC) installation and environment testing",
      "Architecture blueprinting and customized Bill of Materials (BOM)",
      "Technical RFP/tender compliance matrix preparation",
      "Live interactive software demonstrations in English and Khmer",
      "On-premise and cloud migration readiness assessments"
    ],
    brands: ["All Authorized Brands"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    badge: "14 — Pre-Sales Support"
  },
  {
    id: "15",
    code: "training",
    title: "Partner Training & Certification Lab",
    category: "Value-Added Services",
    shortDesc: "Regular technical bootcamps, engineer certifications, and hands-on lab environments.",
    fullDesc: "We invest directly in Cambodia's IT partner ecosystem. Our hands-on training center equips system integrators, reseller engineers, and corporate security teams with vendor-certified technical mastery.",
    features: [
      "Hands-on technical deployment workshops in Phnom Penh",
      "Official vendor engineer certification curriculum and exams",
      "Virtual lab sandboxes for malware simulation and EDR hunting",
      "Sales enablement and commercial deal positioning workshops",
      "Continuous product roadmap and feature update briefings"
    ],
    brands: ["ESET", "Safetica", "Sangfor", "PRE Security", "CodeRed ASM", "Hornet Security"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    badge: "15 — Partner Enablement"
  },
  {
    id: "16",
    code: "support",
    title: "Phnom Penh Tier-1 Engineering Support",
    category: "Value-Added Services",
    shortDesc: "Responsive local technical support, emergency escalation, and Khmer/English assistance.",
    fullDesc: "Eliminate the frustration of distant call centers. Our Phnom Penh technical support center provides direct phone, email, and on-site escalation for critical incidents with rapid response SLAs.",
    features: [
      "Direct phone and email escalation during Cambodian business hours",
      "Emergency incident response support for active ransomware outbreaks",
      "Bilingual technical support in Khmer and English",
      "Level-2 and Level-3 direct vendor escalation pipelines",
      "Post-implementation health checks and configuration audits"
    ],
    brands: ["All Authorized Brands"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "16 — Technical Support"
  }
];

export const solutionsData = allSolutionsData;

export const brandsData = [
  {
    id: "eset",
    name: "ESET",
    tagline: "Global Leader in Cybersecurity & Endpoint Protection",
    description: "Pioneer in multi-layered endpoint protection, EDR/XDR, and cloud email security. Protects millions of enterprise endpoints worldwide with ultra-low system footprint and award-winning detection engines.",
    categories: ["ESET PROTECT Enterprise", "ESET Inspect (EDR/XDR)", "Cloud Office Security for M365", "Endpoint & Full Disk Encryption", "Server & Virtualization Defense", "Threat Intelligence Services"],
    country: "European Union / Global",
    keyHighlight: "Over 30 years of cybersecurity innovation with global threat research laboratories.",
    logoColor: "#00857C",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "safetica",
    name: "Safetica",
    tagline: "Data Loss Prevention (DLP) & Insider Risk Management",
    description: "Comprehensive Data Loss Prevention (DLP) and insider threat management. Seamlessly classifies sensitive company assets and audits human factor risks across hybrid workflows without impeding business speed.",
    categories: ["Safetica ONE Enterprise DLP", "Safetica NXT Cloud DLP", "Insider Risk & Behavior Auditing", "Peripheral & USB Device Control", "Data Flow OCR & Document Tagging", "Regulatory Compliance (NBC & ISO 27001)"],
    country: "Czech Republic / Global",
    keyHighlight: "Context-aware DLP deployed in hours without steep operational learning curves.",
    logoColor: "#2F80ED",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hornet",
    name: "Hornet Security",
    tagline: "Next-Gen Cloud Security & Microsoft 365 Protection Suite",
    description: "Specialized next-gen cloud security and comprehensive Microsoft 365 protection suite encompassing spam, malware, phishing defense, automated backup, and tamper-proof email archiving.",
    categories: ["365 Total Protection Suite", "Advanced Threat Protection (ATP)", "Automated Email & Teams Backup", "10-Year Legally Compliant Archiving", "AI Phishing & BEC Interception", "Security Awareness Simulation Training"],
    country: "Germany / Global",
    keyHighlight: "99.9% spam & malware detection rate with automated deep sandboxing.",
    logoColor: "#FF6600",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pre",
    name: "PRE Security",
    tagline: "AI-Native SecOps & CyberAI™ Architecture",
    description: "Modernizing security operations with agentic AI architecture. Transforms how security analysts detect, investigate, and autonomously neutralize multi-stage cyber threats in real-time.",
    categories: ["CyberAI™ SecOps Platform", "Agentic Autonomous Alert Triage", "Interactive Root-Cause Investigation", "Autonomous Incident Playbook Execution", "SOC Workflow Modernization", "Continuous Threat Hunting Engines"],
    country: "United States / Global",
    keyHighlight: "10x faster incident triage powered by purpose-built SecOps AI agents.",
    logoColor: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "codered",
    name: "CodeRed ASM",
    tagline: "External Attack Surface Management & Digital Risk Protection",
    description: "Continuous outside-in scanning technology that illuminates shadow IT, exposed cloud databases, leaked credentials on dark web forums, and active scam domains imitating your brand.",
    categories: ["External Attack Surface Discovery", "Dark Web Leaked Credential Feeds", "Typosquatting & Scam Domain Radar", "VIP Executive Digital Identity Defense", "Fast Global Takedown Workflows", "API & SSL Certificate Expiry Watch"],
    country: "Singapore / Global",
    keyHighlight: "Zero-installation outside-in discovery of your entire organization's internet exposure.",
    logoColor: "#EF4444",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sangfor",
    name: "Sangfor Technologies",
    tagline: "Enterprise Cybersecurity & Converged Cloud Infrastructure",
    description: "Leading vendor of Next-Generation Firewalls (NGAF), Cyber Command NDR, Endpoint Secure, and Hyper-Converged Infrastructure (HCI) tailored for high-throughput enterprise scale.",
    categories: ["Next-Gen Application Firewall (NGAF)", "Cyber Command (NDR)", "Hyper-Converged Infrastructure (HCI)", "Endpoint Secure Multi-Layer Defense", "Secure Access Service Edge (SASE)", "Software-Defined Data Center"],
    country: "APAC / Global",
    keyHighlight: "Comprehensive converged security and high-availability infrastructure ecosystem.",
    logoColor: "#0EA5E9",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  }
];

export const industriesData = [
  {
    name: "Banking & Financial Services",
    description: "Stringent regulatory compliance, multi-tiered fraud prevention, core banking perimeter defense, and customer transaction protection.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["EDR/XDR", "Data Loss Prevention", "Dark Web Monitoring"],
    quote: "Bank-grade data confidentiality and real-time defense against targeted intrusions."
  },
  {
    name: "Microfinance (MFI)",
    description: "Securing distributed branch networks, field agent tablets, borrower data confidentiality, and cloud ledger synchronization.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["Endpoint Security", "Email Protection", "Device Encryption"],
    quote: "Affordable, enterprise-grade protection for expanding regional branch offices."
  },
  {
    name: "Enterprise & Conglomerates",
    description: "Unified cybersecurity architecture across diversified subsidiaries, multi-cloud environments, and complex supply chain networks.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["AI-Native SecOps", "Attack Surface Management", "XDR"],
    quote: "Centralized visibility and rapid response across thousands of enterprise seats."
  },
  {
    name: "Small & Medium Enterprises (SME)",
    description: "Lightweight, cloud-managed cybersecurity packages that deliver corporate-strength protection without requiring an in-house SOC.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["Cloud Endpoint", "M365 Email Defense", "Automated Backup"],
    quote: "Simple to deploy, robust protection that lets business owners focus on growth."
  },
  {
    name: "Government & Public Sector",
    description: "Sovereign data safeguards, mission-critical infrastructure resilience, and defense against nation-state cyber threats.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["DLP", "Network Security", "Threat Intelligence"],
    quote: "Guarding public institutional integrity and sensitive citizen records."
  },
  {
    name: "Trading, Logistics & Retail",
    description: "Protecting point-of-sale systems, ERP logistics portals, vendor communications, and e-commerce transactions from ransomware.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["Phishing Interception", "Endpoint Encryption", "ASM"],
    quote: "Uninterrupted supply chain continuity and secure B2B transaction channels."
  },
  {
    name: "Higher Education & Research",
    description: "Securing campus networks, student portals, research intellectual property, and BYOD endpoints across university environments.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["Cloud Security", "Web Filtering", "Ransomware Defense"],
    quote: "Open academic collaboration protected by intelligent perimeter boundaries."
  },
  {
    name: "Healthcare & Specialized Institutions",
    description: "Protecting patient electronic records, hospital operational technology (OT), and telemedicine communications against unauthorized leaks.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    solutionsHighlighted: ["Data Protection (DLP)", "Server Security", "Network Isolation"],
    quote: "Strict compliance safeguards for highly confidential diagnostic records."
  }
];

export const faqsData = [
  {
    q: "What does ELITECH Distributor do?",
    a: "ELITECH Distributor Co., Ltd. is a premier Cambodia-based technology value-added distributor specializing in enterprise cybersecurity, digital risk protection, and modern cloud infrastructure. We bridge global technology innovators with Cambodian enterprise clients through an extensive network of certified system integrators and reseller partners."
  },
  {
    q: "Which technology brands does ELITECH distribute?",
    a: "We are authorized distributors for globally recognized brands including ESET (Endpoint Security, EDR/XDR), Safetica (Data Loss Prevention & Insider Risk), Hornetsecurity (Cloud & Email Security), PRE Security (AI-Native SecOps & CyberAI™), CodeRed ASM (External Attack Surface & Dark Web Intelligence), and Sangfor Technologies (Next-Gen Firewalls & Cloud Infrastructure)."
  },
  {
    q: "Who can work with ELITECH?",
    a: "We work directly with IT System Integrators, Value-Added Resellers (VARs), Managed Service Providers (MSPs), Telcos, and Corporate IT departments seeking enterprise-grade cybersecurity solutions for their organizations or client accounts."
  },
  {
    q: "Do you provide partner training and certification?",
    a: "Yes. We provide continuous technical workshops, commercial sales bootcamps, and vendor certification programs for our partners' technical and sales teams, ensuring you have the expertise required to close deals and deploy seamlessly."
  },
  {
    q: "Do you provide technical support in Cambodia?",
    a: "Absolutely. Our certified local technical team in Phnom Penh provides pre-sales architecture design, Proof-of-Concept (POC) deployment, implementation guidance, and responsive Tier-1 and Tier-2 technical support during Cambodian business hours."
  },
  {
    q: "Which industries does ELITECH serve?",
    a: "Our portfolio protects organizations across Banking & Financial Services, Microfinance (MFI), Government & Public Sector, Large Conglomerates, SMEs, Logistics & Trading, Healthcare, and Higher Education across Cambodia."
  },
  {
    q: "How can I request a quotation or product demonstration?",
    a: "You can click the 'Request a Quote' button anywhere on our website, fill out our quick interactive form, or contact our team directly via email at info@elitech-dist.com or phone at +855 88 8888 218. We typically respond within 2 to 4 business hours."
  },
  {
    q: "How can I become an ELITECH authorized partner?",
    a: "Click on 'Become a Partner' in the navigation bar or Partner section to submit your partner application. Our partner channel manager will reach out to schedule an introduction meeting and provide your partner onboarding kit."
  }
];
