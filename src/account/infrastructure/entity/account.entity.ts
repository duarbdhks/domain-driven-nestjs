import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class AccountEntity {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string

  @Column({ type: 'int4', default: 0 })
  balance: number

  @Column({ type: 'timestamptz', nullable: true })
  locked_at?: Date | null

  @CreateDateColumn({ type: 'timestamptz', nullable: false, default: () => 'NOW()' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz', select: false })
  updated_at?: Date | null
}
