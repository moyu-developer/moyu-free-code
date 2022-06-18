import { Controller, Get, Query } from '@nestjs/common'
import { ApiSecurity, ApiTags } from '@nestjs/swagger'
import { ResourceService } from './resource.service'
import { QueryResourceRequestDto, QueryResourceResponseDto } from './dto/query.dto'

@Controller({
  version: '1',
  path: 'resource'
})
@ApiTags('resource')
export class ResourceController {
  constructor (
    private readonly resourceService: ResourceService
  ) {}

  @Get('list')
  @ApiSecurity('获取资源列表列表')
  async getSchemaViewList (@Query() query: QueryResourceRequestDto) {
    return await this.resourceService.findAllResource(query)
  }
}
