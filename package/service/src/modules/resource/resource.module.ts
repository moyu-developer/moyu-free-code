import { Module } from '@nestjs/common'
import { ResourceService } from './resource.service'
import { Resource } from 'src/entity/resource'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ResourceController } from './resource.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  providers: [ResourceService],
  controllers: [ResourceController],
  exports: [ResourceService]
})
export class ResourceModule {}
