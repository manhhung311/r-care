import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/Decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndMerge('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => {
      if (user.isAdmin || user.roles.find((item) => item.isAdmin)) return true;
      if (
        user.roles.find((item) => {
          return item.permissions.find(
            (permission) =>
              (permission.subject === role.subject &&
                permission.action === role.action &&
                (permission.role === role.role ||
                  permission.role === null ||
                  permission.role === undefined)) ||
              permission.isAdmin,
          );
        })
      )
        return true;
      return false;
    });
  }
}
