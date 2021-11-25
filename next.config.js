module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  
  async rewrites() {/* cors */
    return [
      {
        source: '/api/:path*',
        destination: 'https://jsonplaceholder.typicode.com*',
      },
    ]
  }
}
