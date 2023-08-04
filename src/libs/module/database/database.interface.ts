import { EntityManager } from 'typeorm'

export interface IWriteConnection {
  readonly startTransaction: () => Promise<void>
  readonly commitTransaction: () => Promise<void>
  readonly rollbackTransaction: () => Promise<void>
  readonly isTransactionActive: boolean
  readonly manager: EntityManager
}

export interface IEntityIdTransform {
  from: (data: Buffer) => string
  to: (id: string) => Buffer
}
