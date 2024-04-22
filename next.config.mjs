/** @type {import('next').NextConfig} */
// const nextConfig = {


// };


const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding', { 'node-gyp-build': 'commonjs node-gyp-build' });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://45.77.247.238:5000/api/:path*',
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com','i.ytimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  }

};

export default nextConfig;



// export default nextConfig;
// Import required modules using ES module syntax
// import next from 'next';

// const nextConfig = {
 
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://45.77.247.238:5000/api/:path*',
//       },
//     ];
//   },
//   images: {
//     domains: ['res.cloudinary.com', 'i.ytimg.com'],
//   }
// };

// export default nextConfig;
