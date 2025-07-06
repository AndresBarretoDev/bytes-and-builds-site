import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/ui/logo';
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  SlideInUp,
  ScaleIn,
  HoverScale,
  CardHover,
  StaggerContainer,
  StaggerItem,
  HeroSlide,
  ButtonScale,
} from '@/components/ui/animated';
import {
  HeroSection,
  ServicesSection,
  ValuePropositionSection,
  ProcessSection
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValuePropositionSection />
      <ProcessSection />
    </>
  );
}
