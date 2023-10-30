import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInformationService } from 'src/Services/PurchaseInformation.service';

describe('PurchaseInformationService', () => {
  let service: PurchaseInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseInformationService],
    }).compile();

    service = module.get<PurchaseInformationService>(
      PurchaseInformationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
