import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

/**
 * 在此处提供三方平台信息获取
 */

@Injectable()
export class OauthService {
  constructor (private configService: ConfigService) {}

  async github (code:string) {

  }

  async gitee (code: string) {

  }
}
