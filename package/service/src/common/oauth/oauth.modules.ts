import { Module } from '@nestjs/common'
import { OauthService } from './oauth.service'

@Module({
  providers: [OauthService],
  exports: [OauthService]
})
export class OauthModule {}
