import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateViewDto } from './dto/create.dto'
import { ViewsService } from './views.service'

@Controller({
  version: '1',
  path: 'views'
})
@ApiTags('views')
export class ViewsController {
  private readonly viewsService: ViewsService
  constructor (viewsService: ViewsService) {
    this.viewsService = viewsService
  }

  @Get(':id')
  async getViewById (@Param('id') id: number) {
    if (id) {
      return await this.viewsService.findView(Number(id))
    } else {
      throw new Error('param [id] is not found')
    }
  }

  @Post('save')
  async saveView (@Body() view: CreateViewDto) {
    return await this.viewsService.saveRecord({
      ...view,
      status: view?.status || 0,
      env: view?.env || 0
    })
  }
}
