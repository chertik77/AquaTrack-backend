import { dotenvLoader, TypedConfigModule } from 'nest-typed-config'

import { RootConfig } from './config'

export const ConfigModule = TypedConfigModule.forRoot({
  schema: RootConfig,
  load: dotenvLoader()
})
