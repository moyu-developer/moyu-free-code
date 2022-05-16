import { Module } from '@nestjs/common'
import { UploadService } from './upload.service'
import { UploadController } from './upload.controller'
import { HttpModule } from '@nestjs/axios'
import { MinioModule } from 'nestjs-minio-client'
import { ResourceModule } from 'src/modules/resource/resource.module'

@Module({
  providers: [UploadService],
  controllers: [UploadController],
  imports: [HttpModule, MinioModule.register({
    endPoint: '175.178.14.116',
    port: 9000,
    useSSL: false,
    accessKey: 'moyu',
    secretKey: 'moyu1433223'
  }), ResourceModule]
})
export class UploadModule {}
