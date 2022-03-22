import { ApiProperty, OmitType } from '@nestjs/swagger'

export class CreateViewDto {
  @ApiProperty({
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
}

export class UpdateViewDto extends OmitType(CreateViewDto, ['id'] as const) {}
