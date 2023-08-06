import { Inject, Injectable } from '@nestjs/common'
import { AccountFactory } from '@server/account/domain/account.factory'
import { AccountRepository } from '@server/account/domain/account.repository.interface'
import { OpenAccountRequestDTO } from '@server/account/interface/dto'
import { IBody, IHeaders } from '@shared/interface'

@Injectable()
export class AccountService {
  constructor(
    private readonly accountFactory: AccountFactory,
    @Inject('AccountRepository') private readonly accountRepository: AccountRepository,
  ) {}

  async openAccount(options: IBody<OpenAccountRequestDTO> & IHeaders): Promise<void> {
    const { name, email, password } = options.body

    // 1. 계좌 개설 여부 확인
    const existsByEmail = await this.accountRepository.existsByEmail(email)
    if (existsByEmail) throw new Error('이미 존재하는 이메일입니다.')

    // 2. 계좌 생성
    const account = this.accountFactory.create({ name, email, password })

    // 3. 계좌 개설
    account.open()
    await this.accountRepository.save(account)
  }
}
