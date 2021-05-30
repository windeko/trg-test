require('dotenv').config();
require('./db/mongoose');
import {MQHandler} from './mqhandler';

async function readCarLogs() {
    const mq = await MQHandler.factory(process.env.MESSAGE_QUEUE);
    await mq.consumeMessage('carLog');
}

readCarLogs();
