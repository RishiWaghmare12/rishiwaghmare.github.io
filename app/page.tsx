import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResearchSection } from '@/components/ResearchSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ResearchSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
