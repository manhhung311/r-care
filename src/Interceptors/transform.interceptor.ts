// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import * as crypto from 'crypto';

// export interface Response<T> {
//   data: T;
// }

// @Injectable()
// export class TransformInterceptor<T>
//   implements NestInterceptor<T, Response<T>>
// {
//   constructor(private readonly jwt: JwtService) {}
//   intercept(
//     context: ExecutionContext,
//     next: CallHandler,
//   ): Observable<Response<T>> {
//     return next.handle().pipe(
//       map((data) => {
//         return this.tranform(data);
//       }),
//     );
//   }

//   tranform(data: any) {
//     const info = this.verifyToken(data.token);
//     console.log(data.items[0]);
//     for (const key in data.items[0]) {
//       this.Decoding(data.items[0][key], '4022efb0');
//     }
//     return { info: info, ...data };
//   }

//   private async verifyToken(token: string): Promise<object> {
//     try {
//       return this.jwt.verify(token, {
//         secret: process.env.SECRET,
//       });
//     } catch (ex) {
//       return null;
//     }
//   }

//   private Decoding(text: string, secret: string) {
//     console.log(text);
//     try {
//       const decipher = crypto.createDecipheriv(
//         'aes-256-ctr',
//         Buffer.from(secret.padEnd(32, '\0')),
//         Buffer.from(secret.padEnd(16, '\0')),
//       );
//       let decryptedData = decipher.update(text, 'utf-8');
//       decryptedData = decryptedData + decipher.final('utf-8');
//       //   console.log(decryptedData);
//       //   const data = Buffer.concat([
//       //     decipher.update(text, 'utf-8'),
//       //     decipher.final(),
//       //   ]).toString('hex');
//       //   console.log(data);
//       //   const cipher = crypto.createCipheriv(
//       //     'aes-256-ctr',
//       //     Buffer.from(secret.padEnd(32, '\0')),
//       //     Buffer.from(secret.padEnd(16, '\0')),
//       //   );
//       //   return Buffer.concat([
//       //     cipher.update(text, 'utf-8'),
//       //     cipher.final(),
//       //   ]).toString('hex');
//     } catch (ex) {
//       //   console.log(ex);
//       return null;
//     }
//   }
// }
