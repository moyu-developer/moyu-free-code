import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '@/common/model'
import { ConfigProvider } from 'antd'
import dynamic from 'next/dynamic'
import CN from 'antd/lib/locale-provider/zh_CN'
import '@/styles/globals.css'
import 'antd/dist/antd.variable.min.css'
import '@moyu-code/control/dist/control.cjs.development.css'
import '@/styles/theme/theme.css'

const DynamicAppLayout = dynamic(() =>
  import('../common/components/AppLayout'))

ConfigProvider.config({
  theme: {
    primaryColor: '#165DFF',
    successColor: '#27AE60',
    errorColor: '#C7302B',
    warningColor: '#f5a623',
    processingColor: '#428BF9'
  }
})

const MyApp = (app: AppProps) => {
  const { Component, pageProps } = app
  return (
    <StrictMode>
      <ConfigProvider
        locale={CN}
      >
        <Provider store={store}>
          <DynamicAppLayout>
            <Component {...pageProps} />
          </DynamicAppLayout>
        </Provider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default MyApp
