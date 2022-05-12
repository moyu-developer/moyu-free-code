import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ViewsModule } from './modules/views/views.module'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import Configuration from 'src/config'
import { View, User } from 'src/entity'
import { RedisCacheModule } from './modules/redis-cache/redis-cache.module'
import { UploadModule } from './modules/upload/upload.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [Configuration] }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const sqlite = configService.get('dev').db || {}
        return {
          type: 'postgres',
          entities: [View, User],
          ...sqlite
        }
      },
      inject: [ConfigService]
    }),
    ViewsModule,
    UserModule,
    AuthModule,
    RedisCacheModule,
    UploadModule
  ],
  controllers: [AppController]
})
export class AppModule {}
