import { GotAxios } from '@moyu-code/request'

const instance = new GotAxios({
  timeout: 3000,
  baseURL: '//localhost:8500',
}, {
  version: 'v1'
})

export default instance.request
