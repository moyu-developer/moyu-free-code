import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from '@/common/model'
import { ConfigProvider } from 'antd'
import CN from 'antd/lib/locale-provider/zh_CN'
import '@moyu-code/control/dist/control.cjs.development.css'
import '@moyu-code/materials/dist/materials.cjs.development.css'
import 'antd/dist/antd.variable.less'

export const rootContainer = (Container: any) => {
  return (
    <StrictMode>
      <ConfigProvider locale={CN}>
        <Provider store={store}>{Container}</Provider>
      </ConfigProvider>
    </StrictMode>
  )
}
