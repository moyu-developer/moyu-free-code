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
  },
  antd: {
  },
  sass: {},
  theme: {
    '@primary-color': '#165DFF',
    '@success-color': '#27AE60',
    '@error-color': '#C7302B',
    '@warning-color': '#f5a623',
    '@processing-color': '#165DFF',
    '@border-color-base': '#EDEDED'
  }
})
