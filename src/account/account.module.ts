import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountService } from '@server/account/application/account.service'
import { AccountFactory } from '@server/account/domain/account.factory'
import { AccountRepositoryImpl } from '@server/account/infrastructure/account.repository'
import { AccountEntity } from '@server/account/infrastructure/entity/account.entity'
import { AccountController } from '@server/account/interface/account.controller'

const application = [AccountService]
const domain = [AccountFactory]
const infrastructure = [{ provide: 'AccountRepository', useClass: AccountRepositoryImpl }]

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity]),
  ],
  controllers: [AccountController],
  providers: [
    ...application,
    ...domain,
    ...infrastructure,
  ],
})
export class AccountModule {
}