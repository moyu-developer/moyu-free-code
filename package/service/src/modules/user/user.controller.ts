import { Body, Controller, Get, Request, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger'
import { LocalAuthGuard } from '../auth/auth.guard'
import { CreateUserRequestDto, CreateUserResponseDto, QueryUserInfoResponseDto } from './dto'
import { UserService } from './user.service'

@Controller({
  path: 'user',
  version: '1'
})
@ApiTags('user')
export class UserController {
  constructor (private readonly userService: UserService) {
  }

  @UseGuards(LocalAuthGuard)
  @Get('info')
  @ApiBearerAuth()
  @ApiOkResponse({
    type: QueryUserInfoResponseDto
  })
  async getUserInfo (@Request() request) {
    const user = request.user
    return await this.userService.findUserInfoById(Number(user?.id))
  }

  @Post('register')
  @ApiOkResponse({ type: CreateUserResponseDto })
  async register (@Body() user: CreateUserRequestDto) {
    return await this.userService.createUser(user)
  }
}
