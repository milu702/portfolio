import type { CertificateItem } from '../types';

export const certificatesData: CertificateItem[] = [
  // Academic Honours (Verified by AES AJCE)
  {
    id: 'cert-ajce-honours',
    title: "Director's, Manager's & Principal's Honours Awards (Semesters 1 – 6)",
    issuer: 'Amal Jyothi College of Engineering (Autonomous)',
    issueDate: '2022 – 2025',
    credentialId: 'QUxmdDhuS0F4SkNVZlB2R1BWbjRsQT09',
    verificationUrl: 'https://www.aesajce.in/honourcertificates.php?id=QUxmdDhuS0F4SkNVZlB2R1BWbjRsQT09',
    pdfPath: '/assets/certificates/MILU JIJI CERTIFICATES.pdf',
    category: 'Academic Honours',
    skillsCovered: [
      'Continuous Academic Distinction (Top Tier Department Bracket)',
      'Semester 6 SGPA: 9.30 (Director’s Honours Award)',
      'Semester 5 SGPA: 8.64 (Director’s Honours Award)',
      'Semester 4 SGPA: 8.70 (Director’s Honours Award)',
      'Semester 3 SGPA: 8.57 (Director’s Honours Award)',
      'Semester 2 SGPA: 8.50 (Manager’s Honours Award)',
      'Semester 1 SGPA: 8.18 (Principal’s Honours Award)'
    ],
    summary: 'Autonomous institution honours conferred across six consecutive semesters of the Integrated MCA programme, recognizing continuous scholastic distinction with semester SGPA reaching 9.30.'
  },
  {
    id: 'cert-ajce-gold-badge',
    title: 'Gold Achiever Badge — 100 Points Milestone',
    issuer: 'Academic Enterprise Solutions (AES AJCE)',
    issueDate: 'September 2026',
    credentialId: 'XE1uRlI',
    verificationUrl: 'https://badges.aesajce.in/s/XE1uRlI',
    pdfPath: '/assets/certificates/MILU JIJI CERTIFICATES.pdf',
    category: 'Academic Honours',
    skillsCovered: [
      'Academic Distinction & Institutional Engagement',
      'Departmental Student Leadership & Peer Mentorship',
      'Technical & Co-Curricular Activity Milestones',
      '100 Verified AES Achievement Points'
    ],
    summary: 'Institutional distinction awarded through the Amal Jyothi AES Digital Badge system recognizing 100 accumulated milestone points for academic and student leadership excellence.'
  },

  // Cloud & AI
  {
    id: 'cert-oracle-ai',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle Corporation',
    issueDate: '2025',
    category: 'Cloud & AI',
    skillsCovered: [
      'Artificial Intelligence Core Concepts',
      'Machine Learning & Deep Neural Networks',
      'Generative AI & Large Language Models (LLMs)',
      'OCI AI Services (Vision, Language, Document Understanding)',
      'Responsible & Ethical AI Practices'
    ],
    pdfPath: '/assets/certificates/oracle-ai-badge.jpeg',
    summary: 'Demonstrates foundational mastery of modern artificial intelligence architectures, machine learning workflows, and enterprise cloud AI deployment within the Oracle Cloud Infrastructure ecosystem.'
  },
  {
    id: 'cert-aws-cloud-essentials',
    title: 'AWS Cloud Essentials — Knowledge Badge Readiness Path',
    issuer: 'Amazon Web Services Training & Certification',
    issueDate: '2025',
    category: 'Cloud & AI',
    pdfPath: '/assets/certificates/cloud.pdf',
    skillsCovered: [
      'AWS Cloud Architecture Principles',
      'Compute Services (Amazon EC2, AWS Lambda)',
      'Storage Solutions (Amazon S3, EBS, EFS)',
      'Virtual Private Cloud (VPC) & Security Groups',
      'Identity & Access Management (IAM)'
    ],
    summary: 'Official Amazon Web Services training path verifying deep understanding of resilient cloud hosting, multi-tier isolation, serverless computing, and AWS identity governance.'
  },
  {
    id: 'cert-aws-fundamentals',
    title: 'AWS Fundamentals: Addressing Cloud Architecture',
    issuer: 'Amazon Web Services (via Coursera)',
    issueDate: '2025',
    credentialId: 'MJTH1T11AGUC',
    verificationUrl: 'https://coursera.org/verify/MJTH1T11AGUC',
    pdfPath: '/assets/certificates/Coursera-Certificate-1.pdf',
    category: 'Cloud & AI',
    skillsCovered: [
      'AWS Compute & Elastic Load Balancing',
      'Storage & High Availability Architectures',
      'Multi-AZ Redundancy & Disaster Recovery',
      'Virtual Private Cloud (VPC) & Security Groups'
    ],
    summary: 'Official Amazon Web Services certification validating core principles of scalable cloud hosting, network isolation, identity governance, and high-availability application deployment on AWS.'
  },

  // Agile & Management
  {
    id: 'cert-scrum-fundamentals',
    title: 'Scrum Fundamentals Certified (SFC™)',
    issuer: 'SCRUMstudy / VMEdu Global Body',
    issueDate: '2024',
    credentialId: '1068866',
    verificationUrl: 'https://www.scrumstudy.com/certification/verify?certificationNumber=1068866',
    category: 'Agile & Management',
    skillsCovered: [
      'Scrum Roles (Scrum Master, Product Owner, Dev Team)',
      'Sprint Ceremonies & Timeboxing',
      'Product Backlog Refinement & User Story Mapping',
      'Velocity Metrics & Burndown Tracking',
      'Empirical Process Control & Retrospectives'
    ],
    pdfPath: '/assets/certificates/ScrumFundamentalsCertified-MiluJiji-1068866 (1).pdf',
    summary: 'Professional credential attesting to rigorous understanding of Agile delivery frameworks, sprint cycles, retrospective mechanics, and collaborative team productivity.'
  },

  // Software Engineering & Real-World Projects
  {
    id: 'cert-nasa-space-apps',
    title: 'Galactic Problem Solver — NASA Space Apps Challenge',
    issuer: 'NASA (National Aeronautics and Space Administration)',
    issueDate: 'October 2024',
    category: 'Software Engineering',
    skillsCovered: [
      'Global Hackathon Leadership',
      'Planetary & Earth Telemetry Data Analysis',
      'Rapid Software Prototyping',
      'Interdisciplinary Problem Decomposition',
      'Collaborative Engineering Under Time Constraints'
    ],
    pdfPath: '/assets/certificates/NASA Space Apps Challenge-certificate.pdf',
    summary: 'Recognized as a Galactic Problem Solver and Team Lead in NASA’s worldwide hackathon, tackling complex real-world data challenges.'
  },
  {
    id: 'cert-ainsoft-internship',
    title: 'Software Engineering Internship — Backend & React',
    issuer: 'Ainsoft Solutions Pvt. Ltd.',
    issueDate: 'July 2026',
    category: 'Software Engineering',
    skillsCovered: [
      'RESTful API Development & Architecture',
      'React.js Component Design & State Handling',
      'Asynchronous Data Fetching & Integration',
      'Postman Endpoint Verification & Testing',
      'Production Codebase Collaboration'
    ],
    pdfPath: '/assets/certificates/Ainsoft_Internship_Certificate.pdf',
    summary: 'Formal industry certificate acknowledging successful execution of backend REST API features and responsive React interface engineering for real-world client platforms.'
  },
  {
    id: 'cert-vijayamatha-internship',
    title: 'Teaching & Website Management Internship',
    issuer: 'Vijayamatha Public School',
    issueDate: 'July 2025',
    category: 'Software Engineering',
    skillsCovered: [
      'Institutional Website Maintenance & UI Optimization',
      'STEM Pedagogy & Classroom Mentorship',
      'Digital Navigation & Accessibility',
      'Content Management & Educational Tech'
    ],
    pdfPath: '/assets/certificates/Vijayamatha_Internship_Certificate.pdf',
    summary: 'Formal certificate for maintaining and restructuring the school digital portal and conducting interactive STEM instructional sessions for classes 5 to 7.'
  },
  {
    id: 'cert-rdbms-sql',
    title: 'Relational Database Management Systems & SQL',
    issuer: 'Technical Training & Certification Council',
    issueDate: '2024',
    category: 'Software Engineering',
    skillsCovered: [
      'Relational Schema Design & Normalization (3NF)',
      'Complex SQL Queries, Subqueries & Joins',
      'ACID Properties & Transaction Concurrency',
      'Database Indexing & Query Execution Plans'
    ],
    pdfPath: '/assets/certificates/rdbms.pdf',
    summary: 'Comprehensive certification covering relational data models, ACID transaction guarantees, index tuning, and robust SQL querying.'
  },
  {
    id: 'cert-java-development',
    title: 'Java Object-Oriented Software Development',
    issuer: 'Technical Training & Certification Council',
    issueDate: '2024',
    category: 'Software Engineering',
    skillsCovered: [
      'Object-Oriented Design (Polymorphism, Inheritance, Encapsulation)',
      'Java Collections Framework',
      'Exception Handling & Thread Concurrency',
      'JDBC & Database Connectivity'
    ],
    pdfPath: '/assets/certificates/java.pdf',
    summary: 'Rigorous object-oriented software engineering certification in Java, covering robust data structures and multithreaded design patterns.'
  },
  {
    id: 'cert-python-dev',
    title: 'Python Programming for Systems & Data Science',
    issuer: 'Technical Training & Certification Council',
    issueDate: '2024',
    category: 'Software Engineering',
    skillsCovered: [
      'Python Functional & Object-Oriented Paradigms',
      'Data Manipulation with NumPy & Pandas',
      'API Consumption & JSON Serialization',
      'Algorithmic Problem Solving'
    ],
    pdfPath: '/assets/certificates/python1.pdf',
    summary: 'Practical Python certification covering algorithmic problem-solving, structured data manipulation, and modular coding.'
  },

  // Data & AI (Infosys Springboard)
  {
    id: 'cert-infosys-ai-primer',
    title: 'Artificial Intelligence Primer Certification',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    verificationUrl: 'https://verify.onwingspan.com',
    category: 'Data & AI',
    skillsCovered: [
      'Artificial Intelligence Principles & Evolution',
      'Supervised, Unsupervised & Reinforcement Learning',
      'Search Heuristics & Knowledge Graphs',
      'Responsible AI Deployment'
    ],
    pdfPath: '/assets/certificates/1-121a65ca-1112-4c29-ab10-40714dd640fb.pdf',
    summary: 'Enterprise-accredited AI primer by Infosys verifying foundational artificial intelligence mechanics and algorithmic heuristics.'
  },
  {
    id: 'cert-infosys-deep-learning',
    title: 'Introduction to Deep Learning & Neural Computation',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    verificationUrl: 'https://verify.onwingspan.com',
    category: 'Data & AI',
    skillsCovered: [
      'Artificial Neural Networks (ANN)',
      'Backpropagation & Gradient Descent Optimization',
      'Activation Functions (ReLU, Softmax, Sigmoid)',
      'Convolutional & Recurrent Architectures'
    ],
    pdfPath: '/assets/certificates/1-4d53cde8-5e99-44e4-b4e6-bdb259a61da9.pdf',
    summary: 'Rigorous neural computation course covering perceptron layers, backpropagation gradient mathematics, and deep architecture tuning.'
  },
  {
    id: 'cert-infosys-nlp',
    title: 'Introduction to Natural Language Processing (NLP)',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    verificationUrl: 'https://verify.onwingspan.com',
    category: 'Data & AI',
    skillsCovered: [
      'Text Tokenization, Stemming & Lemmatization',
      'TF-IDF & Word Vector Embeddings',
      'Sentiment Analysis & Intent Classification',
      'Language Modeling Foundations'
    ],
    pdfPath: '/assets/certificates/1-55abf44d-0ede-4aa6-adf1-fba393fe69a0.pdf',
    summary: 'Specialized training in computational linguistics, vector representation of natural language, and semantic sentiment modeling.'
  },
  {
    id: 'cert-infosys-computer-vision',
    title: 'Computer Vision 101 — Digital Image Processing',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    verificationUrl: 'https://verify.onwingspan.com',
    category: 'Data & AI',
    skillsCovered: [
      'Digital Image Processing Fundamentals',
      'Edge Detection & Convolution Filtering',
      'Object Detection & Feature Extraction',
      'OpenCV Image Manipulation Pipelines'
    ],
    pdfPath: '/assets/certificates/1-afc49c48-ae54-4e64-81b3-bb6c05059e05.pdf',
    summary: 'Foundational computer vision course covering pixel matrices, spatial transformations, convolutional edge filters, and feature extraction.'
  },
  {
    id: 'cert-infosys-data-science',
    title: 'Introduction to Data Science & Analytics',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    verificationUrl: 'https://verify.onwingspan.com',
    category: 'Data & AI',
    skillsCovered: [
      'Exploratory Data Analysis (EDA)',
      'Statistical Distributions & Probability',
      'Data Cleaning & Feature Engineering',
      'Hypothesis Testing & Visualization'
    ],
    pdfPath: '/assets/certificates/1-e2646891-abc8-453b-8a57-efce1cc36fff.pdf',
    summary: 'Data science methodologies including dataset sanitization, exploratory descriptive metrics, and hypothesis validation.'
  },

  // Foundations & Systems
  {
    id: 'cert-open-university',
    title: 'An Introduction to Computers and Computer Systems',
    issuer: 'The Open University (UK) / OpenLearn',
    issueDate: '2024',
    category: 'Foundations',
    skillsCovered: [
      'Von Neumann Computer Architecture',
      'Processor Micro-architecture & Cache Systems',
      'Memory Hierarchies & Bus Interfaces',
      'Operating System Kernel Abstractions'
    ],
    pdfPath: '/assets/certificates/co.certificate.pdf',
    summary: 'Accreditation from The Open University UK covering processor instruction cycles, memory management, and digital computer architecture.'
  },
  {
    id: 'cert-great-learning',
    title: 'Professional Technical Competencies & Computing Logic',
    issuer: 'Great Learning Academy',
    issueDate: '2024',
    credentialId: 'HTTUZLLH',
    category: 'Foundations',
    skillsCovered: [
      'Algorithm Design & Computational Logic',
      'Modern Software Development Lifecycle',
      'Data Structures & Complexity Analysis'
    ],
    pdfPath: '/assets/certificates/Milu Jiji (1).pdf',
    summary: 'Verified credential issued by Great Learning Academy recognizing technical excellence in computational problem solving.'
  },
  {
    id: 'cert-cybersecurity-defense',
    title: 'Introduction to Cybersecurity Careers & Defense',
    issuer: 'Coursera / Industry Security Council',
    issueDate: '2024',
    category: 'Foundations',
    skillsCovered: [
      'Threat Modeling & Vulnerability Vectors',
      'Network Traffic Security & TLS Encryption',
      'Authentication Guards & Identity Defenses',
      'OWASP Web Security Principles'
    ],
    pdfPath: '/assets/certificates/Coursera-Certificate-2.pdf',
    summary: 'Foundational security credential covering risk identification, defensive web protocols, data privacy safeguards, and secure SDLC practices.'
  }
];
