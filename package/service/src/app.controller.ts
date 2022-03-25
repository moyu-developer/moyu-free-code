import { Controller, Request, Post, UseGuards, Body, Version } from '@nestjs/common'
import { LocalAuthGuard } from 'src/modules/auth/auth.guard'
import { AuthService } from 'src/modules/auth/auth.service'
import { User } from './entity'

@Controller()
export class AppController {
  constructor (private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Version('1')
  async login (@Body() user: User) {
    return this.authService.login(user)
  }
}
