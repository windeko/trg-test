require('dotenv').config();
require('./db/mongoose');
import {MQHandler} from './mqhandler';
import {Car} from "./car";


async function sendCarLog() {
    const mq = await MQHandler.factory(process.env.MESSAGE_QUEUE);

    const car = (await Car.factory()).getCar();
    console.log(car);
    await mq.sendMessage('carLog', JSON.stringify(car));

    return car
}

setInterval(async () => {
    await sendCarLog();
}, 1000);
