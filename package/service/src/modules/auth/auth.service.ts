import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/entity'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class AuthService {
  constructor (private readonly userService: UserService,
    private readonly jwtService: JwtService) {
    console.log()
  }

  async validateUser (username: string, password: string): Promise<Omit<User, 'password'> | undefined> {
    const user = await this.userService.findUserByName(username)
    if (user && user.password === password) {
      const { password, ...omitPasswordInfo } = user
      return omitPasswordInfo
    }
  }

  async login (user: User) {
    return {
      access_token: this.jwtService.sign({
        id: user.id,
        name: user.name,
        suffix: '@moyu.dev'
      })
    }
  }
}
