import { FooterSection } from '@/components/sections'
import { PageSubNav } from '@/components/sections/project-detail/ProjectDetailNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de Privacidad de Bytes & Builds - Compromiso con la protección de tus datos.',
}

export default function PrivacidadPage() {
  return (
    <>
      <PageSubNav
        backHref="/"
        backLabel="Volver al inicio"
        badgeLabel="Política de Privacidad"
      />
      <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8">Política de Privacidad</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Responsable del tratamiento</h2>
              <p>
                El responsable del tratamiento de los datos personales recopilados a través de este sitio web es <strong className="text-foreground">Bytes & Builds</strong>. Para cualquier solicitud relacionada con sus datos, puede contactarnos en{' '}
                <a href="mailto:info@bytesandbuilds.com" className="underline hover:text-foreground transition-colors">info@bytesandbuilds.com</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Información que recopilamos</h2>
              <p>
                Recopilamos únicamente la información que usted nos proporciona de forma voluntaria a través de nuestro formulario de contacto. Esto puede incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de empresa (opcional)</li>
                <li>Descripción de su consulta o proyecto</li>
              </ul>
              <p>
                <strong className="text-foreground">Importante:</strong> estos datos no se almacenan en ninguna base de datos. Son utilizados exclusivamente para responder a su consulta y quedan registrados únicamente en el historial del correo electrónico del responsable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Uso de la información</h2>
              <p>
                Utilizamos la información recopilada exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a sus consultas y proporcionar los servicios solicitados.</li>
                <li>Establecer comunicación para dar seguimiento a su solicitud.</li>
                <li>Cumplir con obligaciones legales aplicables.</li>
              </ul>
              <p>
                No utilizamos sus datos para envíos comerciales masivos ni los compartimos con terceros con fines publicitarios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Proveedores de servicio (terceros)</h2>
              <p>
                El envío de mensajes a través de nuestro formulario de contacto utiliza <strong className="text-foreground">Resend</strong> como proveedor de infraestructura de correo electrónico. Esto significa que los datos que usted ingresa en el formulario son transmitidos a través de los servidores de Resend para su entrega. Resend cuenta con sus propias políticas de privacidad y seguridad, disponibles en{' '}
                <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">resend.com/privacy</a>.
              </p>
              <p>
                No compartimos sus datos con ningún otro tercero.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Sus derechos</h2>
              <p>
                De conformidad con la <strong className="text-foreground">Ley 1581 de 2012</strong> (Ley de Protección de Datos Personales de Colombia) y sus decretos reglamentarios, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar la supresión de sus datos cuando considere que no son necesarios para la finalidad autorizada.</li>
                <li>Revocar la autorización otorgada para el tratamiento de sus datos.</li>
                <li>Presentar quejas ante la <strong className="text-foreground">Superintendencia de Industria y Comercio (SIC)</strong> si considera que sus derechos han sido vulnerados.</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, contáctenos en{' '}
                <a href="mailto:info@bytesandbuilds.com" className="underline hover:text-foreground transition-colors">info@bytesandbuilds.com</a>. Responderemos en un plazo máximo de 10 días hábiles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Marco normativo y cambios en esta política</h2>
              <p>
                Esta política se rige por la <strong className="text-foreground">Ley 1581 de 2012</strong>, el Decreto 1377 de 2013 y demás normas concordantes de la República de Colombia.
              </p>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios se publicarán en esta página con una fecha de actualización revisada.
              </p>
              <p className="text-sm italic pt-4">Última actualización: 26 de enero de 2026</p>
            </section>

          </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
