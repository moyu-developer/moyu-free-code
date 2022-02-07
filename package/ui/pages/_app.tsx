import type { AppProps } from 'next/app'
import '@/styles/globals.css'

function MyApp(app: AppProps) {
  const { Component, pageProps } = app
  return  <Component {...pageProps} />
}

export default MyApp
