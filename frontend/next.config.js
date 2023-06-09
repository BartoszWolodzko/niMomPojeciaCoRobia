/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl'
  }
}

module.exports = {
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
