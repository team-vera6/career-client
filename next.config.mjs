/** @type {import('next').NextConfig} */
const nextConfig = {
  // FIXME : 백에 localhost:3000 추가된 후 rewrites 삭제
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api-pitstop.site/:path*',
      },
    ];
  },
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
