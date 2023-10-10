import { PurchaseInformation } from './PurchaseInformation.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { Expose, Transform } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Feedbacks } from './feedbacks.entity';
import { Users } from './Users.entity';

export type CustomerInformationDocument = HydratedDocument<CustomerInformation>;

@Schema()
export class CustomerInformation {
  _id?: ObjectId | string;

  @Expose()
  @Transform((value) => value.obj?._id?.toString(), { toClassOnly: true })
  id?: string;

  @Prop()
  lastName: string;

  @Prop()
  firstName: string;

  @Prop()
  brithDay: string;

  @Prop()
  gender: string;

  @Prop()
  ComId: string;

  @Prop()
  address: string;

  @Prop()
  wards: string;

  @Prop()
  district: string;
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

  @Prop({ default: false })
  isHidden: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  @Prop({
    type: [{ type: mongoose.Schema.ObjectId, ref: PurchaseInformation.name }],
  })
  purchases: PurchaseInformation[];

  @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: Feedbacks.name }] })
  feedBacks: Feedbacks[];
}

export const CustomerInformationSchema =
  SchemaFactory.createForClass(CustomerInformation);
