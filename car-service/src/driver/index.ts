import {DriverModel} from './model';

export class Driver {

    static async getRandom() {
        const count = await DriverModel.find().countDocuments();
        const random = Math.floor(Math.random() * count);
        return DriverModel.findOne().skip(random)
    }
}
