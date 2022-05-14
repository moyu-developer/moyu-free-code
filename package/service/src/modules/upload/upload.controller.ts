import { Request, Controller, Post, UploadedFile, UseInterceptors, Req, Inject } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { ImageUploadDto } from './dto/image.dto'
import { MinioService } from 'nestjs-minio-client'
import { ulid } from 'ulid'

@Controller({
  version: '1',
  path: 'upload'
})
@ApiTags('upload')
export class UploadController {
  constructor (private readonly minioClient: MinioService) {}

  @Post('image')
  @ApiOperation({ summary: '上传图片' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '一个图片文件，不要太大，sm.sm扛不住',
    type: ImageUploadDto
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadImageFile (@UploadedFile() file: Express.Multer.File, @Req() req) {
    const imageType = file.mimetype.split('/')?.[1] || 'png'
    const randomName = [ulid(), imageType].join('.')
    const data = await this.minioClient.client.putObject('avatars', randomName, file.buffer, file.size, {
      'Content-Type': file.mimetype
    })
    return {
      fileName: file.originalname,
      resourcesName: randomName,
      suffix: '.' + imageType,
      linkUrl: 'http://175.178.14.116:9000/avatars/' + randomName
    }
  }
}
