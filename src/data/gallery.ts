import type { GalleryImage } from '../types';

export const galleryData: GalleryImage[] = [
  {
    id: 'gal-milu-executive',
    title: 'Executive Professional Portrait',
    category: 'Profile & Leadership',
    src: '/assets/profile/milu-official-suit.jpg',
    alt: 'Milu Jiji professional corporate portrait in formal suit',
    description: 'Executive portrait of Milu Jiji, aspiring software developer, systems thinker, and Integrated MCA scholar at Amal Jyothi College of Engineering.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-ainsoft-desk',
    title: 'Ainsoft Solutions Engineering Workstation',
    category: 'Field & Industry',
    src: '/assets/gallery/milu-ainsoft-internship-workstation.png',
    alt: 'Milu Jiji at software engineering workstation at Ainsoft Solutions with GPS camera verification geotag',
    description: 'On-site software development at Ainsoft Solutions Pvt. Ltd., Thiruvananthapuram (Lat 8.501338° N, Long 76.968442° E), architecting backend REST endpoints and React user interfaces.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-azure-badge',
    title: 'Core Committee Medical Head — Azure Fest',
    category: 'Profile & Leadership',
    src: '/assets/gallery/milu-medical-committee-badge.jpg',
    alt: 'Official Amal Jyothi Students Council Azure Core Committee Medical lanyard badge',
    description: 'Official Students’ Council Core Committee leadership credentials for Azure, Amal Jyothi College’s apex intercollegiate cultural festival.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-college-portrait',
    title: 'Amal Jyothi Academic Portrait',
    category: 'Profile & Leadership',
    src: '/assets/profile/milu-college-portrait.png',
    alt: 'Milu Jiji college uniform portrait at Amal Jyothi College of Engineering',
    description: 'Academic portrait representing the Department of Computer Applications, Amal Jyothi College of Engineering (Autonomous).',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-cardora-arch',
    title: 'Cardora Agro-Climatic Telemetry Pipeline',
    category: 'Architecture',
    src: '/assets/gallery/arch-1.svg',
    alt: 'Cardora agro-climatic decision support architecture',
    description: 'System flow integrating real-time weather API polling, deterministic agronomic rule evaluation, and plot verification mapping for cardamom growers.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-growguide-arch',
    title: 'GrowGuide AWS Cloud Pipeline',
    category: 'Cloud & AI',
    src: '/assets/gallery/arch-2.svg',
    alt: 'GrowGuide machine learning and AWS architecture',
    description: 'Cloud architecture showing containerized Python/Flask compute tier on AWS EC2 paired with S3 model artifact storage.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-fullstack-arch',
    title: 'Full-Stack Concurrency & API Pipeline',
    category: 'Architecture',
    src: '/assets/gallery/arch-3.svg',
    alt: 'Full stack concurrency and transactional locking engine',
    description: 'Multi-tier architecture linking React virtual DOM state with Express middleware and MySQL row-level transactional locks.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-sih-arch',
    title: 'SIH Offline-First Sync Architecture',
    category: 'Systems Design',
    src: '/assets/gallery/arch-4.svg',
    alt: 'Smart India Hackathon offline learning architecture',
    description: 'Edge-caching architecture enabling continuous tribal student literacy on offline SQLite with automated cloud synchronization.',
    aspectRatio: 'landscape'
  }
];
