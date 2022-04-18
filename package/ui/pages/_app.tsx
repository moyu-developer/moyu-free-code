import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import store from '@/common/model'
import AppLayout from '@/common/components/AppLayout'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import '@/styles/globals.css'
import '@moyu-code/control/dist/control.cjs.development.css'
import 'antd/dist/antd.variable.min.css'

ConfigProvider.config({
  theme: {
    primaryColor: '#1660D6',
    successColor: '#008053',
    errorColor: '#D32F2F',
    warningColor: '#EA9204'
  }
})

const MyApp: NextPage<any> = (app: AppProps) => {
  const { Component, pageProps } = app

  return (
    <StrictMode>
      <ConfigProvider>
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
