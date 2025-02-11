import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Kraken } from './kraken.schema';

@Injectable()
export class KrakenService {
  constructor(
    @InjectModel('Kraken') private readonly krakenModel: Model<Kraken>,
  ) {}

  async create(data: Kraken[]) {
    console.log('Data received:', data);
    for (const item of data) {
      await this.krakenModel.findOneAndUpdate({ name: item.name }, item, { upsert: true });
    }
    return { message: 'Data inserted successfully' };
  }
}
