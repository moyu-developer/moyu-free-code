import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller({
  version: '1',
  path: 'upload'
})
@ApiTags('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  UploadImageFile (@UploadedFile() file: Express.Multer.File) {
    console.log(file)
  }
}
