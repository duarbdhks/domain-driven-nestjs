import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator'

export class OpenAccountRequestDTO {
  @IsDefined()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({ minLength: 2, maxLength: 50, example: '염규완' })
  readonly name: string

  @IsDefined()
  @IsString()
  @ApiProperty({ example: 'duarbdhks@gmail.com' })
  readonly email: string

  @IsDefined()
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @ApiProperty({ minLength: 8, maxLength: 50, example: 'password123' })
  readonly password: string
}
