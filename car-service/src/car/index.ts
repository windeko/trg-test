import {ICar} from "./interfaces";
import {random} from "../helpers";

export class Car {
    private readonly car: ICar;

    constructor() {
        this.car = {
            carID: random(1, parseInt(process.env.MAXCARID)),
            latitude: random(-90, 90),
            longitude: random(-90, 90),
            speed: random(parseInt(process.env.MINSPEED), parseInt(process.env.MAXSPEED)),
            userID: random(1, parseInt(process.env.MAXUSERID)),
        }
    }

    getCar() {
        return this.car
    }
}
