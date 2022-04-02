import { ApiProperty } from '@nestjs/swagger'

export class LoginReqDto {
  @ApiProperty({
    required: true,
    description: '用户名'
  })
    username?: string

  @ApiProperty({
    required: true,
    description: '用户密码'
  })
    password?: string

    @ApiProperty({
      required: true,
      description: '来源'
    })
      source: 0 | 1 | 2

    @ApiProperty({
      required: true,
      description: '三方平台code'
    })
      code?: string
}
