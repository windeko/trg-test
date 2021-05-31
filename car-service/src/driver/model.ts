import * as mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    country: { type: String, required: true },
    rank: { type: Number, default: 1 },
    isActive: { type: Boolean, default: true },
    lastLogin: Date,
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});

export const DriverModel = mongoose.model('drivers', driverSchema);
