const postcss = require('rollup-plugin-postcss')

module.exports = {
  rollup: (config, options) => {
    config.plugins.push(
      postcss({
        inject: false,
        extract: !!options.writeMeta,
        modules: true
      })
    )

    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? require('@rollup/plugin-replace')({
          'process.env.NODE_ENV': JSON.stringify(options.env),
          preventAssignment: true
        })
        : p
    )
    return config
  }
}
