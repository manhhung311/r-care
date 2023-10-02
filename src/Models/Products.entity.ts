import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Feedbacks } from './feedbacks.entity';
import { Expenses } from './expenses.entity';
import { Users } from './Users.entity';

export type ProductsDocument = HydratedDocument<Products>;
@Schema()
export class Products {
  constructor(name: string) {
    this.name = name;
  }
  id: string;

  @Prop()
  name: string;

  @Prop()
  unit: string;

  @Prop()
  price: number;

  @Prop({ default: false })
  isHidden: boolean;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Users.name })
  user: Users;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  ComId: string;

  // @Prop({ type: mongoose.Schema.ObjectId, ref: Feedbacks.name })
  // feedBack: Feedbacks;

  // @Prop({ type: mongoose.Schema.ObjectId, ref: Expenses.name })
  // expense: Expenses;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
