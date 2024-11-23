/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true
    },
    basePath: '/kishan-portfolio',     // this is only for github pages deployment, remove it when deploy to others
};

export default nextConfig;
