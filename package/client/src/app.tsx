import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from '@/common/model'
import { ConfigProvider } from 'antd'
import CN from 'antd/lib/locale-provider/zh_CN'
import 'antd/dist/antd.min.css'
import '@moyu-code/control/dist/control.cjs.development.css'
import '@moyu-code/materials/dist/materials.cjs.development.css'

export const rootContainer = (Container: any) => {
  return (
    <StrictMode>
      <ConfigProvider
        locale={CN}
      >
        <Provider store={store}>
          {
              Container
            }
        </Provider>
      </ConfigProvider>
    </StrictMode>
  )
}
