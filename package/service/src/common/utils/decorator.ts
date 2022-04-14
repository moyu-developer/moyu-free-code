import { User } from 'src/entity'
import type { ExecutionContext } from '@nestjs/common'
import { createParamDecorator } from '@nestjs/common'
export interface ReturnUserTypes {
  id: number;
  name: string;
  avatar: string;
}

/**
 * 获取Token 用户信息装饰器
 * @example
 * @GetRequestUser() user: ReturnUserTypes
 */
export const GetRequestUser = createParamDecorator(
  (data: keyof ReturnUserTypes, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()
    console.log(req.user, 'req')
    if (data) {
      return new User(req.user.data)
    }
    return new User(req.User)
  }
)
