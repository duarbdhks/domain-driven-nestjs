import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Account } from '@server/account/domain/account'
import { AccountRepository } from '@server/account/infrastructure/account.repository.interface'
import { AccountEntity } from '@server/account/infrastructure/entity/account.entity'
import { plainToInstance } from 'class-transformer'
import { Repository, SaveOptions } from 'typeorm'

@Injectable()
export class AccountRepositoryImpl implements AccountRepository {
  constructor(
    @InjectRepository(AccountEntity) private readonly accountEntity: Repository<AccountEntity>,
  ) {}

  async save(account: Account | Account[], options?: SaveOptions): Promise<void> {
    const models = Array.isArray(account) ? account : [account]
    const entities = this.accountEntity.create(plainToInstance(AccountEntity, models))
    await this.accountEntity.save(entities, options)
  }

  findById(id: number): Promise<Account | null> {
    return Promise.resolve(undefined)
  }

  async findByName(name: string): Promise<Account[]> {
    const accounts = await this.accountEntity.find({ where: { name } })
    return plainToInstance(Account, accounts)
  }

  async findByEmail(email: string): Promise<Account[]> {
    const accounts = await this.accountEntity.find({ where: { email } })
    return plainToInstance(Account, accounts)
  }

  existsByEmail(email: string): Promise<boolean> {
    return this.accountEntity.exist({ where: { email } })
  }
}
