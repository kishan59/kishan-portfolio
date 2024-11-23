/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true
    },
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    basePath: '/kishan-portfolio',     // this is only for github pages deployment, remove it when deploy to others
    assetPrefix: '/kishan-portfolio/',     // this is only for github pages deployment, remove it when deploy to others
};

export default nextConfig;
