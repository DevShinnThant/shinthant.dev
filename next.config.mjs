/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    // compiler: {
    //     removeConsole: true,
    // },
    images: {
        domains: ['avatars.githubusercontent.com','static.wixstatic.com'],
        
    },
}

export default nextConfig
