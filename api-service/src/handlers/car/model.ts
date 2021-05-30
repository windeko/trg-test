import * as mongoose from 'mongoose'

const carTypeSchema = new mongoose.Schema({
    carId: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    rank: { type: Number, default: 1 },
    kidsSeat: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
});

export const CarModel = mongoose.model('cars', carTypeSchema);
