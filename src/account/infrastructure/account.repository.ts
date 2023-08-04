import { Account } from '@server/account/domain/account'
import { AccountEntity } from '@server/account/infrastructure/entity/account.entity'
import { plainToInstance } from 'class-transformer'
import { Repository } from 'typeorm'

export class AccountRepository extends Repository<AccountEntity> {
  async saveAccount(data: Account | Account[]): Promise<void> {
    const models = Array.isArray(data) ? data : [data]
    const entities = this.create(models.map((model) => plainToInstance(AccountEntity, model)))
    await this.save(entities)
  }
}
