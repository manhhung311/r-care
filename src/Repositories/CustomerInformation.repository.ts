import { Injectable } from '@nestjs/common';
import { FilterQuery, Model, ObjectId, QueryOptions } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import {
  CustomerInformation,
  CustomerInformationDocument,
} from 'src/Models/CustomerInformation.entity';
import { Feedbacks } from 'src/Models/feedbacks.entity';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';

@Injectable()
export class CustomerInformationRepository extends BaseRepositoryAbstract<CustomerInformationDocument> {
  constructor(
    @InjectModel(CustomerInformation.name)
    private readonly customerInformation_model: Model<CustomerInformationDocument>,
  ) {
    super(customerInformation_model);
  }

  public async findAllByCompany(
    ComId: string,
    query: CustomerInformationQueryDTO,
  ): Promise<CustomerInformationDocument> {
    const [count, items] = await Promise.all([
      this.customerInformation_model.count({
        ...query.conditions,
        ComId: ComId,
        deleted_at: null,
      }),
      this.customerInformation_model
        .find({ ...query.conditions, ComId: ComId, deleted_at: null })
        .populate('feedBacks')
        .skip(query.skip)
        .limit(query.limit),
      ,
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { count, items };
  }
}
