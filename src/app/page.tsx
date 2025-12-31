import {
  HeroSection,
  ServicesBentoSection,
  ValuePropositionHighlightSection,
  ProjectsParallaxSection,
  ProcessSection,
  ContactFormSection,
  FooterSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Secciones actuales del home-v2 */}
      <HeroSection />
      <ServicesBentoSection />
      <ValuePropositionHighlightSection />
      <ProcessSection />
      <ProjectsParallaxSection />
      <ContactFormSection />
      <FooterSection />

    </>
  )
}
