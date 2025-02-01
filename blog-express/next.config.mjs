/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "muhammadwildansapoetro-blog.vercel.app",
      },
      {
        hostname: "cdn-icons-png.flaticon.com",
      },
      { hostname: "res.cloudinary.com" },
      { hostname: "cdn-icons-png.flaticon.com/512/266/266033.png" },
    ],
  },
};

export default nextConfig;
