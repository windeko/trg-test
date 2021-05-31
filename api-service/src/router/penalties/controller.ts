import {Car} from "../../handlers/car";
import {Penalties} from "../../handlers/penalties";

export async function penaltiesGetAll(req, res, next) {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 20;

        const penalties = await Penalties.getAll(req.driver._id, page, limit);

        res.status(200).send(penalties)
    } catch (e) {
        next(e)
    }
}
export async function penaltiesGetOne(req, res, next) {
    try {
        const penalty = await Penalties.getOne(req.params.id, req.driver._id)

        res.status(200).send(penalty)
    } catch (e) {
        next(e)
    }
}
