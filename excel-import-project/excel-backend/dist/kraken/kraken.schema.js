"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KrakenSchema = void 0;
const mongoose_1 = require("mongoose");
exports.KrakenSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    updated_at: { type: Date, required: true },
    prices: { type: [Number], required: true },
    rate: { type: Number, required: true },
    category: { type: String, enum: ['product', 'equipment'], required: true },
});
//# sourceMappingURL=kraken.schema.js.map