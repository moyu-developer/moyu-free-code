import { HttpException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entity'
import { Repository } from 'typeorm'
import { CreateUserRequestDto } from './dto/create.dto'
import axios from 'axios'

@Injectable()
export class UserService {
  constructor (
    private configService: ConfigService,
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

  async getUserInfo (data) {
    const path = 'https://github.com/login/oauth/access_token'
    const userPath = 'https://api.github.com/user'
    const res = await axios.post(path, {
      client_id: '00b6c38e8db6913a5017',
      client_secret: '65dc13996e41df5ad57384e84d309fa88a0eb6bf',
      code: data.code
    })
    const token = res.data.split('&')[0].split('=')[1]
    console.log(res.data)
    const userInfo = await axios.get(userPath, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    // 获取到了github用户信息
    console.log(userInfo.data)
    // 验证用户是否已经在数据库中

    // 如果存在就发token  否则添加用户进数据库再发token
    return userInfo.data
    // console.log(this.configService.get('development.github'))
  }
}
