import { GotAxios, ComposeFunction } from '@moyu-code/request'
import jsCookie from 'js-cookie'

const setRequestToken: ComposeFunction = (config) => {
  const token = jsCookie.get('signAccessToken')
  if (token) {
    config.headers.Authorization = 'Bearer ' + jsCookie.get('signAccessToken')
  }
  return config
}

export const fetch = new GotAxios({
  timeout: 3000,
  baseURL: '//localhost:8500/api'
}, {
  version: '/v1',
  pipe: [setRequestToken]
})

export * from './view/saveView.api'

export * from './view/getViewById.api'

export * from './resource/list.api'
