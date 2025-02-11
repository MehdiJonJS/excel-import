import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KrakenController } from './kraken.controller';
import { KrakenService } from './kraken.service';
import { KrakenSchema } from './kraken.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Kraken', schema: KrakenSchema }]),
  ],
  controllers: [KrakenController],
  providers: [KrakenService],
})
export class KrakenModule {}
