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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo and theme toggle */}
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <FadeInLeft delay={0.1}>
          <Logo size="lg" priority />
        </FadeInLeft>
        <FadeInRight delay={0.2}>
          <ThemeToggle />
        </FadeInRight>
      </header>

      {/* Main content */}
      <main className="container mx-auto space-y-16 px-4 py-12">
        {/* Hero Section - Animation Showcase */}
        <section className="space-y-8 text-center">
          <HeroSlide delay={0.3}>
            <div className="space-y-6">
              <h1 className="text-display text-brand-gradient">
                Bytes & Builds
              </h1>
              <FadeInUp delay={0.5}>
                <p className="text-heading-2 text-muted-foreground">
                  Desarrollo Web y Automatización Empresarial
                </p>
              </FadeInUp>
              <FadeInUp delay={0.7}>
                <p className="text-body mx-auto max-w-2xl">
                  Especialistas en soluciones tecnológicas para PyMEs. Llevamos
                  tu negocio al siguiente nivel con desarrollo web profesional y
                  automatización de procesos.
                </p>
              </FadeInUp>
            </div>
          </HeroSlide>

          {/* Animation System Demo */}
          <FadeIn delay={0.9}>
            <div className="space-y-8 py-8">
              <h3 className="text-heading-3">Sistema de Animaciones</h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <FadeInUp delay={1.0}>
                  <div className="rounded-lg border bg-card p-4 text-center">
                    <h4 className="text-body mb-2 font-medium">Fade In Up</h4>
                    <p className="text-sm text-muted-foreground">
                      Animación suave desde abajo
                    </p>
                  </div>
                </FadeInUp>

                <FadeInLeft delay={1.1}>
                  <div className="rounded-lg border bg-card p-4 text-center">
                    <h4 className="text-body mb-2 font-medium">Fade In Left</h4>
                    <p className="text-sm text-muted-foreground">
                      Animación desde la izquierda
                    </p>
                  </div>
                </FadeInLeft>

                <FadeInRight delay={1.2}>
                  <div className="rounded-lg border bg-card p-4 text-center">
                    <h4 className="text-body mb-2 font-medium">
                      Fade In Right
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Animación desde la derecha
                    </p>
                  </div>
                </FadeInRight>

                <ScaleIn delay={1.3}>
                  <div className="rounded-lg border bg-card p-4 text-center">
                    <h4 className="text-body mb-2 font-medium">Scale In</h4>
                    <p className="text-sm text-muted-foreground">
                      Animación con escalado
                    </p>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Services Preview with Stagger Animation */}
        <SlideInUp delay={1.4}>
          <section className="space-y-8 text-center">
            <h2 className="text-heading-1">Nuestros Servicios</h2>
            <StaggerContainer delay={1.5}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <StaggerItem>
                  <CardHover className="space-y-4 rounded-lg border bg-card p-6">
                    <h3 className="text-heading-3 text-brand-primary">
                      Desarrollo Web
                    </h3>
                    <p className="text-body text-muted-foreground">
                      Sitios web profesionales y aplicaciones modernas con las
                      últimas tecnologías.
                    </p>
                  </CardHover>
                </StaggerItem>

                <StaggerItem>
                  <CardHover className="space-y-4 rounded-lg border bg-card p-6">
                    <h3 className="text-heading-3 text-brand-accent">
                      Automatización
                    </h3>
                    <p className="text-body text-muted-foreground">
                      Optimizamos procesos empresariales con soluciones
                      automatizadas.
                    </p>
                  </CardHover>
                </StaggerItem>

                <StaggerItem>
                  <CardHover className="space-y-4 rounded-lg border bg-card p-6">
                    <h3 className="text-heading-3 text-brand-blue">
                      Integración
                    </h3>
                    <p className="text-body text-muted-foreground">
                      Conectamos sistemas existentes para mayor eficiencia
                      operacional.
                    </p>
                  </CardHover>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>
        </SlideInUp>

        {/* Interactive Elements Demo */}
        <FadeInUp delay={1.8}>
          <section className="space-y-8 text-center">
            <h2 className="text-heading-2">Elementos Interactivos</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <HoverScale>
                <div className="rounded-lg bg-brand-primary p-4 text-brand-white">
                  <p className="text-body font-medium">Hover Scale</p>
                </div>
              </HoverScale>

              <ButtonScale>
                <div className="rounded-lg bg-brand-accent p-4 text-brand-white">
                  <p className="text-body font-medium">Button Scale</p>
                </div>
              </ButtonScale>

              <CardHover>
                <div className="rounded-lg bg-brand-blue p-4 text-brand-white">
                  <p className="text-body font-medium">Card Hover</p>
                </div>
              </CardHover>
            </div>
          </section>
        </FadeInUp>

        {/* Lenis Smooth Scroll Demo */}
        <FadeInUp delay={1.9}>
          <section className="space-y-8 rounded-lg bg-muted/50 py-16 text-center">
            <h2 className="text-heading-2">
              🚀 Experiencia Lenis Smooth Scroll
            </h2>
            <p className="text-body-large mx-auto max-w-3xl">
              Experimenta la navegación fluida y elegante con{' '}
              <strong>Lenis</strong>. Cada scroll es una experiencia premium que
              mantiene a los usuarios comprometidos.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <FadeInLeft delay={2.0}>
                <div className="space-y-4 text-left">
                  <h3 className="text-heading-3">✨ Características Premium</h3>
                  <ul className="text-body space-y-2">
                    <li>• Normaliza todas las entradas de usuario</li>
                    <li>• Performance optimizada y lightweight</li>
                    <li>• Respeta automáticamente prefer-reduced-motion</li>
                    <li>• Integración perfecta con Motion</li>
                  </ul>
                </div>
              </FadeInLeft>
              <FadeInRight delay={2.1}>
                <div className="space-y-4 text-left">
                  <h3 className="text-heading-3">🎯 Ventajas de Negocio</h3>
                  <ul className="text-body space-y-2">
                    <li>• Mayor tiempo de permanencia</li>
                    <li>• Experiencia de usuario premium</li>
                    <li>• Diferenciación competitiva</li>
                    <li>• Percepción de calidad superior</li>
                  </ul>
                </div>
              </FadeInRight>
            </div>
          </section>
        </FadeInUp>

        {/* Scroll Progress Demo */}
        <SlideInUp delay={2.2}>
          <section className="space-y-8 py-16">
            <h2 className="text-heading-2 text-center">
              📏 Progreso de Scroll
            </h2>
            <p className="text-body mx-auto max-w-2xl text-center">
              Continúa haciendo scroll para experimentar la suavidad perfecta de
              Lenis. Nota cómo cada movimiento es fluido y controlado.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <StaggerContainer key={item}>
                  <StaggerItem>
                    <CardHover className="rounded-lg border bg-card p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/20">
                        <span className="font-bold text-brand-primary">
                          {item}
                        </span>
                      </div>
                      <h4 className="text-heading-4 mb-2">Feature {item}</h4>
                      <p className="text-body-small text-muted-foreground">
                        Ejemplo de contenido que demuestra el smooth scroll en
                        acción con animaciones coordinadas.
                      </p>
                    </CardHover>
                  </StaggerItem>
                </StaggerContainer>
              ))}
            </div>
          </section>
        </SlideInUp>

        {/* Technology Stack */}
        <FadeInUp delay={2.3}>
          <section className="space-y-8 rounded-lg bg-card py-16">
            <h2 className="text-heading-2 text-center">⚡ Stack Tecnológico</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { name: 'Next.js 15', desc: 'App Router' },
                { name: 'Motion', desc: 'Animaciones' },
                { name: 'Lenis', desc: 'Smooth Scroll' },
                { name: 'Tailwind CSS', desc: 'Styling' },
                { name: 'TypeScript', desc: 'Type Safety' },
                { name: 'Lucide Icons', desc: 'Iconografía' },
                { name: 'Plus Jakarta Sans', desc: 'Typography' },
                { name: 'Dark Mode', desc: 'Themes' },
              ].map((tech, index) => (
                <FadeInUp key={tech.name} delay={2.4 + index * 0.1}>
                  <div className="rounded border bg-background p-4 text-center">
                    <h4 className="text-body mb-1 font-semibold">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>
        </FadeInUp>

        {/* Contact CTA */}
        <FadeInUp delay={2.0}>
          <section className="space-y-6 py-12 text-center">
            <h2 className="text-heading-2">¿Listo para empezar?</h2>
            <p className="text-body mx-auto max-w-lg text-muted-foreground">
              Contáctanos para una consulta gratuita y descubre cómo podemos
              transformar tu negocio.
            </p>
            <div className="pt-4">
              <ButtonScale>
                <a
                  href="mailto:contacto@bytesandbuilds.com"
                  className="inline-flex items-center rounded-lg bg-brand-primary px-6 py-3 text-brand-white transition-colors hover:bg-brand-secondary"
                >
                  Contactar Ahora
                </a>
              </ButtonScale>
            </div>
          </section>
        </FadeInUp>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-8">
          <FadeIn delay={2.2}>
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <Logo size="sm" />
              <div className="text-center text-sm text-muted-foreground md:text-right">
                <p>© 2024 Bytes & Builds. Todos los derechos reservados.</p>
                <p className="mt-1">
                  Bogotá, Colombia • contacto@bytesandbuilds.com
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
