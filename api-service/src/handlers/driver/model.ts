import * as mongoose from 'mongoose'

const driverTypeSchema = new mongoose.Schema({
    driverId: { type: Number, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    country: { type: String, required: true },
    rank: { type: Number, default: 1 },
    isActive: { type: Boolean, default: true },
});

export const DriverModel = mongoose.model('drivers', driverTypeSchema);
