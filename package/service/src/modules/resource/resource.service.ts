import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Resource } from 'src/entity'
import { Repository } from 'typeorm'

@Injectable()
export class ResourceService {
  constructor (
    @InjectRepository(Resource) private readonly resource: Repository<Resource>) {
  }

  /** 保存接口上传的图片信息 */
  async saveUploadResourceTaskInfo (info: Omit<Resource, 'id'>) {
    const res = new Resource(info)
    return await this.resource.save(res)
  }

  /** 查询所有资源的列表 */
  async findAllResource (query) {
    const { size, current, user, ...params } = query
    const [list, total] = await this.resource.findAndCount({
      where: params,
      skip: (query.current - 1) * query.size,
      take: query.size
    })
    return {
      list,
      total
    }
  }
}
