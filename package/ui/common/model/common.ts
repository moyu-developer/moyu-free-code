import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import LoginAPI, { LoginReqDto } from '@/api/auth/login'
import UserInfoAPI, { QueryUserInfoResponseDto } from '@/api/user/info'
import { isSuccess } from '@moyu-code/request'
import { message as Message } from 'antd'
import jsCookie from 'js-cookie'

interface CommonState {
  token?: string,
  userInfo?: QueryUserInfoResponseDto['data']
}

const initializeCommonState: CommonState = {
  token: jsCookie.get('signAccessToken')
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,
  effects: (dispatch) => ({
    /** 用户登录 */
    async loginEffect (payload: LoginReqDto) {
      const { code, data, message } = await LoginAPI(payload)
      if (isSuccess(code)) {
        jsCookie.set('signAccessToken', data.token)
        dispatch.common.updated({
          token: data.token
        })
        Message.success('登录成功：很高兴您能够访问我们的程序')
      } else {
        Message.error(`登录失败：${message}`)
      }
      return isSuccess(code)
    },

    /** 获取用户信息 */
    async getUserInfo () {
      const { code, data } = await UserInfoAPI()
      if (isSuccess(code)) {
        dispatch.common.updated({
          userInfo: data
        })
      }
    }
  }),
  reducers: {
    updated (state: CommonState, newState: Partial<CommonState>) {
      return {
        ...state,
        ...newState
      }
    },

    logout (state) {
      jsCookie.remove('signAccessToken')
      return {
        ...state,
        token: undefined,
        userInfo: undefined
      }
    }
  }
})
