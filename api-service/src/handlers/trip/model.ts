import * as mongoose from 'mongoose'

const tripTypeSchema = new mongoose.Schema({
    driverId: { type: Number, required: true },
    carId: { type: Number, required: true },
    startLongitude: { type: Number, required: true },
    startLatitude: { type: Number, required: true },
    endLongitude: { type: Number, required: true },
    endLatitude: { type: Number, required: true },
    isFinished: { type: Boolean, default: false },
    sum: { type: Number },
});

export const TripModel = mongoose.model('trips', tripTypeSchema);
