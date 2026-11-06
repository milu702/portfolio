import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Core Programming',
    subtitle: 'Languages powering robust logic and backend algorithmic execution',
    iconName: 'Code',
    skills: [
      { name: 'Java', level: 'Strong', context: 'OOP principles, multi-threading, academic computing & algorithmic problem solving', highlight: true },
      { name: 'Python', level: 'Proficient', context: 'Data preprocessing, ML integrations in GrowGuide, scripting & Flask backends', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Strong', context: 'Modern asynchronous programming, DOM lifecycle, React state architectures', highlight: true },
      { name: 'PHP', level: 'Practical', context: 'Secure server-side REST API development, MySQL queries & WordPress plugins' }
    ]
  },
  {
    title: 'Frontend Engineering',
    subtitle: 'Crafting responsive, high-performance, and accessible user interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 'Strong', context: 'Hooks, component lifecycles, state management in Cardora & Turf Booking', highlight: true },
      { name: 'Tailwind CSS', level: 'Strong', context: 'Utility-first modern styling, responsive layouts, design tokens & dark themes', highlight: true },
      { name: 'HTML5 & Semantic Web', level: 'Proficient', context: 'Accessible DOM hierarchy, SEO best practices, structured metadata' },
      { name: 'CSS3 & Motion', level: 'Proficient', context: 'Flexbox, CSS Grid, keyframe transitions, micro-interactions & glassmorphism' },
      { name: 'Bootstrap', level: 'Practical', context: 'Rapid prototyping and responsive layout grids in production systems' }
    ]
  },
  {
    title: 'Backend & API Architecture',
    subtitle: 'Designing scalable services, authentication flows, and data pipelines',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 'Strong', context: 'RESTful API routing, asynchronous middleware, JSON payloads', highlight: true },
      { name: 'REST API Design', level: 'Strong', context: 'Stateless endpoints, HTTP status codes, error interception & contract modeling', highlight: true },
      { name: 'API Integration', level: 'Strong', context: 'Third-party telemetry (OpenWeather API), geolocation data & client hooks', highlight: true },
      { name: 'Authentication & Auth', level: 'Proficient', context: 'Token-based session management, role guards & input validation' }
    ]
  },
  {
    title: 'Databases & Storage',
    subtitle: 'Structuring transactional integrity and document-oriented persistence',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 'Strong', context: 'Relational schemas, foreign keys, complex joins, transactions & index optimization', highlight: true },
      { name: 'MongoDB', level: 'Proficient', context: 'Document modeling, aggregation pipelines, flexible document storage in Cardora', highlight: true },
      { name: 'SQL Fundamentals', level: 'Strong', context: 'Query optimization, ACID compliance, data integrity constraints' }
    ]
  },
  {
    title: 'Cloud, DevOps & Tooling',
    subtitle: 'Deploying, testing, and collaborating across modern developer ecosystems',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS Cloud Fundamentals', level: 'Certified', context: 'EC2 instances, S3 buckets, security groups, basic cloud architecture', highlight: true },
      { name: 'Git & GitHub', level: 'Strong', context: 'Branching strategies, collaborative pull requests, merge conflict resolution', highlight: true },
      { name: 'Postman', level: 'Proficient', context: 'API contract testing, environment variables, automated response assertions', highlight: true },
      { name: 'Selenium', level: 'Practical', context: 'Automated functional browser testing & UI test validation suites' },
      { name: 'WordPress & CMS', level: 'Practical', context: 'Plugin architecture, custom taxonomies, dynamic template rendering' },
      { name: 'XAMPP & Composer', level: 'Practical', context: 'Local Apache environment configuration, PHP package dependency management' }
    ]
  },
  {
    title: 'Computer Science Foundations',
    subtitle: 'The theoretical pillars underpinning maintainable software craftsmanship',
    iconName: 'Cpu',
    skills: [
      { name: 'Object-Oriented Design', level: 'Strong', context: 'Encapsulation, inheritance, polymorphism, clean architectural boundaries', highlight: true },
      { name: 'Data Structures', level: 'Proficient', context: 'Arrays, linked lists, trees, graphs, sorting & search complexity analysis', highlight: true },
      { name: 'Database Management (DBMS)', level: 'Strong', context: 'Normalization (1NF-BCNF), transaction concurrency & recovery models' },
      { name: 'Agile & Scrum Methodologies', level: 'Certified', context: 'Sprint planning, backlog refinement, standups, iterative delivery cycles', highlight: true }
    ]
  }
];

export const mindsetStatements = [
  {
    title: "Pragmatic Problem Decomposition",
    statement: "Breaking ambiguous, multifaceted challenges into deterministic, measurable engineering milestones.",
    context: "Applied when breaking down the multidimensional agro-climatic challenges of Cardora into discrete weather API consumers, rule calculators, and UI visualizers."
  },
  {
    title: "Empathetic Technical Communication",
    statement: "Translating complex computational concepts into clear, actionable vocabulary for non-technical users.",
    context: "Developed while teaching Mathematics and Science to school students at Vijayamatha, refining the patience needed for clear documentation."
  },
  {
    title: "Collaborative Team Leadership",
    statement: "Fostering inclusive ownership, clear task delegation, and calm execution under high-pressure deadlines.",
    context: "Demonstrated as Team Lead for the NASA Space Apps Challenge and SIH Tech Tacticians, steering multidisciplinary teams to completion."
  },
  {
    title: "Rigorous Defensive Craftsmanship",
    statement: "Prioritizing validation, boundary checking, and edge-case testing before calling a feature done.",
    context: "Practiced during Ainsoft Solutions internship, verifying REST endpoints with strict Postman assertion tests."
  }
];
