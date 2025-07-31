import { IsPort, IsString } from 'class-validator'

export class RootConfig {
  @IsString()
  public readonly DATABASE_URL!: string

  @IsPort()
  public readonly PORT!: number
}
