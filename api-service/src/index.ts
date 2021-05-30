require('dotenv').config();

import express from 'express'

require('./db/mongoose');

import { router as carRouter } from './router/car'

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome, stranger');
});

app.use(express.json());

app.use('/cars', carRouter);

// @ts-ignore
app.listen(process.env.PORT || 3000,(err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${process.env.PORT || 3000}`);
});
