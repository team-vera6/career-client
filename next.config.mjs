/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/history',
        destination: '/history/review',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
