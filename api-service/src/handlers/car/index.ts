import {CarModel} from "./model";
import {ObjectId} from "mongoose";
import {ICar} from "./interfaces";
import {ErrorStatus} from "../../helpers";

export class Car {

    static async getCars(page: number, limit: number) {
        const skip = limit * (page - 1);
        const fullCount = await CarModel.find({ isDeleted: false, isActive: true }).countDocuments();
        const cars = await CarModel.find({ isDeleted: false, isActive: true }).limit(limit).skip(skip);

        return {
            items: cars,
            count: fullCount,
            limit,
            pages: Math.ceil(fullCount / limit)
        }
    }

    static async getCar(id: ObjectId) {
        return CarModel.findOne({ _id: id, isDeleted: false, isActive: true });
    }

    static async create(fields: ICar) {
        const errors = this.checkCreateFields(fields);
        if (errors.length) {
            throw new ErrorStatus(500, `Wrong params: ${errors.join(', ')}`)
        }

        const car = new CarModel(fields);
        return await car.save()
    }

    static async update(id: ObjectId, fields: ICar) {
        let car = await CarModel.findById(id);
        const result = await car.update(fields);
        if (!result.ok) throw new ErrorStatus(500, 'Car update error');

        return CarModel.findById(id);
    }

    static async delete(id: ObjectId) {
        const car = await CarModel.findById(id);
        // @ts-ignore
        car.isDeleted = true;
        return car.save()
    }

    private static checkCreateFields(fields: ICar): string[] {
        const errors = [];

        if (!fields.manufacturer) errors.push('manufacturer');
        if (!fields.model) errors.push('model');
        if (!fields.color) errors.push('color');

        return errors
    }
}
