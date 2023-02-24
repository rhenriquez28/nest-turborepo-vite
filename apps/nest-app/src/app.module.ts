import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NestLibsModule} from "nest-libs"

@Module({
  imports: [NestLibsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
