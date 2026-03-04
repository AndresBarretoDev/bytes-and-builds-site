import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection, ServicesBentoWrapper, ProjectsParallaxSection } from '@/components/sections'

// Client Components loaded lazily — defers their JS bundles until after hero renders
const ValuePropositionHighlightSection = dynamic(() =>
  import('@/components/sections/value-proposition-highlight-section').then(
    (m) => ({ default: m.ValuePropositionHighlightSection })
  )
)
const ProcessSection = dynamic(() =>
  import('@/components/sections/process-section').then((m) => ({
    default: m.ProcessSection,
  }))
)
const ContactFormSection = dynamic(() =>
  import('@/components/sections/contact-form-section').then((m) => ({
    default: m.ContactFormSection,
  }))
)
const FooterSection = dynamic(() =>
  import('@/components/sections/footer-section').then((m) => ({
    default: m.FooterSection,
  }))
)

export default function Home() {
  return (
    <>
      {/* Above the fold — loads immediately */}
      <HeroSection />

      {/* Server Components wrapped in Suspense to enable streaming */}
      <Suspense>
        <ProjectsParallaxSection />
      </Suspense>
      <Suspense>
        <ServicesBentoWrapper />
      </Suspense>

      {/* Client Components deferred via dynamic() */}
      <ValuePropositionHighlightSection />
      <ProcessSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}
