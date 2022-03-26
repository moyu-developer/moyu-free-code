import { Response } from 'src/common/dto/response.dto'
import { ApiProperty } from '@nestjs/swagger'

export class TokenDto {
  @ApiProperty({
    required: true,
    description: '根据用户信息生成的token'
  })
    token: string
}

export class LoginResDto extends Response {
  constructor () {
    super()
  }

  @ApiProperty()
    data: TokenDto
}
