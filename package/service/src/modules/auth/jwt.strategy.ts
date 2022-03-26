import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { jwtConstants } from 'src/common/enums/jwt'
import { User } from 'src/entity'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor () {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: jwtConstants.secret
    })
  }

  /**
   * 验证token并解析token的数据。
   * @see https://jwt.io/
   * @param payload 用户信息
   * @returns token解析的用户信息
   */
  async validate (payload: Pick<User, 'id' | 'name'>) {
    return payload
  }
}
