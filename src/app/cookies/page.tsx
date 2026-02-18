import { FooterSection } from '@/components/sections'
import { PageSubNav } from '@/components/sections/project-detail/ProjectDetailNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en el sitio web de Bytes & Builds.',
}

export default function CookiesPage() {
  return (
    <>
      <PageSubNav
        backHref="/"
        backLabel="Volver al inicio"
        badgeLabel="Política de Cookies"
      />
      <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8">Política de Cookies</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o móvil) cuando visita un sitio web. Se utilizan ampliamente para que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. ¿Cómo Usamos las Cookies?</h2>
              <p>
                En Bytes & Builds, utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Asegurar el funcionamiento básico del sitio web.</li>
                <li>Analizar cómo los visitantes utilizan nuestro sitio (Google Analytics) para mejorar la navegación.</li>
                <li>Recordar sus preferencias, como el tema (claro/oscuro).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Tipos de cookies que utilizamos</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Cookies Necesarias:</strong> Esenciales para que pueda navegar por el sitio y utilizar sus funciones.
                </li>
                <li>
                  <strong>Cookies de Rendimiento:</strong> Recopilan información anónima sobre cómo los visitantes usan el sitio para ayudarnos a mejorarlo.
                </li>
                <li>
                  <strong>Cookies de Personalización:</strong> Permiten que el sitio recuerde las elecciones que hace para ofrecer una experiencia más personalizada.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Control de cookies</h2>
              <p>
                Usted puede controlar y/o eliminar las cookies como desee. La mayoría de los navegadores permiten gestionar las preferencias de cookies a través de su configuración. Tenga en cuenta que si desactiva las cookies, algunas partes de este sitio pueden no funcionar correctamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Más información</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra Política de Cookies, no dude en contactarnos en info@bytesandbuilds.com.
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
