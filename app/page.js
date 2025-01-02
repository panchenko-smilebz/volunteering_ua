import AboutSection from '@/components/About';
import AreasSection from '@/components/Areas';
import HeroSection from '@/components/Hero';
import JoinSection from '@/components/Join';
import RequisitesSection from '@/components/Requisites';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <JoinSection />
      <RequisitesSection />
    </main>
  );
}
