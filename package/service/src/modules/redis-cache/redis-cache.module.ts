import { CacheModule, Module } from '@nestjs/common'
import { RedisCacheService } from './redis-cache.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const redis = configService.get('dev').redis || {}
        return {
          store: redisStore,
          ...redis
        }
      }
    })
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService]
})
export class RedisCacheModule {}
