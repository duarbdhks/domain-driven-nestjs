import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountService } from '@server/account/application/account.service'
import { AccountRepository } from '@server/account/infrastructure/account.repository'
import { AccountEntity } from '@server/account/infrastructure/entity/account.entity'
import { AccountController } from '@server/account/interface/account.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, AccountRepository]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {
}