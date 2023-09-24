import { CustomerInformationCreateDTO } from '@app/common/DTO/CustomerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Feedbacks, FeedbacksDocument } from 'src/Models/feedbacks.entity';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { FeedbacksRepository } from 'src/Repositories/FeedBacks.repository';

@Injectable()
export class CustomerInformationService {
  constructor(
    private readonly customerInformationRepository: CustomerInformationRepository,
    private readonly feedbacksRepository: FeedbacksRepository,
  ) {}

  public async create(info: CustomerInformationCreateDTO) {
    const information = await this.customerInformationRepository.create(info);
    return information;
  }

  public async query(query?: CustomerInformationQueryDTO) {
    query.conditions = JSON.parse(<any>query.conditions);
    return this.customerInformationRepository.findAll(query);
  }
}
