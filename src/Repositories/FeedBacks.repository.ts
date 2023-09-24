import { Injectable } from '@nestjs/common';
import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import { CustomerInformation } from 'src/Models/CustomerInformation.entity';
import { Feedbacks, FeedbacksDocument } from 'src/Models/feedbacks.entity';

@Injectable()
export class FeedbacksRepository extends BaseRepositoryAbstract<FeedbacksDocument> {
  constructor(
    @InjectModel(Feedbacks.name)
    private readonly feedbacks_model: Model<FeedbacksDocument>,
  ) {
    super(feedbacks_model);
  }
}
