import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  id: string;

  @Prop()
  name: string;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
