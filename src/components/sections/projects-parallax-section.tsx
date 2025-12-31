'use client'

import { HeroParallax } from '@/components/ui/hero-parallax'

export function ProjectsParallaxSection() {
    return (
        <section id="proyectos" className="relative scroll-mt-24">
            <HeroParallax products={projects} />
        </section>
    )
}

export const projects = [
    {
        title: "E-commerce Fashion Store",
        link: "https://example.com/fashion",
        thumbnail:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        subtitle: "Cliente Premium",
        description: "Plataforma completa de comercio electrónico con pasarela de pagos integrada y gestión de inventario automatizada",
        badge: "80% Reducción de errores",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        cta: "Ver proyecto"
    },
    {
        title: "Restaurant Management System",
        link: "https://example.com/restaurant",
        thumbnail:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        subtitle: "Restaurante Los Sabores",
        description: "Sistema integral de gestión para restaurantes con POS, gestión de mesas y análisis de ventas en tiempo real",
        badge: "50% Más eficiencia",
        technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
        cta: "Ver proyecto"
    },
    {
        title: "Real Estate Platform",
        link: "https://example.com/realestate",
        thumbnail:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        subtitle: "Inmobiliaria Central",
        description: "Portal inmobiliario con búsqueda avanzada, tours virtuales y sistema de gestión de propiedades",
        badge: "200% Más leads",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
        cta: "Ver proyecto"
    },
    {
        title: "Healthcare Dashboard",
        link: "https://example.com/healthcare",
        thumbnail:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        subtitle: "Clínica San Rafael",
        description: "Dashboard médico para gestión de pacientes, citas y historiales clínicos con seguridad HIPAA",
        badge: "Certificado HIPAA",
        technologies: ["Angular", "Spring Boot", "Oracle", "D3.js"],
        cta: "Ver proyecto"
    },
    {
        title: "Educational Platform",
        link: "https://example.com/education",
        thumbnail:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        subtitle: "Instituto Tecnológico",
        description: "Plataforma de aprendizaje en línea con videoconferencias, evaluaciones automatizadas y seguimiento de progreso",
        badge: "95% Satisfacción",
        technologies: ["React", "WebRTC", "Node.js", "Redis"],
        cta: "Ver proyecto"
    },
    {
        title: "Fitness App",
        link: "https://example.com/fitness",
        thumbnail:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        subtitle: "GymFit Premium",
        description: "Aplicación móvil para entrenamiento personalizado con seguimiento de progreso y nutrición",
        badge: "10K+ Usuarios",
        technologies: ["React Native", "Firebase", "Stripe", "ML Kit"],
        cta: "Ver proyecto"
    },
    {
        title: "Financial Dashboard",
        link: "https://example.com/finance",
        thumbnail:
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
        subtitle: "Distribuidora Los Andes",
        description: "Sistema de gestión que automatizó inventario y redujo errores en 80%",
        badge: "80% Reducción de errores",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
        cta: "Ver proyecto"
    },
    {
        title: "Social Media Platform",
        link: "https://example.com/social",
        thumbnail:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        subtitle: "Red Social Corporativa",
        description: "Plataforma de comunicación interna para empresas con chat, videoconferencias y colaboración",
        badge: "Seguridad Enterprise",
        technologies: ["React", "Socket.io", "Redis", "WebRTC"],
        cta: "Ver proyecto"
    },
    {
        title: "Travel Booking System",
        link: "https://example.com/travel",
        thumbnail:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        subtitle: "Agencia Aventura Total",
        description: "Sistema de reservas online con integración de hoteles, vuelos y actividades turísticas",
        badge: "300% Más ventas",
        technologies: ["Next.js", "Prisma", "Stripe", "Google Maps"],
        cta: "Ver proyecto"
    },
    {
        title: "IoT Monitoring Platform",
        link: "https://example.com/iot",
        thumbnail:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        subtitle: "Industria Smart Solutions",
        description: "Plataforma IoT para monitoreo industrial con sensores, alertas automáticas y análisis predictivo",
        badge: "24/7 Monitoreo",
        technologies: ["Python", "InfluxDB", "Grafana", "MQTT"],
        cta: "Ver proyecto"
    },
    {
        title: "Logistics Management",
        link: "https://example.com/logistics",
        thumbnail:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        subtitle: "TransLog Express",
        description: "Sistema de gestión logística con rastreo GPS, optimización de rutas y gestión de flota",
        badge: "40% Ahorro combustible",
        technologies: ["Angular", "Node.js", "PostgreSQL", "Google Maps"],
        cta: "Ver proyecto"
    },
    {
        title: "CRM Platform",
        link: "https://example.com/crm",
        thumbnail:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        subtitle: "Ventas Pro Solutions",
        description: "CRM completo con automatización de ventas, seguimiento de leads y análisis de conversión",
        badge: "150% Más conversiones",
        technologies: ["React", "Django", "Redis", "Salesforce API"],
        cta: "Ver proyecto"
    },
    {
        title: "Event Management System",
        link: "https://example.com/events",
        thumbnail:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
        subtitle: "EventMaster Pro",
        description: "Plataforma integral para gestión de eventos con registro, pagos y streaming en vivo",
        badge: "500+ Eventos",
        technologies: ["Vue.js", "Laravel", "Stripe", "WebRTC"],
        cta: "Ver proyecto"
    },
    {
        title: "Inventory Management",
        link: "https://example.com/inventory",
        thumbnail:
            "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&h=600&fit=crop",
        subtitle: "Almacenes Central",
        description: "Sistema de inventario con códigos QR, alertas automáticas y predicción de demanda",
        badge: "90% Precisión stock",
        technologies: ["React", "Express.js", "MongoDB", "ML Algorithms"],
        cta: "Ver proyecto"
    },
    {
        title: "Analytics Dashboard",
        link: "https://example.com/analytics",
        thumbnail:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        subtitle: "DataInsights Corp",
        description: "Dashboard de análisis empresarial con BI, reportes automáticos y visualizaciones interactivas",
        badge: "Real-time Analytics",
        technologies: ["React", "Python", "TensorFlow", "D3.js"],
        cta: "Ver proyecto"
    },
] 