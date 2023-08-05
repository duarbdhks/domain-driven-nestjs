import { Injectable } from '@nestjs/common'
import { OpenAccountRequestDTO } from '@server/account/interface/dto'
import { IBody, IHeaders } from '@shared/interface'

@Injectable()
export class AccountService {
  async openAccount(options: IBody<OpenAccountRequestDTO> & IHeaders): Promise<void> {
    console.log(options, 'openAccount')
    // 1. 계좌를 생성한다.
    // 2. 계좌를 open 한다.
    // 3. 계좌를 저장한다.
  }
}
