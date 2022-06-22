import { history } from 'umi'
import { GotAxios, ComposeFunction } from '@moyu-code/request'
import { message, Modal } from 'antd'
import jsCookie from 'js-cookie'
import store from '@/common/model'

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
    if (res.status === 404) {
      message.error('接口调用失败，请检查网络连接！')
    }
    if (res?.data.code === 401 && jsCookie.get('signAccessToken')) {
      jsCookie.remove('signAccessToken')
      store.dispatch.common.updated({
        token: undefined
      })
      Modal.confirm({
        title: '身份已过期',
        content: '',
        okText: '去登录',
        onOk: async () => {
          history.replace('/login')
        }
      })
    }
  }
})

export default got
