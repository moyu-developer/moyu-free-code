import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entity'
import { Repository } from 'typeorm'
import { CreateUserRequestDto } from './dto/create.dto'
import { OauthService } from 'src/common/oauth/oauth.service'
import axios from 'axios'
import { LoginReqDto } from '../auth/dto/login-req.dto'

@Injectable()
export class UserService {
  constructor (
    private readonly oauthService: OauthService,
    @InjectRepository(User) private readonly user: Repository<User>) {
  }

  /**
   * 通过用户名称查询用户信息
   * @param name 用户名称
   * @returns 用户信息
   */
  async findUserByName (name: string) {
    console.log(name, 'name')
    const user = await this.user.findOneBy({ name })
    return user
  }

  /**
   * 通过id查询用户信息
   * @param id 用户id
   * @returns 用户信息
   */
  async findUserInfoById (id): Promise<User> {
    const currentUser: User = await this.user.findOneBy({ id })
    if (currentUser) {
      return {
        ...currentUser,
        password: undefined
      }
    }
    throw new HttpException(`通过id： ${id} 未匹配到当前用户`, 500)
  }

  /**
   * 创建用户
   * @param data 用户信息
   * @returns 用户id
   */
  async createUser (data: CreateUserRequestDto) {
    const user = new User(data)
    const res = await this.user.insert(user)
    return res
  }

  async getUserInfo (data: LoginReqDto) {
    if (data.source === 1) {
      const res = await this.oauthService.gitee(data.code)
      console.log(res)
      // 获取到了gitee用户信息 id唯一作为标识符
      // 验证用户是否已经在数据库中
      // 如果存在就发token  否则添加用户进数据库再发token
      return res
    } else if (data.source === 2) {
      const res = await this.oauthService.github(data.code)
      console.log(res)
      // 获取到了github用户信息 id唯一作为标识符
      // 验证用户是否已经在数据库中
      // 如果存在就发token  否则添加用户进数据库再发token
      return res
    }
  }
}
