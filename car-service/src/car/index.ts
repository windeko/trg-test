import {ICar} from "./interfaces";
import {random} from "../helpers";
import {DriverModel} from "../driver/model";
import {Driver} from "../driver";
import {CarModel} from "./model";

export class Car {
    private readonly car: ICar;

    private constructor(car: ICar) {
        this.car = car
    }

    public static async factory(): Promise<Car> {
        const car: ICar = {
            carID: (await Car.getRandom())._id,
            latitude: random(-90, 90),
            longitude: random(-90, 90),
            speed: random(parseInt(process.env.MINSPEED), parseInt(process.env.MAXSPEED)),
            userID: (await Driver.getRandom())._id
        };

        return new Car(car)
    }

    static async getRandom() {
        const count = await CarModel.find({}).countDocuments();
        const random = Math.floor(Math.random() * count);
        return CarModel.findOne().skip(random)
    }

    getCar() {
        return this.car
    }
}
