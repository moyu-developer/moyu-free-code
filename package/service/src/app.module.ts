import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { databaseConfig } from 'config/db'
import env from 'config/env'
import { ViewsModule } from './modules/views/views.module'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(databaseConfig),
    ViewsModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
