import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { CustomerInformationModule } from './customer-information/customer-information.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { PurchaseInformationModule } from './purchase-information/purchase-information.module';
import { MangamentModule } from './mangament/mangament.module';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/Repositories/Users.repository';
import { RolesRepository } from 'src/Repositories/Roles.repository';
import { UsersService } from 'src/Services/Users.service';
import entities from 'src/Models';
import { AuthGuard } from 'src/Guards/auth.guards';
import { RolesGuard } from 'src/Guards/roles.guards';
import { TransformerMiddleware } from 'src/Middlewares/transformer.middleware';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: 'mongodb+srv://manhhung:ManhHung311@atlascluster.rmf14gu.mongodb.net/?retryWrites=true&w=majority',
        dbName: 'test',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature(entities),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CustomerInformationModule,
    FeedbacksModule,
    PurchaseInformationModule,
    MangamentModule,
  ],
  providers: [
    JwtService,
    UsersRepository,
    RolesRepository,
    ConfigService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TransformerMiddleware)
      .forRoutes(
        { path: '*', method: 1 },
        { path: '*', method: 2 },
        { path: '*', method: 0 },
        { path: '*', method: 4 },
      );
  }
}
