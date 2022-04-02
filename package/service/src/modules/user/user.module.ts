import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service'
import { User } from 'src/entity'
import { UserController } from './user.controller'
import { OauthService } from 'src/common/oauth/oauth.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, OauthService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
