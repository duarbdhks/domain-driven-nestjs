import { IAccount, IAccountModel } from '@server/account/domain/account.interface'

export class Account implements IAccount {
  private readonly id: number
  private readonly name: string
  private readonly email: string
  private readonly created_at: Date
  private readonly deleted_at: Date | null
  private readonly updated_at: Date | null
  private password: string
  private balance: number
  private locked_at: Date | null

  constructor(options: IAccountModel) {
    Object.assign(this, options)
  }

  deposit(amount: number): void {
    console.log('deposit')
  }

  lock(): void {
    console.log('lock')
  }

  open(): void {
    console.log('계좌를 개설하였습니다.')
  }

  updatePassword(password: string): void {
    console.log('updatePassword')
  }

  withdraw(amount: number): void {
    console.log('withdraw')
  }

  close(): void {
    console.log('close')
  }

  commit(): void {
    console.log('commit')
  }
}