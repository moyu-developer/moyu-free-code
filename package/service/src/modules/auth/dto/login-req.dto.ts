import { ApiProperty } from '@nestjs/swagger'

export class LoginReqDto {
  @ApiProperty({
    required: true,
    description: '用户名'
  })
    username: string

  @ApiProperty({
    required: true,
    description: '用户密码'
  })
    password: string
}
