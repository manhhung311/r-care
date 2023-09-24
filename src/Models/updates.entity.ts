import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UpdatesDocument = HydratedDocument<Updates>;

@Schema()
export class Updates {
  id: string;

  @Prop()
  users: number[];

  @Prop({ default: null })
  @Prop({ default: new Date() })
  createdAt: Date;
}

export const UpdatesSchema = SchemaFactory.createForClass(Updates);
