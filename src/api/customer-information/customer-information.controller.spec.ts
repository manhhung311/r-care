import { Test, TestingModule } from '@nestjs/testing';
import { CustomerInformationController } from './customer-information.controller';
import { CustomerInformationService } from 'src/Services/CustomerInformation.service';

describe('CustomerInformationController', () => {
  let controller: CustomerInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerInformationController],
      providers: [CustomerInformationService],
    }).compile();

    controller = module.get<CustomerInformationController>(
      CustomerInformationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
