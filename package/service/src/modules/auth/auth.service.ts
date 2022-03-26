import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/entity'
import { TokenDto } from './dto/login-res.dto'

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * 检查当前账号，通过守卫的方式。
   * @param username
   * @param password
   */
  async validate (
    username: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userService.findUserByName(username)
    // 注：实际中的密码处理应通过加密措施
    if (user && user.password === password) {
      const { password, ...omitPasswordInfo } = user
      return omitPasswordInfo
    } else {
      return null
    }
  }

  /**
   * 用户登录，生成唯一的key
   * @param user
   */
  async login (user: User): Promise<TokenDto> {
    const { id, name } = user
    return {
      token: this.jwtService.sign({ name, id })
    }
  }
}
