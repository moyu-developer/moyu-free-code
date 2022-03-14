import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '@/common/model'
import '@/styles/globals.css'
import '@moyu-code/control/dist/control.cjs.development.css'

function MyApp (app: AppProps) {
  const { Component, pageProps } = app
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp
