import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import TechnologySection from '@/components/TechnologySection';
import TokenomicsSection from '@/components/TokenomicsSection';
import TeamSection from '@/components/TeamSection';
import RoadmapSection from '@/components/RoadmapSection';
import WhitepaperSection from '@/components/WhitepaperSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
      <HeroSection />
      <VisionSection />
      <TechnologySection />
      <TokenomicsSection />
      <TeamSection />
      <RoadmapSection />
      <WhitepaperSection />
      <Footer />
    </div>
  );
}