import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerInformationController } from './Controllers/CustomerInformation.controller';
import { CustomerInformationService } from './Services/CustomerInformation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import entities from './Models';
import { CustomerInformationRepository } from './Repositories/CustomerInformation.repository';
import { FeedbacksRepository } from './Repositories/FeedBacks.repository';
import { TransformerMiddleware } from './Middlewares/transformer.middleware';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './Guards/auth.guards';
import { UsersService } from './Services/Users.service';
import { UsersRepository } from './Repositories/Users.repository';
import { RolesGuard } from './Guards/roles.guards';
import { RolesRepository } from './Repositories/Roles.repository';
import { PurchaseInformationController } from './Controllers/PurchaseInformation.controller';
import { PurchaseInformationService } from './Services/PurchaseInformation.service';
import { PurchaseInformationRepository } from './Repositories/PurchaseInformation.repository';

@Module({
  imports: [
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
  ],
  controllers: [CustomerInformationController, PurchaseInformationController],
  providers: [
    JwtService,
    FeedbacksRepository,
    UsersRepository,
    RolesRepository,
    CustomerInformationRepository,
    PurchaseInformationRepository,
    CustomerInformationService,
    PurchaseInformationService,
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
