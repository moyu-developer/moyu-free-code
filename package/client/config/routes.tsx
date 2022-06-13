import React from 'react'
import { BasicLayoutProps } from '@ant-design/pro-components'
import { SmartHome, DatabaseImport, Gps, Components } from 'tabler-icons-react'

type Route = BasicLayoutProps['route'];

const MaterialIcon = (props: { icon: any }) => (
  <span className='anticon anticon-copy'>
    {React.createElement(props.icon)}
  </span>
)

export const menuRoutes = [
  {
    path: '/desktop',
    component: '@/pages/desktop',
    name: '工作台',
    icon: <MaterialIcon icon={SmartHome} />
  },
  {
    path: '/component/center',
    name: '组件中心',
    icon: <MaterialIcon icon={Components} />,
    component: '@/pages/component-center'
  },
  {
    path: '/data',
    name: '数据源',
    icon: <MaterialIcon icon={DatabaseImport} />,
    routes: [
      {
        path: '/data/navigation',
        name: '导航数据',
        icon: <MaterialIcon icon={Gps} />,
        component: '@/pages/data/navigation'
      }
    ]
  }
]

const routes: any = [
  {
    path: '/login',
    component: '@/pages/login'
  },
  { path: '/error', component: '@/pages/404' },
  { path: '/example', component: '@/pages/example' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [{ path: '/', redirect: '/desktop' }, ...menuRoutes]
  }
]

export default routes
