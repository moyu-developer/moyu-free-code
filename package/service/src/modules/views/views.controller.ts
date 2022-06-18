import { Body, Controller, Get, Param, Post, Query, Request, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOkResponse, ApiResponse, ApiResponseProperty, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { GetRequestUser, ReturnUserTypes } from 'src/common/utils/decorator'
import { User, View } from 'src/entity'
import { LocalAuthGuard } from '../auth/auth.guard'
import { CreateViewRequestDto } from './dto/create.dto'
import { QueryViewListRequestDto, QueryViewListResponseDto } from './dto/list.dto'
import { ViewsService } from './views.service'
import { AuthGuard } from '@nestjs/passport'

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

  @UseGuards(LocalAuthGuard)
  @Get('list')
  @ApiSecurity('获取页面列表')
  @ApiBearerAuth()
  async getSchemaViewList (@Query() query: QueryViewListRequestDto, @GetRequestUser() user: User) {
    const [list, total] = await this.viewsService.findAll({
      ...query,
      user
    })
    return {
      total,
      list
    }
  }

  @Get(':id')
  @ApiSecurity('通过id获取页面schema')
  async getViewById (@Param('id') id: number) {
    if (id) {
      return await this.viewsService.findView(Number(id))
    } else {
      throw new Error('param [id] is not found')
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('save')
  @ApiBearerAuth()
  @ApiSecurity('获取页面列表')
  @ApiSecurity('保存页面schema')
  @UseGuards(LocalAuthGuard)
  async saveView (@Body() view: CreateViewRequestDto, @GetRequestUser() user: User) {
    const id = await this.viewsService.saveRecord({
      ...view,
      status: view?.status || 0,
      env: view?.env || 0
    }, user)
    return id
  }

  async deleteView () {}
}
