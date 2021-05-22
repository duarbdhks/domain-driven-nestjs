import { typeormConfig } from '@config/ormconfig'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { NestEventModule } from 'nest-event'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    NestEventModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
