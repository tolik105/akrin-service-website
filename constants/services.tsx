// constants/services.tsx
export type Category = 'Operate' | 'Protect' | 'Transform';

export interface Service {
  id: string;
  category: Category;
  title: string;
  summary: string;
  bullets: string[];
  outcome: string;
}

export const categories: Category[] = ['Operate', 'Protect', 'Transform'];

export const services: Service[] = [
  // OPERATE
  {
    id: 'helpdesk',
    category: 'Operate',
    title: '24/7 Bilingual Help-Desk (JP / EN)',
    summary:
      'Round-the-clock remote & on-site support delivered by certified engineers and AI-guided triage—so users get answers in seconds, not hours.',
    bullets: [
      '≤ 60 s first response (phone, email, Teams, Line)',
      'AI ticket summaries & script suggestions',
      'Live SLA dashboard for full transparency',
    ],
    outcome: '-35 % mean-time-to-resolution',
  },
  {
    id: 'dispatch',
    category: 'Operate',
    title: 'On-Site Support Dispatch',
    summary:
      'Rapid engineer dispatch anywhere in Kanto for hardware swaps, cabling, or emergency troubleshooting—backed by live GPS tracking and a 4-hour SLA.',
    bullets: [
      'Certified field technicians',
      'Spare-parts stock in Tokyo 23-ku',
      'Post-visit photo & config report',
    ],
    outcome: '100 % SLA hit rate (past 12 mo)',
  },
  {
    id: 'euc',
    category: 'Operate',
    title: 'End-User Device Lifecycle',
    summary:
      'One-stop procurement, zero-touch imaging, Intune hardening, and next-business-day replacements to keep employees productive from day one.',
    bullets: [
      'Bulk ordering & lease options',
      'Asset-tracking portal',
      'Same-day swap stock',
    ],
    outcome: '70 % faster onboarding',
  },

  // PROTECT
  {
    id: 'security-shield',
    category: 'Protect',
    title: 'Multi-Layer Security Shield',
    summary:
      'Unified endpoint, network, and cloud security stack tuned for Japan\'s threat landscape—deployed in days, monitored 24 × 7.',
    bullets: [
      'Sophos MDR / Cisco Umbrella',
      'Monthly vulnerability scans',
      'Incident-response run-book',
    ],
    outcome: 'Zero critical breaches since launch',
  },
  {
    id: 'data-destroy',
    category: 'Protect',
    title: 'Secure Data Destruction',
    summary:
      'NIST 800-88 wipe or 2 mm physical crush with APPI-compliant chain-of-custody and bilingual certificates for auditors.',
    bullets: [
      'On-site or sealed transport',
      'Serial-number video log',
      'JP / EN destruction certificate',
    ],
    outcome: '0 data-leak incidents',
  },
  {
    id: 'backup-bc',
    category: 'Protect',
    title: 'Backup & Business Continuity',
    summary:
      'Cloud-first and hybrid backup plans with automated disaster-recovery drills so you can meet customer RTO/RPO without sweating tape rotations.',
    bullets: [
      'Veeam + Wasabi or Azure targets',
      'Quarterly fail-over test',
      'Immutable ransomware vault',
    ],
    outcome: '< 15 min recovery time',
  },

  // TRANSFORM
  {
    id: 'office-move',
    category: 'Transform',
    title: 'Zero-Downtime Office Moves',
    summary:
      'Relocate the entire IT stack over a single weekend—staff log in Monday as if nothing changed.',
    bullets: [
      'Parallel build & user-acceptance test',
      'GPS-sealed crates',
      'Post-move hyper-care',
    ],
    outcome: '100 % migration uptime',
  },
  {
    id: 'wifi-rollout',
    category: 'Transform',
    title: 'Office Cabling & Wi-Fi Roll-outs',
    summary:
      'Ekahau-driven RF design, Cat 6A cabling, Cisco/Meraki Wi-Fi—installed and certified in occupied offices with minimal dust or downtime.',
    bullets: [
      'Predictive & on-site survey',
      'Fluke test reports',
      'Guest SSID with captive portal',
    ],
    outcome: '> 99.9 % Wi-Fi uptime',
  },
  {
    id: 'cloud-migration',
    category: 'Transform',
    title: 'Hybrid Cloud Migration',
    summary:
      'Move legacy servers to Azure or AWS without business disruption, using replication cut-overs and after-hours switch-overs.',
    bullets: [
      'Detailed run-books',
      'Cost-optimised landing zone',
      'Staff training & hand-off',
    ],
    outcome: '-30 % infrastructure cost YoY',
  },
];
