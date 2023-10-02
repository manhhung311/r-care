import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import {
  PurchaseInformation,
  PurchaseInformationnDocument,
} from 'src/Models/PurchaseInformation.entity';

@Injectable()
export class PurchaseInformationRepository extends BaseRepositoryAbstract<PurchaseInformationnDocument> {
  constructor(
    @InjectModel(PurchaseInformation.name)
    private readonly purchaseInformation: Model<PurchaseInformationnDocument>,
  ) {
    super(purchaseInformation);
  }
}
