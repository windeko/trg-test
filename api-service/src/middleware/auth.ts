import { ErrorStatus } from "../helpers";

const jwt = require('jsonwebtoken');
import { DriverModel } from '../handlers/driver/model';

export async function isAuthorized(req, res, next) {
    if (req.header('Authorization')) {
        try {
            const token = req.header('Authorization').replace('JWT ', '');
            const data = jwt.verify(token, process.env.JWT_KEY);

            const driver = await DriverModel.findOne({ _id: data._id, 'tokens.token': token }, '-password -lastLogin');
            if (!driver) {
                throw new ErrorStatus(401, 'Wrong JWT Token')
            }
            req.driver = driver;
            req.token = token;
            next()
        } catch (error) {
            res.status(401).send({ error: error.message })
        }
    } else {
        res.status(401).send({ error: 'Authorize header was not provided' })
    }
};
