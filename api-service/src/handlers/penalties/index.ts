import {ObjectId} from "mongoose";
import {PenaltyModel} from "./model";
import {ErrorStatus} from "../../helpers";

export class Penalties {

    static async getAll(driverId: ObjectId, page: number, limit: number) {
        const skip = limit * (page - 1);
        const fullCount = await PenaltyModel.find({ driverId }).countDocuments();
        const cars = await PenaltyModel.find({ driverId }).limit(limit).skip(skip);

        return {
            items: cars,
            count: fullCount,
            limit,
            pages: Math.ceil(fullCount / limit)
        }
    }

    static async getOne(_id: ObjectId, driverId: ObjectId) {
        const penalty = await PenaltyModel.findOne({ _id, driverId });
        if (!penalty) throw new ErrorStatus(404, 'Penalty not found');

        return penalty
    }
}
