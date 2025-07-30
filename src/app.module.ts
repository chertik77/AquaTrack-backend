import { Module } from '@nestjs/common'

import { dotenvLoader, TypedConfigModule } from 'nest-typed-config'

import { RootConfig } from './config'

@Module({
  imports: [
    TypedConfigModule.forRoot({
      isGlobal: true,
      schema: RootConfig,
      load: dotenvLoader()
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
