import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { GallerySection } from './components/GallerySection';
import { MindsetSection } from './components/MindsetSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MiluCompanion } from './components/MiluCompanion';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for navigation & mascot companion
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'journey',
      'achievements',
      'certificates',
      'gallery',
      'mindset',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-25% 0px -35% 0px',
      threshold: 0.15,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // GSAP ScrollTrigger subtle ambient reveal transitions
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headings = document.querySelectorAll('h2');
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020408] text-slate-100 selection:bg-[#00e5ff]/20 selection:text-[#00e5ff] overflow-x-hidden film-grain">
      {/* Top Floating Glass Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Cinematic Scroll Story */}
      <main>
        {/* 1. Opening Hero Cinematic Experience with Mascot Cameo */}
        <HeroSection />

        {/* 2. Who is Milu Jiji? Origins, Editorial Narrative & Interactive Academic Photo */}
        <AboutSection />

        {/* 3. Mindset & Technical Craft Landscape */}
        <SkillsSection />

        {/* 4. Projects as Interactive Worlds (Cardora Flagship Telemetry Simulator) */}
        <ProjectsSection />

        {/* 5. Temporal Continuum (Internships & Education Timeline) */}
        <JourneySection />

        {/* 6. Scholastic Honors & Leadership Milestones */}
        <AchievementsSection />

        {/* 7. Verified Accredited Certificates Archive (Unboxing Ceremony) */}
        <CertificatesSection />

        {/* 8. Authentic Photography — Life in Frames & System Diagrams */}
        <GallerySection />

        {/* 9. What Defines Me — 8 Core Working Principles */}
        <MindsetSection />

        {/* 10. Direct Dialogue, Resume & Contact */}
        <ContactSection />
      </main>

      {/* High-end Minimalist Footer */}
      <Footer />

      {/* Living Mascot Companion (Travels, Reacts, Speaks & Celebrates) */}
      <MiluCompanion activeSection={activeSection} />
    </div>
  );
}

export default App;
