import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  devServer: {
    port: 8201
  },
  routes,
  fastRefresh: {},
  alias: {
    config: 'config'
  },
  antd: {
  },
  scripts: ['https://unpkg.com/systemjs@6.12.1/dist/system.js'],
  sass: {},
  theme: {
    '@primary-color': '#0072F5',
    '@success-color': '#17C964',
    '@error-color': '#F31260',
    '@warning-color': '#F5A524',
    '@processing-color': 'linear-gradient(112deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%)',
    '@border-color-base': '#ECEDEE'
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed' // stat  // gzip
  }
})
