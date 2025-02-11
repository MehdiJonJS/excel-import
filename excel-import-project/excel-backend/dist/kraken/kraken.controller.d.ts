import { KrakenService } from './kraken.service';
import { Kraken } from './kraken.schema';
export declare class KrakenController {
    private readonly krakenService;
    constructor(krakenService: KrakenService);
    create(data: Kraken[]): Promise<{
        message: string;
    }>;
}
