import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';
import { CustomerInformation } from './CustomerInformation.entity';
import { PurchaseInformation } from './PurchaseInformation.entity';
import { Users } from './Users.entity';

export type FeedbacksDocument = HydratedDocument<Feedbacks>;
@Schema()
export class Feedbacks {
  _id?: ObjectId | string;

  @Expose()
  @Transform((value) => value.obj?._id?.toString(), { toClassOnly: true })
  id?: string;

  @Prop()
  product: string;

  @Prop()
  comment: string;

  @Prop()
  recommendations: string;

  @Prop()
  suggestion: string;

  @Prop()
  rate: number;

  @Prop()
  ComId: string;

  @Prop()
  createdAt: Date;

  @Prop({ default: false })
  isHidden: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  // @Prop({ type: mongoose.Schema.ObjectId, ref: CustomerInformation.name })
  // customerInformation: CustomerInformation;

  // @Prop({ type: mongoose.Schema.ObjectId, ref: PurchaseInformation.name })
  // purchaseInformation: PurchaseInformation;
}

export const FeedbacksSchema = SchemaFactory.createForClass(Feedbacks);
