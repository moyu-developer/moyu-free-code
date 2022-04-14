import { ApiProperty } from '@nestjs/swagger'

export class PaginationRequest {
  @ApiProperty({
    description: '当前页码'
  })
    current: number

    @ApiProperty({
      description: '当前页面展示数量'
    })
      size: number
}
