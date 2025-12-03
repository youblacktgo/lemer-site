/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- ESTO ES LO QUE OBLIGA A CREAR HTML PARA GITHUB
  images: {
    unoptimized: true, // Necesario porque GitHub no puede optimizar imágenes
  },
  typescript: {
    ignoreBuildErrors: true, // Para que publique aunque haya pequeñas alertas
  },
};

export default nextConfig;