import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Response } from 'src/common/dto/response.dto'
import { User } from 'src/entity'

export class CreateViewRequestDto {
  @ApiPropertyOptional({
    required: false,
    description: '更新view时，必传'
  })
    id?: number

  @ApiProperty({
    required: true,
    description: '页面名称'
  })
    name: string

  @ApiProperty({
    required: false,
    description: '针对页面描述的描述'
  })
    description?: string

  @ApiProperty({
    required: false
  })
    background?: string

  @ApiProperty({
    required: true,
    description: 'schema body'
  })
    schema: string

  @ApiProperty({
    required: false,
    description: 'schema body',
    enum: [0, 1, 2]
  })
    status: 0 | 1 | 2

  @ApiProperty({
    required: false,
    description: 'schema body',
    enum: [0, 1, 2]
  })
    env: 0 | 1 | 3
}
export class CreateViewResponseDto extends Response {
}
