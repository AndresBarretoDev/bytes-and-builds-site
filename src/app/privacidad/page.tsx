import { HeroHeader } from '@/components/ui/hero-header'
import { FooterSection } from '@/components/sections'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad de Bytes & Builds - Compromiso con la protección de tus datos.',
}

export default function PrivacidadPage() {
  return (
    <>
      <HeroHeader />
      <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8">Política de Privacidad</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introducción</h2>
              <p>
                En Bytes & Builds, nos tomamos muy en serio la privacidad de nuestros clientes y visitantes. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Información que Recopilamos</h2>
              <p>
                Recopilamos información que usted nos proporciona directamente, como cuando completa nuestro formulario de contacto, se suscribe a nuestro boletín o solicita un presupuesto. Esto puede incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre su empresa o proyecto</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Uso de la Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a sus consultas y proporcionar los servicios solicitados.</li>
                <li>Enviar actualizaciones sobre nuestros servicios y promociones (siempre con su consentimiento).</li>
                <li>Mejorar nuestro sitio web y la experiencia del usuario.</li>
                <li>Cumplir con obligaciones legales.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Protección de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos se almacenan en servidores seguros y solo son accesibles por personal autorizado.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Sus Derechos</h2>
              <p>
                Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de info@bytesandbuilds.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Cambios en esta Política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios se publicarán en esta página con una fecha de actualización revisada.
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
