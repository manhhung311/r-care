import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as crypto from 'crypto';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return this.loadData(data);
      }),
    );
  }

  isJson = (obj) => {
    try {
      JSON.parse(obj);
    } catch (e) {
      return false;
    }
    return true;
  };

  private Transformer(obj: any, secret: string) {
    try {
      // eslint-disable-next-line prefer-const
      let newObj = {};
      if (obj)
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
                if (
                  Array.isArray(obj[key][index]) ||
                  this.isJson(obj[key][index])
                )
                  newArray.push(this.Transformer(obj[key][index], secret));
                else newArray.push(this.Decoding(obj[key][index], secret));
              }
              newObj[key] = newArray;
            } else {
              newObj[key] = this.Transformer(obj[key], secret);
            }
          } else
            newObj[key] = obj[key] ? this.Decoding(obj[key], secret) : obj[key];
        }
      return newObj;
    } catch (ex) {
      console.log(ex);
    }
  }

  loadData(data: any) {
    if (Array.isArray(data.items)) {
      for (const item in data.items) {
        data.items[item] = this.Transformer(data.items[item]._doc, data.secret);
      }
    } else {
      data = this.Transformer(data._doc, data.secret);
    }
    delete data.secret;
    delete data.token;
    return data;
  }

  private Decoding(text: string, secret: string) {
    try {
      const decipher = crypto.createDecipheriv(
        'aes-256-ctr',
        Buffer.from(secret.padEnd(32, '\0')),
        Buffer.from(secret.padEnd(16, '\0')),
      );
      const data = Buffer.concat([
        decipher.update(text, 'hex'),
        decipher.final(),
      ]).toString();
      return data;
    } catch (ex) {
      return null;
    }
  }
}
