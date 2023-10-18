import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Users } from './Users.entity';
import { Expose, Transform } from 'class-transformer';
import { Feedbacks } from './feedbacks.entity';

export type PurchaseInformationnDocument =
  HydratedDocument<PurchaseInformation>;
@Schema()
export class PurchaseInformation {
  _id?: ObjectId | string;

  @Expose()
  @Transform((value) => value.obj?._id?.toString(), { toClassOnly: true })
  id?: string;

  @Prop()
  ComId: string;

  @Prop()
  product: string;

  @Prop()
  currencyUnit: string;

  @Prop()
  describe: string;

  @Prop()
  quantity: string;

  @Prop()
  unit: string;

  @Prop()
  price: string;

  @Prop()
  transportFee: string;

  @Prop()
  province: string;

  @Prop()
  paymentTime: string;

  @Prop()
  country: string;

  @Prop({ default: false })
  isHidden: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Feedbacks.name })
  feedBack: Feedbacks;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const PurchaseInformationSchema =
  SchemaFactory.createForClass(PurchaseInformation);
