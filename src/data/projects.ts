import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'cardora',
    title: 'Cardora',
    tagline: 'Smart Digital Ecosystem for Cardamom Plantation Management & Decision Support',
    category: 'Flagship',
    featured: true,
    status: 'Production / Deployed',
    timeline: '2025 – 2026 (Academic Capstone)',
    role: 'Lead Architect & Full Stack Developer',
    description: 'Cardora is an intelligent agro-climatic decision support platform engineered specifically for high-range cardamom cultivators. It translates hyper-local weather telemetry, microclimate dynamics, and agronomic knowledge into actionable advisory schedules.',
    problem: 'Cardamom is an extraordinarily delicate cash crop that demands precise shade, balanced moisture, and strict humidity thresholds. Sudden rainfall anomalies or temperature spikes trigger devastating fungal blights (Azukal / capsule rot) and thrips infestations. Traditional farmers rely on subjective intuition, frequently suffering up to 40% crop loss due to misjudged irrigation and chemical interventions.',
    solution: 'Engineered a full-stack digital ecosystem that couples real-time weather API telemetry with calibrated agronomic rules. Cardora monitors ambient temperature, relative humidity, wind velocity, and rainfall patterns, synthesizing automated advisories for precision irrigation, fertilizer dosage, targeted organic/chemical pest management, and plot-specific microclimate reporting.',
    technologies: ['React 18', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Python', 'OpenWeatherMap Telemetry', 'Vercel', 'AWS Cloud'],
    keyFeatures: [
      'Real-time atmospheric telemetry and microclimate parameter tracking',
      'Rule-based agronomic inference engine for irrigation and fertilization timing',
      'Automated pest & disease warning radar (Azukal, capsule rot, thrips alerts)',
      'Plot boundary mapping & geo-spatial verification dossiers',
      'Automated downloadable intelligence reports for agricultural credit and audit',
      'Mobile-first responsive dashboard designed for field-level utility'
    ],
    contributions: [
      'Architected the full-stack system architecture and authored core RESTful API endpoints',
      'Designed and implemented the responsive dark/light operational UI using React and Tailwind CSS',
      'Engineered the weather telemetry ingestion pipeline and agronomic rule evaluation logic',
      'Implemented the dossier report generation system and deployed the production app to Vercel'
    ],
    challengesLearnings: [
      'Translating complex agricultural botany guidelines into deterministic, software-executable logic',
      'Handling asynchronous API limits and providing fallback offline caching for rural connectivity',
      'Optimizing performance across low-bandwidth mobile devices in remote agricultural terrains'
    ],
    liveUrl: 'https://cardora-kmat.vercel.app',
    githubUrl: 'https://github.com/milu702/Milu702',
    qrCodeUrl: '/assets/projects/cardora-qr.png',
    coverImage: '/assets/gallery/arch-1.svg',
    secondaryImages: [
      '/assets/gallery/arch-1.svg',
      '/assets/projects/cardora-qr.png'
    ],
    metrics: [
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Data Feeds', value: 'Real-time API' },
      { label: 'Target Terrain', value: 'Western Ghats, Kerala' }
    ]
  },
  {
    id: 'growguide',
    title: 'GrowGuide',
    tagline: 'Cloud-Enabled Agricultural Crop Recommendation Engine',
    category: 'Cloud & AI',
    featured: true,
    status: 'Completed',
    timeline: '2025',
    role: 'Cloud Architect & Backend Developer',
    description: 'An intelligent crop recommendation platform deployed on AWS that analyzes soil chemical composition (NPK values, pH levels) alongside localized weather patterns to guide farmers toward optimal crop selection and yield maximization.',
    problem: 'Smallholder farming communities often suffer from repeated crop failure because planting decisions are made without objective soil chemistry verification, resulting in soil degradation and financial insolvency.',
    solution: 'Designed and deployed an intelligent recommendation service running on an AWS cloud infrastructure. The application processes soil sensor inputs and historical meteorological records to produce ranked crop suitability recommendations with projected yields.',
    technologies: ['Python', 'Machine Learning / Scikit-Learn', 'Flask', 'AWS EC2', 'AWS S3', 'HTML5', 'CSS3', 'JavaScript'],
    keyFeatures: [
      'Multi-parameter soil analysis (Nitrogen, Phosphorus, Potassium, Soil pH)',
      'Climatic integration correlating rainfall forecasts with crop water needs',
      'Containerized backend deployed on scalable AWS EC2 compute instances',
      'Interactive visual dashboard providing actionable nutrient balance guidance'
    ],
    contributions: [
      'Developed data preprocessing routines and recommendation algorithms in Python',
      'Configured AWS EC2 virtual machines, security groups, and cloud deployment pipelines',
      'Built intuitive web client interface with clean visual data representation'
    ],
    challengesLearnings: [
      'Deploying and maintaining production web applications on AWS infrastructure',
      'Balancing computational overhead for fast inference responses on cloud tiers'
    ],
    githubUrl: 'https://github.com/milu702/Milu702',
    coverImage: '/assets/gallery/arch-2.svg',
    metrics: [
      { label: 'Cloud Infrastructure', value: 'AWS EC2 / S3' },
      { label: 'Core Language', value: 'Python' }
    ]
  },
  {
    id: 'turf-booking',
    title: 'Turf Booking System',
    tagline: 'High-Concurrency Dynamic Sports Ground Reservation Engine',
    category: 'Full Stack',
    featured: true,
    status: 'Completed',
    timeline: '2026',
    role: 'Full Stack Developer & API Integrator',
    description: 'A comprehensive web platform engineered for real-time sports turf reservations, slot scheduling, multi-turf administration, and automated user notification workflows.',
    problem: 'Sports ground facilities often experience double-booking collisions, unorganized phone-based scheduling, and manual cash tracking errors during peak evening and weekend slots.',
    solution: 'Built a full-stack platform featuring transactional database locking to ensure zero booking collisions, an interactive calendar time-slot matrix, and tiered role-based dashboards for athletes and ground managers.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Postman', 'Bootstrap'],
    keyFeatures: [
      'Live interactive hourly slot availability grid with dynamic status updates',
      'Atomic booking reservation engine preventing double-booking race conditions',
      'Manager portal with revenue analytics, slot lockout controls, and customer history',
      'User authentication, booking confirmation tokens, and receipt issuance'
    ],
    contributions: [
      'Developed system backend modules and engineered relational database schemas in MySQL',
      'Built frontend reservation components in React with responsive state handling',
      'Conducted end-to-end integration testing and Postman API contract verification'
    ],
    challengesLearnings: [
      'Resolving concurrent slot reservation conflicts through database transaction locks',
      'Building responsive time-grid UI components that remain smooth on mobile screens'
    ],
    githubUrl: 'https://github.com/milu702/Milu702',
    coverImage: '/assets/gallery/arch-3.svg',
    metrics: [
      { label: 'Stack', value: 'React + Node + MySQL' },
      { label: 'Concurrency', value: 'Conflict-Free' }
    ]
  },
  {
    id: 'cms-rest-api',
    title: 'CMS REST API Engine',
    tagline: 'Secure, Modular Headless Content Management API',
    category: 'Backend / API',
    featured: false,
    status: 'Completed',
    timeline: '2025',
    role: 'Backend Architect',
    description: 'A hardened, modular REST API engine built with PHP and MySQL, featuring token-based authentication, granular role authorization, and structured CRUD endpoints for distributed frontend clients.',
    problem: 'Modern content applications require decoupled, secure, and fast backend endpoints that allow diverse consumer interfaces (mobile, web) to interact with structured data without monolithic page overhead.',
    solution: 'Engineered a RESTful service adhering strictly to HTTP conventions, JSON request/response contracts, SQL injection prevention via prepared statements, and automated Postman test collections.',
    technologies: ['PHP', 'MySQL', 'RESTful API Architecture', 'Postman', 'Apache / XAMPP', 'Composer', 'JSON Web Tokens'],
    keyFeatures: [
      'Stateless token authentication and role-based permissions matrix',
      'Strict input sanitization, error interception, and standard HTTP status reporting',
      'Relational data schema with relational joins for content categorization',
      'Comprehensive Postman test collection verifying edge cases and auth guards'
    ],
    contributions: [
      'Architected normalized MySQL schema with foreign key constraints and indexes',
      'Authored secure PHP API endpoints and custom authentication middleware',
      'Documented endpoints and verified status responses across all CRUD methods'
    ],
    challengesLearnings: [
      'Deepened mastery of REST architectural constraints and stateless session security',
      'Enforcing defensive data validation and consistent JSON response schemas'
    ],
    githubUrl: 'https://github.com/milu702/Milu702',
    coverImage: '/assets/gallery/arch-3.svg',
    metrics: [
      { label: 'API Protocols', value: 'REST / JSON' },
      { label: 'Testing Tool', value: 'Postman' }
    ]
  },
  {
    id: 'sponza',
    title: 'Sponza Event Platform',
    tagline: 'Sponsorship Workflow & Cultural Fest Operations Engine',
    category: 'Full Stack',
    featured: false,
    status: 'Completed',
    timeline: '2024 – 2025',
    role: 'WordPress Plugin & Web Developer',
    description: 'A customized event management and sponsorship operations portal built for university cultural extravaganzas, enabling seamless sponsor tiering, proposal workflows, and public deliverables showcase.',
    problem: 'Major college festivals (including Amal Jyothi’s grand annual Azure fest) struggle with disorganized sponsor tracking, disjointed communication channels, and unverified deliverable placements.',
    solution: 'Built a customized WordPress architecture with bespoke plugins and responsive frontend templates to manage tier agreements, deliverables verification, and public sponsor directories.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Bootstrap', 'CSS3', 'MySQL'],
    keyFeatures: [
      'Tiered sponsorship directory with custom taxonomies and branding profiles',
      'Deliverables verification pipeline tracking banner placements and social rollouts',
      'Responsive visitor interface presenting schedule timelines and partner exhibits'
    ],
    contributions: [
      'Customized WordPress plugins and developed tailored PHP template hooks',
      'Styled fluid responsive interfaces using Bootstrap and custom CSS',
      'Configured database relations for sponsors, tier perks, and event schedules'
    ],
    challengesLearnings: [
      'Extending core CMS architectures with modular, update-safe custom code',
      'Coordinating technical deliverables under high-pressure live festival deadlines'
    ],
    githubUrl: 'https://github.com/milu702/Milu702',
    coverImage: '/assets/gallery/arch-1.svg',
    metrics: [
      { label: 'Context', value: 'College Cultural Fest' },
      { label: 'Role', value: 'Custom WP Arch' }
    ]
  },
  {
    id: 'tech-tacticians-sih',
    title: 'Online Street School for Tribal Students',
    tagline: 'Smart India Hackathon 2025 Prototype (Problem SIH25140)',
    category: 'Hackathon',
    featured: false,
    status: 'Hackathon Prototype',
    timeline: '2025',
    role: 'Team Lead (Tech Tacticians)',
    description: 'An offline-first educational platform developed for Smart India Hackathon 2025, engineered to deliver gamified, multilingual digital learning to tribal student communities experiencing chronic internet deficits.',
    problem: 'Government tribal students face severe economic obstacles, geographical isolation, language barriers with standard curricula, and erratic or absent internet connectivity in remote tribal settlements.',
    solution: 'Designed an offline-first mobile architecture featuring cached interactive learning modules, animated tribal-language conceptual videos, lightweight educational games, and seamless asynchronous synchronization when connectivity resumes.',
    technologies: ['React Native', 'Python', 'Django', 'SQLite (Offline Cache)', 'Firebase', 'Figma'],
    keyFeatures: [
      'Offline-first operational architecture caching lessons locally in SQLite',
      'Multilingual interface bridging regional tribal dialects with standard curriculum',
      'Gamified competency quizzes and interactive visual lesson units',
      'Asynchronous sync protocol uploading student progress when network is detected'
    ],
    contributions: [
      'Led the 6-member "Tech Tacticians" engineering team through ideation and technical pitch',
      'Architected the offline-first data sync strategy between SQLite and cloud storage',
      'Authored the technical feasibility, social impact model, and architectural presentation'
    ],
    challengesLearnings: [
      'Designing software under extreme constraints (zero-bandwidth, low-spec hardware)',
      'Balancing inclusive user experience with minimal device resource consumption'
    ],
    githubUrl: 'https://github.com/milu702/Milu702',
    coverImage: '/assets/gallery/arch-4.svg',
    metrics: [
      { label: 'Hackathon', value: 'Smart India 2025' },
      { label: 'Team', value: 'Tech Tacticians' }
    ]
  }
];

