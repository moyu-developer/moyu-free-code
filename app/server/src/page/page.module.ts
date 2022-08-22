import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [PageController],
  providers: [PageService],
  imports: [PrismaModule]
})
export class PageModule {}
