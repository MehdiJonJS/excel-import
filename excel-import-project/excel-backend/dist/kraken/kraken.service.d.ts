import { Model } from 'mongoose';
import { Kraken } from './kraken.schema';
export declare class KrakenService {
    private readonly krakenModel;
    constructor(krakenModel: Model<Kraken>);
    create(data: Kraken[]): Promise<{
        message: string;
    }>;
}
