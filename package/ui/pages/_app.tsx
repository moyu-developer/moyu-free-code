import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import store from '@/common/model'
import AppLayout from '@/common/components/AppLayout'
import '@/styles/globals.css'
import '@moyu-code/control/dist/control.cjs.development.css'

const MyApp: NextPage<any> = (app: AppProps) => {
  const { Component, pageProps } = app

  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}

export default MyApp
