import { SetMetadata } from '@nestjs/common';
import { Permission } from 'src/Models/Roles.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Permission[]) => {
  return SetMetadata(ROLES_KEY, roles);
};
