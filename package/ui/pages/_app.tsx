import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '@/common/model'
import AppLayout from '@/common/components/AppLayout'
import { ConfigProvider } from 'antd'
import CN from 'antd/lib/locale-provider/zh_CN'
import '@/styles/globals.css'
import 'antd/dist/antd.variable.min.css'
import '@moyu-code/control/dist/control.cjs.development.css'
import '@/styles/theme/theme.css'

ConfigProvider.config({
  theme: {
    primaryColor: '#3562EC',
    successColor: '#008053',
    errorColor: '#D32F2F',
    warningColor: '#EA9204'
  }
})

const MyApp = (app: AppProps) => {
  const { Component, pageProps } = app
  return (
    <StrictMode>
      <ConfigProvider locale={CN}>
        <Provider store={store}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Provider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default MyApp
