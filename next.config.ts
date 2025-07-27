import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'http',
        hostname: '1.bp.blogspot.com',
      },
      {
        protocol: 'http',
        hostname: '2.bp.blogspot.com',
      },
      {
        protocol: 'http',
        hostname: '3.bp.blogspot.com',
      },
      {
        protocol: 'http',
        hostname: '4.bp.blogspot.com',
      },
       {
        protocol: 'https',
        hostname: '1.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: '2.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: '3.bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: '4.bp.blogspot.com',
      },
    ],
  },
};

export default nextConfig;
