module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      images: {
        remotePatterns: [{
          hostname: 'images.ctfassets.net'
      }],
      },
    }
    return nextConfig
  }