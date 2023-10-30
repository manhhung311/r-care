import { Module } from '@nestjs/common';
import { PurchaseInformationController } from './purchase-information.controller';
import { PurchaseInformationService } from 'src/Services/PurchaseInformation.service';
import { PurchaseInformationRepository } from 'src/Repositories/PurchaseInformation.repository';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { MongooseModule } from '@nestjs/mongoose';
import entities from 'src/Models';

@Module({
  imports: [MongooseModule.forFeature(entities)],
  controllers: [PurchaseInformationController],
  providers: [
    PurchaseInformationRepository,
    CustomerInformationRepository,
    PurchaseInformationService,
  ],
})
export class PurchaseInformationModule {}
