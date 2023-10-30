import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInformationController } from './purchase-information.controller';
import { PurchaseInformationService } from 'src/Services/PurchaseInformation.service';

describe('PurchaseInformationController', () => {
  let controller: PurchaseInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseInformationController],
      providers: [PurchaseInformationService],
    }).compile();

    controller = module.get<PurchaseInformationController>(
      PurchaseInformationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
