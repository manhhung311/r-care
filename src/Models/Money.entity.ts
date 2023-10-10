import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Users } from './Users.entity';

export type MoneysDocument = HydratedDocument<Moneys>;
@Schema()
export class Moneys {
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

  @Prop()
  ComId: string;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const MoneysSchema = SchemaFactory.createForClass(Moneys);
