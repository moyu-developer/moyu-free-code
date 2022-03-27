import { GotAxios } from '@moyu-code/request'

const got = new GotAxios({
  timeout: 3000,
  baseURL: '//localhost:8500/api'
}, {
  version: '/v1'
})

export default got
