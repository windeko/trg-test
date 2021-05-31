import * as mongoose from 'mongoose'

const carTypeSchema = new mongoose.Schema({
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    rank: { type: Number, default: 1 },
    kidsSeat: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
});

export const CarModel = mongoose.model('cars', carTypeSchema);
