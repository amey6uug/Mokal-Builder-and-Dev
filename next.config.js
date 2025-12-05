/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      afterFiles: [
        {
          source: '/:path+',
          destination: '/html/:path+.html',
        },
      ],
    }
  },
}

module.exports = nextConfig