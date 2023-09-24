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
  controllers: [CustomerInformationController],
  providers: [
    JwtService,
    FeedbacksRepository,
    CustomerInformationRepository,
    CustomerInformationService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TransformerMiddleware)
      .forRoutes(
        { path: '*', method: 1 },
        { path: '*', method: 2 },
        { path: '*', method: 4 },
      );
  }
}
