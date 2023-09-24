import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Feedbacks, FeedbacksDocument } from 'src/Models/feedbacks.entity';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';

@Injectable()
export class CustomerInformationService {
  constructor(
    private readonly customerInformationRepository: CustomerInformationRepository,
  ) {}

  public async create(info: CustomerInformationCreateDTO) {
    this.customerInformationRepository.create(info);
    const feedbacks = new Feedbacks();
    feedbacks.comment = '123';
    feedbacks.product = '123';
    feedbacks.rate = 5;
    const model = Model<FeedbacksDocument>;
    model.create(Feedbacks);
  }

  public async query(query?: CustomerInformationQueryDTO) {
    return this.customerInformationRepository.findAll(query);
  }
}
