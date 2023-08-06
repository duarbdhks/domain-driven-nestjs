import { Account } from '@server/account/domain/account'
import { SaveOptions } from 'typeorm'

export interface AccountRepository {
  save: (account: Account | Account[], options?: SaveOptions) => Promise<void>
  findById: (id: number) => Promise<Account | null>
  findByName: (name: string) => Promise<Account[]>
  findByEmail: (email: string) => Promise<Account[]>
  existsByEmail: (email: string) => Promise<boolean>
}
