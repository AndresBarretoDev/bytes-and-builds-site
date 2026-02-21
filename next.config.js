/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Solo el dominio propio puede invocar Server Actions (ej. formulario de contacto)
      allowedOrigins: ['bytesandbuilds.com', 'www.bytesandbuilds.com'],
    },
  },
  images: {
    remotePatterns: [
      // WordPress CMS (imágenes de proyectos y servicios)
      {
        protocol: 'https',
        hostname: 'bytes-cms.bytesandbuilds.com',
      },
      // Unsplash (imágenes decorativas)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Picsum (placeholders de imágenes)
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

module.exports = nextConfig;
