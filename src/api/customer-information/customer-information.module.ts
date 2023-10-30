import { Module } from '@nestjs/common';
import { CustomerInformationController } from './customer-information.controller';
import { CustomerInformationService } from 'src/Services/CustomerInformation.service';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { FeedbacksRepository } from 'src/Repositories/FeedBacks.repository';
import { MongooseModule } from '@nestjs/mongoose';
import entities from 'src/Models';

@Module({
  imports: [MongooseModule.forFeature(entities)],
  controllers: [CustomerInformationController],
  providers: [
    FeedbacksRepository,
    CustomerInformationRepository,
    CustomerInformationService,
  ],
})
export class CustomerInformationModule {}
