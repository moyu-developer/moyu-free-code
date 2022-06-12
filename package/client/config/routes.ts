export default [
  {
    path: '/login',
    component: '@/pages/login'
  },
  { path: '/error', component: '@/pages/404' },
  { path: '/example', component: '@/pages/example' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/desktop', title: '工作台' },
      {
        path: '/component/center',
        title: '组件中心',
        component: '@/pages/component-center'
      },
      {
        path: '/data',
        title: '数据源',
        routes: [
          {
            path: '/data/navigation',
            title: '导航数据',
            component: '@/pages/data/navigation'
          }
        ]
      }
    ]
  }
]
