import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KrakenModule } from './kraken/kraken.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mongodbUri = configService.get<string>('MONGODB_URI');
        if (!mongodbUri) {
          throw new Error('MONGODB_URI environment variable is not set');
        }
        return { uri: mongodbUri };
      },
      inject: [ConfigService],
    }),
    KrakenModule,
  ],
})
export class AppModule {}
