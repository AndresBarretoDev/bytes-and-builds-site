import { WordPressService } from '@/lib/wordpress';
import { ServicesBentoSection } from './services-bento-section';

/**
 * ServicesBentoWrapper (Server Component)
 *
 * Responsable de obtener los servicios desde WordPress
 * y pasarlos al Client Component de presentación.
 */
export async function ServicesBentoWrapper() {
    try {
        const services = await WordPressService.getServices();

        if (!services || services.length === 0) {
            return <ServicesBentoSection />;
        }

        return <ServicesBentoSection services={services} />;
    } catch (error) {
        console.error('Error loading services from WordPress:', error);
        return <ServicesBentoSection />;
    }
}
