import { getParams } from './../utils/index'
import { HttpException, Injectable } from '@nestjs/common'
import configService from 'src/config'
import { get } from 'lodash'
import axios from 'axios'

/**
 * 在此处提供三方平台信息获取
 */

@Injectable()
export class OauthService {
  constructor () {}

  async github (code: string) {
    try {
      const { accessPath, userPath, clientId, clientSecret } = get(
        configService(),
        'dev.oauth.github'
      )
      const res = await axios.post(accessPath, {
        client_id: clientId,
        client_secret: clientSecret,
        code
      })
      const accessToken = getParams(res.data, 'access_token')
      const userInfo = await axios.get(userPath, {
        headers: {
          Authorization: `token ${accessToken}`
        }
      })
      return userInfo.data
    } catch (error) {
      throw new HttpException('github授权错误', 500)
    }
  }

  async gitee (code: string) {
    try {
      const { accessPath, userPath, clientId, clientSecret, redirectUri } = get(
        configService(),
        'dev.oauth.gitee'
      )
      const { data } = await axios({
        method: 'POST',
        url: accessPath,
        params: {
          grant_type: 'authorization_code',
          redirect_uri: redirectUri,
          client_id: clientId,
          client_secret: clientSecret,
          code
        }
      })
      const userInfo = await axios.get(userPath, {
        params: {
          access_token: data.access_token
        }
      })
      return userInfo.data
    } catch (error) {
      throw new HttpException('gitee授权错误', 500)
    }
  }
}
