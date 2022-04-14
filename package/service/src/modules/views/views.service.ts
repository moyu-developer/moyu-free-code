import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { View, User } from 'src/entity'
import { CreateViewRequestDto } from './dto/create.dto'
import { QueryViewListRequestDto } from './dto/list.dto'

@Injectable()
export class ViewsService {
  constructor (@InjectRepository(View) private views : Repository<View>) {
    console.log()
  }

  async findAll (query: QueryViewListRequestDto & {user: User}) {
    const { size, current, ...params } = query
    const data = await this.views.findAndCount({
      where: params,
      skip: (query.current - 1) * query.size,
      take: query.size
    })
    return data
  }

  async findView (id) {
    return await this.views.findOneBy({
      id
    })
  }

  async saveRecord (record: CreateViewRequestDto, user: User) {
    const view = new View(record)
    view.user = user
    const result = await this.views.manager.save(view)
    return result.id
  }
}
