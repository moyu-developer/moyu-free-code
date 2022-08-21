import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { ResourceModule } from './resource/resource.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, PageModule, ResourceModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
