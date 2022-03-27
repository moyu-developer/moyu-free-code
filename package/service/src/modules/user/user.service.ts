import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entity'
import { Repository } from 'typeorm'
import { CreateUserRequestDto } from './dto/create.dto'

@Injectable()
export class UserService {
  constructor (@InjectRepository(User) private readonly user: Repository<User>) {
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
}
