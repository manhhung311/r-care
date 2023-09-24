import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Updates } from './updates.entity';
export type ExpensesDocument = HydratedDocument<Expenses>;

@Schema()
export class Expenses {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  createdAt: Date;

  // @Prop({ default: false })
  // delete: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Updates.name })
  updates: ObjectId;
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);
