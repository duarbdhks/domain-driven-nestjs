import { CallHandler, ExecutionContext, Logger, NestInterceptor } from '@nestjs/common'
import { map, Observable } from 'rxjs'

export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest()
    const response = context.switchToHttp().getResponse()
    return next.handle().pipe(
      map((data) => {
        this.logger.log(JSON.stringify({
          requestId: request.headers.uuid,
          userAgent: request.header('user-agent'),
          request: { method: request.method, url: request.url, body: request.body },
          response: { ...data, statusCode: response.statusCode },
        }))
        return data
      }),
    )
  }
}