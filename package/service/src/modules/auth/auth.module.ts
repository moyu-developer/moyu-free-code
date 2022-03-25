import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from 'src/modules/user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/common/enums/jwt'

@Module({
  imports: [UserModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
