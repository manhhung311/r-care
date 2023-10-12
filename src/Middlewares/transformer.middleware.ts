import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TransformerMiddleware implements NestMiddleware {
  constructor(private readonly jwt: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.headers.authorization.startsWith('Bearer ')) {
        const token = req.headers.authorization.replace('Bearer ', '');
        const info = await this.verifyToken(token);
        req.body = this.Transformer(req.body, <string>(<any>info).EncryptKey);
        next();
      } else {
        throw new UnauthorizedException();
      }
    } catch (ex) {
      throw new UnauthorizedException();
    }
  }

  private Transformer(obj: object, secret: string) {
    try {
      // eslint-disable-next-line prefer-const
      let newObj = {};
      for (const key in obj) {
        if (
          key == 'email' ||
          key == 'lastName' ||
          key == 'firstName' ||
          key == 'id' ||
          key == 'isHidden' ||
          key == '_id' ||
          key == 'ComId' ||
          key == 'idUser'
        )
          newObj[key] = obj[key];
        else if (typeof obj[key] !== 'string') {
          if (Array.isArray(obj[key])) {
            const newArray = [];
            for (const index in obj[key]) {
              if (Array.isArray(obj[key][index]))
                newArray.push(this.Transformer(obj[key][index], secret));
              else newArray.push(this.Encoding(obj[key][index], secret));
            }
            newObj[key] = newArray;
          } else {
            newObj[key] = this.Transformer(obj[key], secret);
          }
        } else
          newObj[key] = obj[key] ? this.Encoding(obj[key], secret) : obj[key];
      }
      return newObj;
    } catch (ex) {
      console.log(ex);
    }
  }

  private Encoding(text: string, secret: string) {
    try {
      const cipher = crypto.createDecipheriv(
        'aes-256-ctr',
        Buffer.from(secret.padEnd(32, '\0')),
        Buffer.from(secret.padEnd(16, '\0')),
      );
      return Buffer.concat([
        cipher.update(text, 'utf-8'),
        cipher.final(),
      ]).toString('hex');
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  private async verifyToken(token: string): Promise<object> {
    try {
      return this.jwt.verify(token, {
        secret: process.env.SECRET,
      });
    } catch (ex) {
      return null;
    }
  }
}
