import { Schema, Document } from 'mongoose';
export declare const KrakenSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name: string;
    updated_at: NativeDate;
    prices: number[];
    rate: number;
    category: "product" | "equipment";
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    updated_at: NativeDate;
    prices: number[];
    rate: number;
    category: "product" | "equipment";
}>> & import("mongoose").FlatRecord<{
    name: string;
    updated_at: NativeDate;
    prices: number[];
    rate: number;
    category: "product" | "equipment";
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Kraken extends Document {
    name: string;
    updated_at: Date;
    prices: number[];
    rate: number;
    category: 'product' | 'equipment';
}
