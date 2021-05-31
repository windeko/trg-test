require('dotenv').config();

import express from 'express'

require('./db/mongoose');

import { router as carRouter } from './router/car'
import { router as driverRouter } from './router/driver'

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome, stranger');
});

app.use(express.json());

app.use('/cars', carRouter);
app.use('/drivers', driverRouter);

// ERROR HANDLING
app.use(function (err, req, res, next) {
    if (!err.status) err.status = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.status).send({ error: err.message }) // All HTTP requests must have a response, so let's send back an error with its status code and message
});

// @ts-ignore
app.listen(process.env.PORT || 3000,(err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${process.env.PORT || 3000}`);
});
