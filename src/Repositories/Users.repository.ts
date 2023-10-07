import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import { Users, UsersDocument } from 'src/Models/users.entity';
import { Roles } from 'src/Models/Roles.entity';

@Injectable()
export class UsersRepository extends BaseRepositoryAbstract<UsersDocument> {
  constructor(
    @InjectModel(Users.name)
    private readonly users: Model<UsersDocument>,
  ) {
    super(users);
  }

  public async findByUserId(id: string) {
    return await this.users.findOne({ UserId: id }).populate('roles');
  }
}
