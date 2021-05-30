import {Car} from "./car";

require('dotenv').config();

import {MQHandler} from './mqhandler';

async function sendCarLog() {
    const mq = await MQHandler.factory(process.env.MESSAGE_QUEUE);

    const car = new Car().getCar();
    console.log(car);
    await mq.sendMessage('carLog', JSON.stringify(car));

    return car
}

setInterval(async () => {
    await sendCarLog();
}, 1000);
