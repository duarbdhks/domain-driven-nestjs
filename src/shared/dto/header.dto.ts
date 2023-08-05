import { IHeader } from '@shared/interface'
import { transformInt } from '@shared/transformer'
import { Transform } from 'class-transformer'
import { IsDefined, IsOptional, IsString, IsUUID } from 'class-validator'

export class HeaderDTO implements IHeader {
  @IsOptional()
  @Transform(transformInt, { toClassOnly: true })
  readonly user_id?: number

  @IsOptional()
  @IsString()
  readonly ipaddr?: string

  @IsOptional()
  @IsUUID('4')
  readonly uuid?: string

  @IsDefined()
  @IsString()
  readonly 'user-agent': string

  @IsOptional()
  readonly geoInfo?: any

  @IsOptional()
  @IsString()
  v?: string
}
