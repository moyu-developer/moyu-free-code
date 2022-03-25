import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { HttpExceptionFilter } from 'src/common/filter/httpException'
import { TransformResponseInterceptor } from 'src/common/interceptor/response'

async function bootstrap () {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformResponseInterceptor())
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true
  //   })
  // )
  const options = new DocumentBuilder()
    .setTitle('Moyu Free API')
    .setDescription('这个作者很懒，什么都没留下')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  await app.listen(8500, '0.0.0.0')
}
bootstrap()
