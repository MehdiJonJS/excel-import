import { Controller, Post, Body } from '@nestjs/common';
import { KrakenService } from './kraken.service';
import { Kraken } from './kraken.schema';

@Controller('kraken')
export class KrakenController {
  constructor(private readonly krakenService: KrakenService) {}

  @Post()
  async create(@Body() data: Kraken[]) {
    return this.krakenService.create(data);
  }
}
