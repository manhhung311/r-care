import { Test, TestingModule } from '@nestjs/testing';
import { MangamentService } from 'src/Services/Mangament.service';

describe('MangamentService', () => {
  let service: MangamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangamentService],
    }).compile();

    service = module.get<MangamentService>(MangamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
