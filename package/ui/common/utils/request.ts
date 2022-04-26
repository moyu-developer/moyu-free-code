import { GotAxios, ComposeFunction } from '@moyu-code/request'
import { Modal } from 'antd'
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
  pipe: [setRequestToken],
  onSuccess: (res) => {
    if (res?.data.code === 401) {
      Modal.confirm({
        title: '身份已过期'
      })
    }
  }
})

export default got
