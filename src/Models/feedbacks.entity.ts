import { HydratedDocument, ObjectId } from 'mongoose';
import { Updates } from './updates.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';

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
  createdAt: Date;

  @Prop()
  updates: Updates[];
}

export const FeedbacksSchema = SchemaFactory.createForClass(Feedbacks);
