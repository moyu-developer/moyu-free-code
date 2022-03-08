const postcss = require('rollup-plugin-postcss');
const { resolve } = require('path')
const alias = require('@rollup/plugin-alias')
 
module.exports = {
  rollup: (config, options) => {
    config.plugins.push(
      postcss({
        inject: false,
        extract: !!options.writeMeta,
        modules: true,
        // Or with custom options for `postcss-modules`
        modules: {}
      }),
    );
    console.log(config)
    config.plugins.push(
      alias({
        entries: [
          { find: '@', replacement: resolve(__dirname, './src') },
        ]
      }))
    return config;
  },
};