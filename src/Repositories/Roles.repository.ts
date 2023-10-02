import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import { Users, UsersDocument } from 'src/Models/Users.entity';
import { Roles, RolesDocument } from 'src/Models/Roles.entity';

@Injectable()
export class RolesRepository extends BaseRepositoryAbstract<RolesDocument> {
  constructor(
    @InjectModel(Roles.name)
    private readonly roles: Model<RolesDocument>,
  ) {
    super(roles);
  }
}
