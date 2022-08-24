import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PageService {
  constructor ( private readonly prisma: PrismaService ) {
  }

  async create () {}
}
