import { Module } from '@nestjs/common';
import { SlonikService } from './slonik.service';

@Module({
  providers: [SlonikService],
  exports: [SlonikService]
})
export class SlonikModule {}
