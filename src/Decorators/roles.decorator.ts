import { SetMetadata } from '@nestjs/common';
import { Permission } from 'src/Models/Roles.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Permission[]) => {
  console.log(roles);
  return SetMetadata(ROLES_KEY, roles);
};
