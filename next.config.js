/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
        loader: "cloudinary",
        path: ""
    },
}

module.exports = nextConfig
