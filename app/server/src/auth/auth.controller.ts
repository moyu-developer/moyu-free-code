import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "src/user/dto/login-user.dto";
import { AuthResponse } from "./dto/auth.dto";
import { user as UserModel } from "@prisma/client";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  login(@Body() loginDto: LoginUserDto): Promise<AuthResponse> {
    return this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/profile")
  getLoggedUser() {
    return {};
  }
}
