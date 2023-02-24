import { Test, TestingModule } from '@nestjs/testing';
import { SlonikService } from './slonik.service';

describe('SlonikService', () => {
  let service: SlonikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlonikService],
    }).compile();

    service = module.get<SlonikService>(SlonikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
