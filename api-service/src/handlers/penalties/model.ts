import * as mongoose from 'mongoose'

const penaltyTypeSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    speed: { type: Number, required: true },
    penalty: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
});

export const PenaltyModel = mongoose.model('penalties', penaltyTypeSchema);
