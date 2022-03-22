import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { databaseConfig } from 'config/db'
import { ViewsModule } from './modules/views/views.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(databaseConfig),
    ViewsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
