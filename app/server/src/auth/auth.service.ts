import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginUserDto } from "../user/dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AuthResponse } from "./dto/auth.dto";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersService: UserService
  ) {}

  async login(loginDto: LoginUserDto): Promise<AuthResponse> {
    const { name, password } = loginDto;

    const user = await this.prismaService.user.findUnique({ where: { name } })

    if (!user.id) {
      throw new NotFoundException("user not found");
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    console.log(password, user)

    if (!validatePassword) {
      throw new UnauthorizedException("invalid password");
    }

    return {
      token: this.jwtService.sign({
        name,
      }),
      user,
    };
  }

  async register(createUserDto: CreateUserDto): Promise<AuthResponse> {
    const user = await this.usersService.create(createUserDto);
    return {
      token: this.jwtService.sign({ name: user.name }),
      user,
    };
  }
}
