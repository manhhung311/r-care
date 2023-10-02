import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Feedbacks } from './feedbacks.entity';
import { Expenses } from './expenses.entity';
import { Users } from './Users.entity';

export type TransportationCompanysDocument =
  HydratedDocument<TransportationCompanys>;
@Schema()
export class TransportationCompanys {
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

export const TransportationCompanysSchema = SchemaFactory.createForClass(
  TransportationCompanys,
);
