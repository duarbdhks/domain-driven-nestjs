export interface ICreateAccountProps {
  name: string
  email: string
  password: string
}

export interface IAccountModel {
  id?: number
  name: string
  email: string
  password: string
  balance: number
  locked_at?: Date | null
  created_at: Date
  deleted_at?: Date | null
  updated_at?: Date | null
}

export interface IAccount {
  open: () => void
  updatePassword: (password: string) => void
  withdraw: (amount: number) => void
  deposit: (amount: number) => void
  close: () => void
  lock: () => void
  commit: () => void
}
