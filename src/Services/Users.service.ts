import { UserCreateDTO } from '@app/common/DTO/user-create.dto';
import { Injectable } from '@nestjs/common';
import { RolesRepository } from 'src/Repositories/Roles.repository';
import { UsersRepository } from 'src/Repositories/Users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly rolesRepository: RolesRepository,
  ) {}

  public async getUserById(id: string) {
    return this.usersRepository.findByUserId(id);
  }

  public async createUser(data: UserCreateDTO) {
    const user = await this.usersRepository.create(data);
    return user;
  }
}
