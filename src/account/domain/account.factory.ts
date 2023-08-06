import { Account } from '@server/account/domain/account'
import { ICreateAccountProps } from '@server/account/domain/account.interface'
import { plainToInstance } from 'class-transformer'

export class AccountFactory {
  create(options: ICreateAccountProps): Account {
    return plainToInstance(Account, {
      ...options,
      balance: 0,
      locked_at: null,
      created_at: new Date(),
      updated_at: null,
      deleted_at: null,
    })
  }
}
