import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PurchaseInformation } from './PurchaseInformation.entity';
import { Users } from './Users.entity';
export type ExpensesDocument = HydratedDocument<Expenses>;

@Schema()
export class Expenses {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  createdAt: Date;

  @Prop({ default: false })
  isHidden: boolean;

  @Prop()
  ComId: string;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  @Prop({ type: mongoose.Schema.ObjectId, ref: PurchaseInformation.name })
  purchaseInformation: ObjectId;
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);
