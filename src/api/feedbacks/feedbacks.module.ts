import { Module } from '@nestjs/common';
import { FeedbacksController } from './feedbacks.controller';
import { FeedBacksService } from 'src/Services/FeedBacks.service';
import { MongooseModule } from '@nestjs/mongoose';
import entities from 'src/Models';
import { FeedbacksRepository } from 'src/Repositories/FeedBacks.repository';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { PurchaseInformationRepository } from 'src/Repositories/PurchaseInformation.repository';

@Module({
  imports: [MongooseModule.forFeature(entities)],
  controllers: [FeedbacksController],
  providers: [
    FeedbacksRepository,
    CustomerInformationRepository,
    PurchaseInformationRepository,
    FeedBacksService,
  ],
})
export class FeedbacksModule {}
