import { Response } from 'src/common/dto/response.dto'
import { User } from 'src/entity'
import { ApiProperty, OmitType } from '@nestjs/swagger'

export * from './create.dto'

export class QueryUserInfoResponseDto extends Response {
  @ApiProperty({
    type: () => OmitType(User, ['password'] as const)
  })
    data: Omit<User, 'password'>
}
