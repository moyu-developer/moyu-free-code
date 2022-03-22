import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { View } from 'src/entity'
import { CreateViewDto } from './dto/create.dto'

@Injectable()
export class ViewsService {
  constructor (@InjectRepository(View) private views : Repository<View>) {
    console.log()
  }

  async findView (id) {
    return await this.views.findOneBy({
      id
    })
  }

  async saveRecord (record: CreateViewDto) {
    const view = new View(record)
    const result = await this.views.manager.save(view)
    return result.id
  }
}
