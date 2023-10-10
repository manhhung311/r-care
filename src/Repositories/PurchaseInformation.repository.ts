import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import {
  PurchaseInformation,
  PurchaseInformationnDocument,
} from 'src/Models/PurchaseInformation.entity';
import { PurchaseInformationQueryDTO } from '@app/common/DTO/purchaseInformation-query.dto';

@Injectable()
export class PurchaseInformationRepository extends BaseRepositoryAbstract<PurchaseInformationnDocument> {
  constructor(
    @InjectModel(PurchaseInformation.name)
    private readonly purchaseInformation: Model<PurchaseInformationnDocument>,
  ) {
    super(purchaseInformation);
  }

  public async findAllByCompany(
    ComId: string,
    query: PurchaseInformationQueryDTO,
  ): Promise<PurchaseInformationnDocument> {
    const [count, items] = await Promise.all([
      this.purchaseInformation.count({
        ...query.conditions,
        ComId: ComId,
        deleted_at: null,
      }),
      this.purchaseInformation
        .find({ ...query.conditions, ComId: ComId, deleted_at: null })
        // .populate('feedBacks')
        .skip(query.skip)
        .limit(query.limit),
      ,
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { count, items };
  }
}
