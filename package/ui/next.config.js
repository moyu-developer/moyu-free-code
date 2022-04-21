/** @type {import('next').NextConfig} */
const { resolve } = require('path')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'react-vant',
  'antd'
])
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
})

const withLess = require('next-with-less')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['@'] = resolve(__dirname, './')
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack']
    // })
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

const plugins = [
  /* ...other plugins... */
  [withLess, {
    lessLoaderOptions: {

    }
  }],
  withTM,
  withImages,
  semi
]

module.exports = withPlugins(plugins, nextConfig)
