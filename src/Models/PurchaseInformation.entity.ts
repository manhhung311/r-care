import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Feedbacks } from './feedbacks.entity';
import { Expenses } from './expenses.entity';
import { Users } from './Users.entity';

export type PurchaseInformationnDocument =
  HydratedDocument<PurchaseInformation>;
@Schema()
export class PurchaseInformation {
  constructor(product: string) {
    this.product = product;
  }
  id: string;

  @Prop()
  ComId: string;

  @Prop()
  product: string;

  @Prop()
  currencyUnit: string;

  @Prop()
  describe: string;

  @Prop()
  quantity: number;

  @Prop()
  unit: string;

  @Prop()
  price: number;

  @Prop()
  transportFee: number;

  @Prop()
  province: string;

  @Prop()
  country: string;

  @Prop({ default: false })
  isHidden: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const PurchaseInformationSchema =
  SchemaFactory.createForClass(PurchaseInformation);
