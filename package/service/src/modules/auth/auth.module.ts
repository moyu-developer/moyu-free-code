import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { LocalStrategy } from './local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/common/enums/jwt'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
