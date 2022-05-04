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
    return config
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/desktop',
        permanent: true
      }
    ]
  }
}

const plugins = [
  /* ...other plugins... */
  [withLess, {
    lessLoaderOptions: {
      // 'border-radius-base': '#EDEDEE'
      lessOptions: {
        modifyVars: {
        }
      }
    }
  }],
  withTM,
  withImages,
  semi
]

module.exports = withPlugins(plugins, nextConfig)
