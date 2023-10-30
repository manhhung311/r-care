import { Test, TestingModule } from '@nestjs/testing';
import { MangamentController } from './mangament.controller';
import { MangamentService } from 'src/Services/Mangament.service';

describe('MangamentController', () => {
  let controller: MangamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangamentController],
      providers: [MangamentService],
    }).compile();

    controller = module.get<MangamentController>(MangamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
