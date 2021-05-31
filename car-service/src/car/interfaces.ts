import {ObjectId} from "mongoose";

export interface ICar {
    carID: ObjectId,
    userID: ObjectId,
    latitude: number,
    longitude: number,
    speed: number,
}
