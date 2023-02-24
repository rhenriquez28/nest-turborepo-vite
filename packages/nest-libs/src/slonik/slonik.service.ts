import { Injectable } from '@nestjs/common';

@Injectable()
export class SlonikService {
    getHelloFromSlonik(){
        return "Hello from Slonik!!!"
    }
}
