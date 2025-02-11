import { Schema, Document } from 'mongoose';

export const KrakenSchema = new Schema({
  name: { type: String, required: true, unique: true },
  updated_at: { type: Date, required: true },
  prices: { type: [Number], required: true },
  rate: { type: Number, required: true },
  category: { type: String, enum: ['product', 'equipment'], required: true },
});

export interface Kraken extends Document {
  name: string;
  updated_at: Date;
  prices: number[];
  rate: number;
  category: 'product' | 'equipment';
}
