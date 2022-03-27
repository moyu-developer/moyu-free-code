import { Response } from 'src/common/dto/response.dto'
import { ApiProperty, PickType } from '@nestjs/swagger'
import { User } from 'src/entity'

export class CreateUserRequestDto {
  @ApiProperty({
    required: true,
    description: '用户名称，注册时必须填写'
  })
    name: string

  @ApiProperty({
    required: true,
    description: '用户密码，注册时必须填写'
  })
    password: string

  @ApiProperty({
    required: false,
    description: '用户头像'
  })
    avatar?: string
}

export class CreateUserResponseDto extends Response {
  @ApiProperty({
    type: PickType(User, ['id'] as const)
  })
    data: {
    id: number
  }
}
