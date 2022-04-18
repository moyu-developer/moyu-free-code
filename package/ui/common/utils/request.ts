import { GotAxios, ComposeFunction } from '@moyu-code/request'
import jsCookie from 'js-cookie'

const setRequestToken: ComposeFunction = (config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'Bearer ' + jsCookie.get('signAccessToken')
  }
  return config
}

const got = new GotAxios({
  timeout: 3000,
  baseURL: '//localhost:8500/api'
}, {
  version: '/v1',
  pipe: [setRequestToken]
})

export default got
