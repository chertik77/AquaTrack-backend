import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules'
import { RootConfig } from './modules/config/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const { PORT } = app.get(RootConfig)

  await app.listen(PORT)
}

bootstrap()
