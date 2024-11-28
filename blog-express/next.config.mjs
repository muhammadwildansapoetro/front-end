/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muhammadwildansapoetro-blog.vercel.app",
      },
    ],
  },
};

export default nextConfig;

// https://muhammadwildansapoetro-blog.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F11jm1xqk1o3f%2F2sogd064kRcxTqGAWCK89k%2Fc85e70e82ea5fff0c849d085592f9570%2Fjavascript-article.webp&w=2048&q=75
