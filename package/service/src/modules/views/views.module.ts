import { Module } from '@nestjs/common'
import { ViewsService } from './views.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ViewsController } from './views.controller'
import { View } from 'src/entity'

@Module({
  imports: [TypeOrmModule.forFeature([View])],
  providers: [ViewsService],
  controllers: [ViewsController],
  exports: [ViewsService]
})
export class ViewsModule {}
