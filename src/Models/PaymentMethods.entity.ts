import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Users } from './Users.entity';

export type PaymentMethodsDocument = HydratedDocument<PaymentMethods>;
@Schema()
export class PaymentMethods {
  constructor(name: string) {
    this.name = name;
  }
  id: string;

  @Prop()
  name: string;

  @Prop()
  unit: string;

  @Prop({ default: false })
  isHidden: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  ComId: string;
}

export const PaymentMethodsSchema =
  SchemaFactory.createForClass(PaymentMethods);
