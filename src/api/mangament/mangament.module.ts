import { Module } from '@nestjs/common';
import { MangamentController } from './mangament.controller';
import { MangamentService } from 'src/Services/Mangament.service';
import { MongooseModule } from '@nestjs/mongoose';
import entities from 'src/Models';
import { FeedbacksRepository } from 'src/Repositories/FeedBacks.repository';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { PurchaseInformationRepository } from 'src/Repositories/PurchaseInformation.repository';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule, MongooseModule.forFeature(entities)],
  controllers: [MangamentController],
  providers: [
    FeedbacksRepository,
    CustomerInformationRepository,
    PurchaseInformationRepository,
    MangamentService,
  ],
})
export class MangamentModule {}
