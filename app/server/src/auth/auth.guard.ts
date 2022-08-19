import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.headers["authorization"];

    if (!token) {
      throw new UnauthorizedException("用户未登录，请登录后重试");
    }

    if (token !== "MY_AUTH_TOKEN") {
      throw new UnauthorizedException("无效的用户信息");
    }
    return true;
  }
}
