import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { PanelImageDouble } from '@/components/PanelImageDouble/PanelImageDouble';
import { CardIconGrid } from '@/components/CardIconGrid/CardIconGrid';
import { Footer } from '@/components/Footer/Footer';

export function FigmaPage() {
  return (
    <div className="min-w-[1200px]">
      <Header />
      <HeroSection />
      <PanelImageDouble />
      <CardIconGrid />
      <Footer />
    </div>
  );
}
