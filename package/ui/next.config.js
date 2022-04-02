/** @type {import('next').NextConfig} */
const { resolve } = require('path')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'antd-mobile'
])
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
})

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = resolve(__dirname, './')
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  }
}

module.exports = withTM(withImages(semi(nextConfig)))
