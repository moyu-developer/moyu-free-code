import { Controller, Post, Body, Request, UseGuards, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginResDto } from './dto/login-res.dto'
import { LoginReqDto } from './dto/login-req.dto'
import { LocalAuthGuard } from './auth.guard'
import { UserService } from '../user/user.service'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor (
    private readonly userService: UserService,
    private readonly authService: AuthService) {
    this.authService = authService
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @Version('1')
  @ApiOkResponse({
    status: 200,
    type: LoginResDto
  })
  async login (@Body() user: LoginReqDto, @Request() request) {
    return this.authService.login(request.user)
  }

  @Post('/oauth_login')
  @Version('1')
  @ApiOkResponse({
    status: 200,
    type: LoginResDto
  })
  async oauthLogin (@Body() user: LoginReqDto, @Request() request) {
    return this.userService.getUserInfo(user)
  }
}
