export default [
  {
    path: '/login',
    component: '@/pages/login'
  },
  { path: '/error', component: '@/pages/404' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/desktop', component: '@/pages/desktop' },
      { path: '/example', component: '@/pages/example' }
    ]
  }
]
