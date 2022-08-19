import { ConflictException, HttpException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    /** 查，看用户存不存在 */
    const user = await this.prisma.user.findUnique({
      where: {
        name: createUserDto.name,
      },
    });

    if (user?.id) {
      throw new HttpException('当前用户已存在', 500);
    }

    const password = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.user.create({ data: { ...createUserDto, password } });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { name: true, avatar: true, id: true },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
