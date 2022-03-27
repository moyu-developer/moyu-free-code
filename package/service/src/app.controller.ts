import { Controller, Get, Version } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('')
  @Version('1')
  async getHelloWorld () {
    return '墨鱼开发者搭建系统 Moyu Free 开源啦🎉...'
  }
}
