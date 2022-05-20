import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    port: 8201
  },
  routes: [

  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/desktop', component: '@/pages/desktop' },

    { path: '/example', component: '@/pages/example' },
    ]
  },
  ],
  fastRefresh: {},
  alias: {
  },
  sass: {},
  theme: {
    '@primary-color': '#165DFF',
    '@success-color': '#27AE60',
    '@error-color': '#C7302B',
    '@warning-color': '#f5a623',
    '@processing-color': '#428BF9'
  },
});
