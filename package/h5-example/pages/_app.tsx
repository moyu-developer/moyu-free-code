import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@moyu-code/materials/dist/materials.cjs.development.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
