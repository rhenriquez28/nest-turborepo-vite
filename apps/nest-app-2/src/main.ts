import { NestFactory } from '@nestjs/core';
import { NestApp2Module } from './nest-app-2.module';

if (import.meta.env.PROD) {
  async function bootstrap() {
    const app = await NestFactory.create(NestApp2Module);
    await app.listen(3000);
  }

  bootstrap();
}

export const viteNodeApp = NestFactory.create(NestApp2Module);
