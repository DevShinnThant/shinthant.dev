/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    compiler: {
        removeConsole: true,
    },
    images: {
        domains: ['avatars.githubusercontent.com','static.wixstatic.com','assets-global.website-files.com'],
        
    },
}

export default nextConfig
