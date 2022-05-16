import {
  Request,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Req,
  Inject
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { ImageUploadDto } from './dto/image.dto'
import { MinioService } from 'nestjs-minio-client'
import { ResourceService } from 'src/modules/resource/resource.service'
import { ulid } from 'ulid'

@Controller({
  version: '1',
  path: 'upload'
})
@ApiTags('upload')
export class UploadController {
  constructor (
    private readonly minioClient: MinioService,
    private readonly resourceService: ResourceService
  ) {}

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
    const fileName = file.originalname.split(imageType)?.[0]
    const randomName = [ulid(), imageType].join('.')
    const data = await this.minioClient.client.putObject(
      'avatars',
      randomName,
      file.buffer,
      file.size,
      {
        'Content-Type': file.mimetype
      }
    )
    const res = {
      fileName: fileName,
      resourcesName: randomName,
      suffix: '.' + imageType,
      linkUrl: 'http://175.178.14.116:9000/avatars/' + randomName
    }
    await this.resourceService.saveUploadResourceTaskInfo({
      link: res.linkUrl,
      name: fileName,
      type: 1,
      extra: JSON.stringify({
        ...file,
        ...data,
        buffer: undefined
      })
    })
    return res
  }
}
