import type { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-directors-honours',
    title: "Director's Honours & 6-Semester Continuous Distinction",
    subtitle: 'Amal Jyothi Autonomous Academic Excellence Award',
    category: 'Academics',
    year: '2022 – 2025',
    details: 'Conferred Honours certificates across six consecutive semesters (S1 through S6) of the Integrated MCA programme by the Director, Manager, and Principal of Amal Jyothi College of Engineering, achieving a peak SGPA of 9.30 in Semester 6.',
    impact: 'Consistently validated at the apex of the Department of Computer Applications on the official AES portal.',
    badge: 'Honours Roll',
    stat: { number: '9.30', label: 'Peak SGPA (S6)' }
  },
  {
    id: 'ach-gold-badge',
    title: 'AES Gold Achiever Badge (100 Points Milestone)',
    subtitle: 'Academic Enterprise Solutions Official Distinction',
    category: 'Academics',
    year: '2026',
    details: 'Awarded the prestigious Gold Achiever Badge through the Amal Jyothi AES Digital Credential system after crossing 100 verified milestone points across academic performance, peer guidance, and technical participation.',
    impact: 'Cryptographically verified on the official AES credentials engine (ID: XE1uRlI).',
    badge: 'Gold Achiever',
    stat: { number: '100', label: 'Verified Points' }
  },
  {
    id: 'ach-semester-ranks',
    title: 'Department Semester Ranks',
    subtitle: 'Rank 1 (S4) & Rank 2 (S3, S5, S7)',
    category: 'Academics',
    year: '2023 – 2025',
    details: 'Consistently secured top departmental ranks across consecutive semesters of the rigorous Integrated MCA curriculum, achieving Rank 1 in Semester 4 and Rank 2 in Semesters 3, 5, and 7.',
    impact: 'Reflects continuous mastery across algorithmic theory, database engineering, and software architectures.',
    badge: 'Rank 1 & 2',
    stat: { number: '4x', label: 'Top Ranks' }
  },
  {
    id: 'ach-space-apps',
    title: 'Galactic Problem Solver & Team Lead',
    subtitle: 'NASA International Space Apps Challenge 2024',
    category: 'Hackathon',
    year: '2024',
    details: 'Spearheaded an interdisciplinary engineering squad in NASA’s renowned global hackathon, coordinating problem dissection, telemetry dataset integration, and final software prototype submission.',
    impact: 'Orchestrated collaborative sprint execution under strict international time boundaries.',
    badge: 'NASA Lead',
    stat: { number: 'Global', label: 'NASA Hackathon' }
  },
  {
    id: 'ach-azure-medical',
    title: 'Head — Medical Core Committee',
    subtitle: "Amal Jyothi Azure Annual Intercollegiate Festival",
    category: 'Leadership',
    year: '2025',
    details: 'Appointed Head of the Medical Core Committee by the Amal Jyothi Students’ Council for "Azure", managing festival health infrastructure, emergency rapid-response teams, and campus safety for thousands of delegates.',
    impact: 'Coordinated emergency preparedness, volunteer first-aid deployment, and institutional medical liaison protocols.',
    badge: 'Core Committee',
    stat: { number: '5,000+', label: 'Delegates Safeguarded' }
  },
  {
    id: 'ach-ainsoft-internship',
    title: 'Software Engineering Industry Internship',
    subtitle: 'Ainsoft Solutions Pvt. Ltd., Thiruvananthapuram',
    category: 'Leadership',
    year: '2026',
    details: 'Engineered backend RESTful API endpoints, tested microservice integration with Postman, and developed responsive React interface components in a production commercial technology environment.',
    impact: 'Bridged academic computer science with real-world production deployment and team Git workflows.',
    badge: 'Ainsoft Intern',
    stat: { number: 'Production', label: 'REST APIs & React' }
  },
  {
    id: 'ach-class-rep',
    title: 'Class Representative (CR)',
    subtitle: 'Integrated MCA Student Leadership',
    category: 'Leadership',
    year: '2023 – Present',
    details: 'Elected as official student liaison representing the Integrated MCA cohort to the college administration, department head, and faculty council. Coordinated academic scheduling and student welfare.',
    impact: 'Bridged student perspectives with institutional governance to streamline departmental activities.',
    badge: 'Elected CR',
    stat: { number: '100+', label: 'Cohort Liaison' }
  },
  {
    id: 'ach-sih-tacticians',
    title: 'Team Lead — Tech Tacticians (SIH 2025)',
    subtitle: 'Smart India Hackathon 2025 (Problem SIH25140)',
    category: 'Hackathon',
    year: '2025',
    details: 'Led the Tech Tacticians team to author an innovative offline-first educational system designed for tribal student literacy, tackling language barriers and geographic connectivity deficits.',
    impact: 'Architected technical feasibility, offline caching protocols, and social empowerment blueprints.',
    badge: 'SIH 2025 Lead',
    stat: { number: 'SIH25140', label: 'Problem Solved' }
  },
  {
    id: 'ach-ncc',
    title: 'National Cadet Corps (NCC) Cadet',
    subtitle: 'Cadet Discipline & Civic Service Certificate',
    category: 'Extracurricular',
    year: 'Certified',
    details: 'Completed disciplined drill training, community outreach camps, disaster resilience workshops, and civic leadership programmes as an active National Cadet Corps cadet.',
    impact: 'Cultivated unwavering physical stamina, mental resilience, team cohesion, and selfless social responsibility.',
    badge: 'NCC Certified',
    stat: { number: 'Discipline', label: 'Civic Service' }
  }
];
