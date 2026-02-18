import { FooterSection } from '@/components/sections'
import { PageSubNav } from '@/components/sections/project-detail/ProjectDetailNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y Condiciones de uso de los servicios y el sitio web de Bytes & Builds.',
}

export default function TerminosPage() {
  return (
    <>
      <PageSubNav
        backHref="/"
        backLabel="Volver al inicio"
        badgeLabel="Términos y Condiciones"
      />
      <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8">Términos y Condiciones</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Aceptación de los términos</h2>
              <p>
                Al acceder y utilizar el sitio web de Bytes & Builds, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web ni nuestros servicios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Uso del sitio web</h2>
              <p>
                El contenido de este sitio web es solo para su información general y uso personal. Está sujeto a cambios sin previo aviso. Queda prohibido el uso no autorizado de este sitio web, lo cual puede dar lugar a una reclamación por daños y perjuicios o ser un delito penal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Propiedad intelectual</h2>
              <p>
                Este sitio web contiene material que es propiedad de o está licenciado a Bytes & Builds. Este material incluye, pero no se limita a, el diseño, la maquetación, el aspecto, la apariencia y los gráficos. La reproducción está prohibida salvo de conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Limitación de responsabilidad</h2>
              <p>
                Bytes & Builds no será responsable de ningún daño indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar nuestro sitio web o servicios. Hacemos todo lo posible para asegurar que la información sea precisa, pero no garantizamos su completitud o exactitud.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Servicios profesionales</h2>
              <p>
                La contratación de servicios de desarrollo web o automatización estará sujeta a un contrato de servicios independiente, el cual prevalecerá sobre estos términos en caso de conflicto.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Ley aplicable</h2>
              <p>
                Su uso de este sitio web y cualquier disputa que surja de dicho uso están sujetos a las leyes de la República de Colombia.
              </p>
              <p className="text-sm italic pt-4"> Última actualización: 26 de enero de 2026 </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
