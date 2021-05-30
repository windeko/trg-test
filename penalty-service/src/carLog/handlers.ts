import {ICar} from "./interfaces";
import {CarLog} from "./index";
import { PenaltyModel } from "../penalty/model";

export async function carLogParse(log: ICar) {
    const carLog = new CarLog(log);
    const penaltyPoints = carLog.getPenaltyPoints();

    /*
    * If we expect high load then we can combine, let's say, 100 or 1000 penalties and
    * make one transaction for a bunch to reduce DB struggling
    * Also, we could use mongo car._id and driver._id but as soon as we have just test task and time is so limited
    * I decided to go the easiest, fastest way. In this case I also decided to use Mongoose ODM, but in production
    * I wouldn't decide to use ODM/ORMs and Mongo (because it's weak with relationships)
    * */
    if (penaltyPoints) {
        console.log(`User: ${log.userID}, Speed: ${log.speed}, Penalty: ${penaltyPoints}`);
        const penalty = new PenaltyModel({
            carId: log.carID,
            driverId: log.userID,
            latitude: log.latitude,
            longitude: log.longitude,
            speed: log.speed,
            penalty: penaltyPoints,
        });
        await penalty.save();
    }
}
