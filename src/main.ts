import type { NestExpressApplication } from '@nestjs/platform-express'

import { NestFactory } from '@nestjs/core'

import * as morgan from 'morgan'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.setGlobalPrefix('api')

  app.use(morgan('dev'))

  app.disable('x-powered-by')

  app.enableCors({ origin: process.env.ALLOWED_ORIGINS })

  await app.listen(process.env.PORT!)
}

bootstrap()
