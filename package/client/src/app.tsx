import { history } from 'umi'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from '@/common/model'
import jsCookie from 'js-cookie'
import { ConfigProvider } from 'antd'
import CN from 'antd/lib/locale-provider/zh_CN'
import '@moyu-code/control/dist/control.cjs.development.css'
import '@moyu-code/materials/dist/materials.cjs.development.css'
import 'antd/dist/antd.variable.less'

const whitePath = ['/error', '/login']

export function onRouteChange ({ location }: {
  location: Location
}) {
  const token = jsCookie.get('signAccessToken')
  if (token) {
    if (location.pathname === '/login') {
      history.replace('/')
    }
  } else if (!whitePath.includes(location.pathname)) {
    history.replace('/login')
  }
}

export const rootContainer = (Container: any) => {
  return (
    <StrictMode>
      <ConfigProvider locale={CN}>
        <Provider store={store}>{Container}</Provider>
      </ConfigProvider>
    </StrictMode>
  )
}
