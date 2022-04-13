import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PaginationRequest } from 'src/common/dto/pagination.dto'
import { View } from 'src/entity'

export class QueryViewListRequestDto extends PaginationRequest {
}

export class QueryViewListResponseDto<T> {
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
