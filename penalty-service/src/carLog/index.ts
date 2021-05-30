import {ICar} from "./interfaces";

export class CarLog {

    constructor(private readonly log: ICar) {
    }

    getPenaltyPoints() {
        if (this.log.speed > parseInt(process.env.HUGEPENALTYSPEED))
            return (this.log.speed - parseInt(process.env.HUGEPENALTYSPEED)) * parseInt(process.env.HUGEPENALTYPOINTS);

        if (this.log.speed > parseInt(process.env.MEDIUMPENALTYSPEED))
            return (this.log.speed - parseInt(process.env.MEDIUMPENALTYSPEED)) * parseInt(process.env.MEDIUMPENALTYPOINTS);

        if (this.log.speed > parseInt(process.env.LOWPENALTYSPEED))
            return (this.log.speed - parseInt(process.env.LOWPENALTYSPEED)) * parseInt(process.env.LOWPENALTYPOINTS);

        return 0;
    }
}

