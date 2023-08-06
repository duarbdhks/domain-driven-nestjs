import { HttpExceptionFilter } from '@libs/filter/http-exception.filter'
import { LoggingInterceptor } from '@libs/interceptor/logging.interceptor'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { config } from '@server/config'
import * as compression from 'compression'
import { AppModule } from './app.module'

function setSwagger(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('NestJS DDD Practice')
    .setDescription('Domain Driven Design Practice')
    .setVersion('1.0')
    .addBasicAuth()
    .build()

  const document = SwaggerModule.createDocument(app, documentBuilder)
  SwaggerModule.setup('api', app, document, { swaggerOptions: { defaultModelsExpandDepth: -1 } })
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(compression())
  app.setGlobalPrefix('v1')
  // app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  setSwagger(app)
  await app.listen(config.port)
}

bootstrap().catch((err) => {
  console.error(err)
  console.log('Error occurred while bootstraping the server.')
})