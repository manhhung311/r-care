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
    skip: number,
    limit: number,
    query: CustomerInformationQueryDTO,
    ComId: string,
  ): Promise<CustomerInformationDocument> {
    const [count, items] = await Promise.all([
      this.customerInformation_model.count({
        ...query,
        ComId: ComId,
        isHidden: false,
        deleted_at: null,
      }),
      this.customerInformation_model
        .find({
          ...query,
          ComId: ComId,
          isHidden: false,
          deleted_at: null,
        })
        .populate([{ path: 'feedBacks' }, { path: 'purchases' }])
        .skip(skip)
        .limit(limit),
      ,
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { count, items };
  }
}
