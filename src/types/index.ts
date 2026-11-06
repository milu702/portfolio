export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Flagship' | 'Full Stack' | 'Cloud & AI' | 'Backend / API' | 'Hackathon';
  featured: boolean;
  status: 'Production / Deployed' | 'Academic Research' | 'Completed' | 'Hackathon Prototype';
  timeline: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  contributions: string[];
  challengesLearnings: string[];
  liveUrl?: string;
  githubUrl?: string;
  qrCodeUrl?: string;
  coverImage: string;
  secondaryImages?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    context: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  scoreOrRole?: string;
  highlightBadge?: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  certificateUrl?: string;
  iconType: 'work' | 'academic' | 'school';
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Academics' | 'Leadership' | 'Hackathon' | 'Extracurricular';
  year: string;
  details: string;
  impact: string;
  badge: string;
  stat?: { number: string; label: string };
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  pdfPath: string;
  category: 'Academic Honours' | 'Cloud & AI' | 'Software Engineering' | 'Agile & Management' | 'Data & AI' | 'Foundations' | string;
  skillsCovered: string[];
  summary: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Profile & Leadership' | 'Field & Industry' | 'Architecture' | 'Cloud & AI' | 'Systems Design' | string;
  src: string;
  alt: string;
  description: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}
