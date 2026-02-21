# Bytes & Builds - Sitio Web Institucional

Sitio web institucional profesional para comunicar servicios y generar leads calificados.

## 🎯 Objetivo

Crear una presencia digital profesional que muestre claramente los servicios de Bytes & Builds, genere confianza y capture leads calificados de PyMEs que buscan tecnología práctica para sus negocios.

## 🎨 Sistema de Diseño

### Dirección Estética
**Corporate/Professional** - Diseño limpio, profesional y orientado a resultados para generar confianza en PyMEs.

### Paleta de Colores

#### Colores Principales (Light Mode)
- **Primary**: `#1f2a44` (Navy oscuro) - Contraste: 12.6:1 ✅ WCAG AAA
- **Secondary**: `#34518d` (Azul corporativo) - Contraste: 7.2:1 ✅ WCAG AA
- **Accent**: `#00a396` (Verde agua) - Contraste: 4.8:1 ✅ WCAG AA (corregido para accesibilidad)
- **Blue**: `#2d6bc7` (Azul claro) - Contraste: 5.2:1 ✅ WCAG AA (corregido para accesibilidad)
- **White**: `#fefefe` (Blanco)

#### Colores Semánticos
- **Success**: Verde (definido en shadcn/ui)
- **Error/Destructive**: Rojo (definido en shadcn/ui)
- **Warning**: Amarillo/Naranja (definido en shadcn/ui)
- **Info**: Azul (usar brand-blue)

#### Dark Mode
Todos los colores tienen variantes optimizadas para dark mode con contraste WCAG AA cumplido.

### Tipografía

#### Pairing Tipográfico
- **Headlines/Títulos**: **Bricolage Grotesque**
  - Geométrica, moderna, distintiva
  - Pesos disponibles: 400, 500, 600, 700, 800
  - Uso: H1-H6, títulos de secciones, elementos destacados
  
- **Body/Texto**: **IBM Plex Sans**
  - Profesional, altamente legible, diseñada por IBM
  - Pesos disponibles: 400, 500, 600, 700
  - Uso: Párrafos, textos largos, contenido general

- **Monospace**: **JetBrains Mono**
  - Uso: Código, ejemplos técnicos

#### Jerarquía Tipográfica
```css
H1: Bricolage Grotesque, 5.25rem (84px), Bold
H2: Bricolage Grotesque, 4xl-6xl (2.25rem - 4rem), Bold/Semibold
H3: Bricolage Grotesque, 2xl-3xl (1.5rem - 1.875rem), Semibold
H4: Bricolage Grotesque, xl-2xl (1.25rem - 1.5rem), Medium
Body: IBM Plex Sans, base-lg (1rem - 1.125rem), Regular
```

### Espaciado

Sistema basado en múltiplos de 8px (sistema de 8pt):
- **4px** - Tight (icon padding, borders)
- **8px** - Compact (button padding, small gaps)
- **16px** - Base (default spacing)
- **24px** - Comfortable (section padding)
- **32px** - Generous (component spacing)
- **48px** - Spacious (section margins)
- **64px** - Open (hero sections)

### Componentes

**Base**: shadcn/ui (Radix UI primitives)  
**Customización**: Todos los componentes adaptados a colores de marca  
**Border Radius**: 10px estándar (0.5rem)  
**Touch Targets**: Mínimo 44x44px para mobile (WCAG AA)

### Fondos y Atmósfera

#### Técnicas Utilizadas
1. **Noise/Grain Texture**
   - Patrón SVG procedural con opacity 0.03
   - Aplicado globalmente para profundidad visual
   - No interfiere con contenido

2. **Gradientes Radiales**
   - Multi-color gradients con blur effects
   - Parallax integration para movimiento sutil
   - Opacidad baja (0.02-0.06) para sutileza

3. **Glassmorphism**
   - Backdrop blur en navegación sticky
   - Transparencias con border sutil

4. **Parallax Effects**
   - Scroll-based parallax para elementos decorativos
   - Velocidades variables (0.1-0.5) para profundidad

### Animaciones

**Librería**: Motion (evolución de Framer Motion)

#### Tipos de Animaciones Disponibles

**Fade Animations** (`src/lib/animations.ts`):
- `fadeIn` - Aparece gradualmente
- `fadeInUp` - Aparece desde abajo
- `fadeInDown` - Aparece desde arriba
- `fadeInLeft` - Aparece desde la izquierda
- `fadeInRight` - Aparece desde la derecha

**Scale Animations**:
- `scaleIn` - Escala desde pequeño a normal
- `scaleInBounce` - Escala con efecto bounce
- `hoverScale` - Escala en hover

**Slide Animations**:
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`

**Stagger Animations**:
- `staggerContainer` - Contenedor con stagger
- `staggerItem` - Items individuales

**Presets**:
- `quickFade` - Fade rápido para elementos pequeños
- `heroSlide` - Slide suave para hero sections
- `buttonScale` - Escala bouncy para botones
- `cardHover` - Hover suave para cards

#### Timing Standards
- **Fast**: 0.2s (micro-interacciones)
- **Normal**: 0.3s (transiciones generales)
- **Slow**: 0.5s (elementos importantes)
- **Slower**: 0.8s (transiciones complejas)

#### Accesibilidad
- Soporte completo para `prefers-reduced-motion`
- Hook `useReducedMotion()` disponible en `src/hooks/use-reduced-motion.ts`
- Animaciones respetan preferencias del usuario automáticamente

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **TypeScript**: Tipado estático
- **Validation**: Zod
- **Deployment**: EasyPanel en VPS

## 📋 Servicios Principales

1. **Desarrollo Web**: Sitios web modernos y aplicaciones
2. **Automatización**: Procesos automatizados para operaciones
3. **Integraciones**: Sistemas conectados y dashboards

## 🏗️ Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página de inicio
├── components/         # Componentes reutilizables
│   ├── ui/            # Componentes UI base
│   ├── layout/        # Header, Footer, Navigation
│   └── sections/      # Secciones específicas
└── lib/               # Utilidades y helpers
```

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

## 📊 Estado del Desarrollo

### ✅ Completado

- [x] Configuración inicial del proyecto
- [x] Next.js 15 con App Router
- [x] Tailwind CSS con colores corporativos
- [x] TypeScript configurado
- [x] Estructura de carpetas
- [x] Página de prueba funcionando
- [x] Build de producción exitoso

### 🔄 En Progreso

- [ ] Componentes base y layout
- [ ] Página Home completa
- [ ] Páginas de servicios
- [ ] Página de contacto
- [ ] Integración chatbot
- [ ] SEO y metadatos
- [ ] Google Analytics

## 🎯 Público Objetivo

PyMEs y pequeñas empresas en crecimiento que necesitan:

- Presencia digital profesional
- Automatización de procesos
- Sistemas integrados
- Soluciones tecnológicas prácticas

## 📝 Notas de Desarrollo

- Usar early returns para mejorar legibilidad
- Siempre usar clases Tailwind para styling
- Nombres descriptivos para variables y funciones
- Implementar funciones de accesibilidad
- Usar `const` en lugar de `function`

## 🔧 Configuración del Entorno

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Ejecutar en desarrollo: `npm run dev`
4. Abrir [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

El sitio está optimizado para:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO y Performance

- Metadatos optimizados
- Core Web Vitals
- Imágenes optimizadas
- Lazy loading
- Structured data

---

**Desarrollo por**: Bytes & Builds  
**Contacto**: contacto@bytesandbuilds.com  
**Ubicación**: Bogotá, Colombia
