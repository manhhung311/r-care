import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Users } from 'src/Models/Users.entity';
import { UsersService } from 'src/Services/Users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  static users = Array<Users>();
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('SECRET'),
      });
      let user = AuthGuard.users?.find(
        (item) => item.UserId === payload.UserId,
      );
      if (!user) {
        user = await this.usersService.getUserById(payload.UserId);
        user.token = token;
        AuthGuard.users.push(user);
      }
      if (!user)
        user = await this.usersService.createUser({
          FullName: payload.FullName,
          UserAvatar: payload.UserAvatar,
          UserId: payload.UserId,
          ComId: payload.ComId,
          GroupId: payload.GroupId,
          email: payload.email,
          ComName: payload.ComName,
          UserRole: payload.UserRole,
        });
      user.token = token;
      request['user'] = user;
    } catch (ex) {
      console.log(ex);
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
