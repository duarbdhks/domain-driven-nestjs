import { IAccount, IAccountModel } from '@server/account/domain/account.interface'

export class Account implements IAccount {
  readonly id: number
  readonly name: string
  readonly email: string
  password: string
  balance: number
  locked_at?: Date | null
  readonly created_at: Date
  updated_at?: Date | null

  constructor(options: IAccountModel) {
    Object.assign(this, options)
  }

  compareId(id: number): boolean {
    return false
  }

  deposit(amount: number): void {
    console.log('deposit')
  }

  lock(): void {
    console.log('lock')
  }

  open(): void {
    console.log('open')
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