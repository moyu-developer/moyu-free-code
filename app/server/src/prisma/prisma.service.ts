import { INestApplication, Injectable } from '@nestjs/common';
import * as Prisma from '@prisma/client';

@Injectable()
export class PrismaService extends Prisma.PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}