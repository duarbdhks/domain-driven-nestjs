import * as path from 'path'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from '@server/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [path.join(__dirname, '/**/entity/**/*.entity{.ts,.js}')],
      extra: { max: config.db.max },
      logging: ['error'],
      synchronize: false,
      url: config.db.connectionString,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
