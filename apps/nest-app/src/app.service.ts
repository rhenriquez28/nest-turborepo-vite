import { Injectable } from '@nestjs/common';
import { SlonikService } from 'nest-libs';

@Injectable()
export class AppService {
  constructor(private slonikService: SlonikService){}
  getHello(): string {
    return this.slonikService.getHelloFromSlonik();
  }
}
