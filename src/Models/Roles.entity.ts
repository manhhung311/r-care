import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RolesDocument = HydratedDocument<Roles>;

export enum ACTION {
  CREATE = 'CREATE',
  GET = 'GET',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

export enum SUBJECT {
  customer = 'customer',
  purchase = 'purchase',
  feedBacks = 'feedBacks',
}

export enum TYPEROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface Permission {
  role?: TYPEROLE;
  action: ACTION;
  subject?: SUBJECT;
}

@Schema()
export class Roles {
  id: string;

  @Prop()
  name: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop()
  permissions: Permission[];

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  ComId: string;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
