import {Car} from "../../handlers/car";
import {ErrorStatus} from "../../helpers";

export async function getCars(req, res, next) {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 20;

        const cars = await Car.getCars(page, limit);

        res.status(200).send(cars)
    } catch (e) {
        next(e)
    }
}
export async function getCar(req, res, next) {
    try {
        const car = await Car.getCar(req.params.id);
        if (!car) throw new ErrorStatus(404, 'Car not found');

        res.status(200).send(car)
    } catch (e) {
        next(e)
    }
}
export async function createCar(req, res, next) {
    try {
        const car = await Car.create(req.body);
        res.status(201).send(car)
    } catch (e) {
        next(e)
    }
}
export async function updateCar(req, res, next) {
    try {
        const car = await Car.update(req.params.id, req.body);
        res.status(200).send(car)
    } catch (e) {
        next(e)
    }
}
export async function deleteCar(req, res, next) {
    try {
        await Car.delete(req.params.id);
        res.status(200).send('OK')
    } catch (e) {
        next(e)
    }
}
