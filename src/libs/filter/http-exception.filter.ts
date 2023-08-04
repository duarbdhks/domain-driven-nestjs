import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter<HttpException | Error> {
  private readonly logger = new Logger(HttpExceptionFilter.name)

  catch(exception: HttpException | Error, host: ArgumentsHost): Response<string, Record<string, string>> {
    this.logger.error(exception.message, exception.stack)
    const request = host.switchToHttp().getRequest<Request>()
    const response = host.switchToHttp().getResponse<Response>()

    this.logger.error({ request: { method: request.method, url: request.url, body: request.body } }, exception.stack)
    if (exception instanceof HttpException) {
      const exceptionStatus = exception.getStatus()
      const exceptionMessage = exception.message
      if (exceptionStatus === HttpStatus.INTERNAL_SERVER_ERROR) {
        return response.status(500).json()
      }

      if (
        exceptionStatus === HttpStatus.NOT_FOUND &&
        exceptionMessage.split(' ')[0] === 'Cannot' &&
        exceptionMessage.split(' ').length === 3
      ) {
        return response.status(404).json()
      }

      return response.status(exceptionStatus).json(exception.getResponse())
    }

    return response.status(500).json()
  }
}