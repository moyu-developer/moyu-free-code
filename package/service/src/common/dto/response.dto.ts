import { ApiProperty } from '@nestjs/swagger'

export class Response <T = any> {
  @ApiProperty({
    default: '请求成功',
    required: true,
    description: '请求信息'
  })
    message: string

  @ApiProperty({
    default: 200,
    required: true,
    description: '请求状态码，比对httpStatus，新增custom code'
  })
    code: number

    @ApiProperty({
      required: true,
      description: '接口返回数据'
    })
      data: T
}
