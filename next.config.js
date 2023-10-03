/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		API_URL: process.env.NEXT_PUBLIC_API_URL,
		secret: process.env.NEXTAUTH_SECRET
	},
}

module.exports = nextConfig
