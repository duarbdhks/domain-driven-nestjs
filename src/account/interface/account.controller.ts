import { Body, Controller, HttpStatus, Post, Headers, Get } from '@nestjs/common'
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiResponse } from '@nestjs/swagger'
import { AccountService } from '@server/account/application/account.service'
import { OpenAccountRequestDTO } from '@server/account/interface/dto'
import { HeaderDTO } from '@shared/dto'

@Controller('accounts')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
  ) {}

  @Post('/')
  @ApiResponse({ status: HttpStatus.CREATED, description: '계좌 개설' })
  @ApiBadRequestResponse({ description: '잘못된 요청' })
  @ApiInternalServerErrorResponse({ description: '서버 에러' })
  openAccount(
    @Headers() header: HeaderDTO,
    @Body() body: OpenAccountRequestDTO,
  ): Promise<void> {
    return this.accountService.openAccount({ body, header })
  }
}
