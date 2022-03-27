import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  HttpStatus
  ,
  Injectable
} from '@nestjs/common'
import type { Observable } from 'rxjs'
import { map } from 'rxjs'
import { codeMessage } from '../enums/http'

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  intercept (_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        data,
        code: HttpStatus.OK,
        message: codeMessage[HttpStatus.OK]
      }))
    )
  }
}
