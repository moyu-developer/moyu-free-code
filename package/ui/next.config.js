/** @type {import('next').NextConfig} */
const { resolve } = require('path')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);
const semi = require('@douyinfe/semi-next').default({
  /* the extension options */
});

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = resolve(__dirname, './')
    return config
  },
}

module.exports = withTM(withImages(semi(nextConfig)))
