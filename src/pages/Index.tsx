import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PillarsSection } from '@/components/PillarsSection';
import { GlobalSection } from '@/components/GlobalSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BusinessUnitsSection } from '@/components/BusinessUnitsSection';
import { SectorsSection } from '@/components/SectorsSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { PartnersSection } from '@/components/PartnersSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <GlobalSection />
      <ProjectsSection />
      <BusinessUnitsSection />
      <SectorsSection />
      <LeadershipSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
