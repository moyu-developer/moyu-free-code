import { ApiProperty } from '@nestjs/swagger'
import { PaginationRequest } from 'src/common/dto/pagination.dto'

export class QueryResourceRequestDto extends PaginationRequest {
  @ApiProperty({
    title: '资源名称, 请务必填写',
    maxLength: 12
  })
    name?: string
}

export class QueryResourceResponseDto<T> {
  @ApiProperty({
    required: true,
    description: '总长度'
  })
    total: number

    @ApiProperty({
      required: true,
      description: '分页数据'
    })
      list: T[]
}
