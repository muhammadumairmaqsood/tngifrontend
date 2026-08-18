import { Layout } from '@/components/layout/Layout';
import { HeroSection, ValueStrip } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { ProgrammesSection } from '@/components/home/ProgrammesSection';
import { PathwaySelectionSection } from '@/components/home/PathwaySelectionSection';
import { GallerySection } from '@/components/home/GallerySection';
import { MissionSection } from '@/components/home/MissionSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { AdmissionsCTA } from '@/components/home/AdmissionsCTA';
import { ContactSection } from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueStrip />
      <IntroSection />
      <ProgrammesSection />
      {/* <PathwaySelectionSection /> */}
      <GallerySection />
      <MissionSection />
      <FeaturesSection />
      <AdmissionsCTA />
      <ContactSection />
    </Layout>
  );
};

export default Index;
