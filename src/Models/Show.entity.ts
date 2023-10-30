import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type UsersDocument = HydratedDocument<Show>;

@Schema()
export class Show {
  _id?: ObjectId;

  @Prop()
  ComId: string;

  @Prop()
  isShow: boolean;
}

export const isShowSchema = SchemaFactory.createForClass(Show);
