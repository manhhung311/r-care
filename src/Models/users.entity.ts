import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Roles } from './Roles.entity';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  _id?: ObjectId;

  @Prop()
  UserAvatar: string;

  @Prop()
  UserId: string;

  @Prop()
  ComId: string;

  @Prop()
  GroupId: string;

  @Prop()
  FullName: string;

  @Prop()
  email: string;

  @Prop()
  ComName: string;

  @Prop()
  UserRole: string;

  @Prop({
    type: [{ type: mongoose.Schema.ObjectId, ref: Roles.name }],
  })
  roles: Roles[];

  secret: string;
  token: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
