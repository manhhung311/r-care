import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PurchaseInformationnDocument =
  HydratedDocument<PurchaseInformation>;
@Schema()
export class PurchaseInformation {
  constructor(product: string) {
    this.product = product;
  }
  id: string;

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

  @Prop()
  emails: string[];

  @Prop()
  phoneNumber: string[];

  @Prop()
  linkSocial: string[];

  @Prop()
  jobs: string;

  // @Prop((type) => Expenses)
  // expenses: Expenses[];

  // @Prop((type) => Feedbacks)
  // feedbacks: Feedbacks[];

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const PurchaseInformationSchema =
  SchemaFactory.createForClass(PurchaseInformation);
