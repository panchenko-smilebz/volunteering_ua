import AboutSection from '@/components/About';
import AreasSection from '@/components/Areas';
import HeroSection from '@/components/Hero';
import JoinSection from '@/components/Join';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <JoinSection />
    </main>
  );
}
