/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async function () {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
