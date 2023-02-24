import { Module } from '@nestjs/common';
import { SlonikModule } from './slonik/slonik.module';

@Module({
  imports: [SlonikModule],
  exports: [SlonikModule]
})
export class NestLibsModule {}
