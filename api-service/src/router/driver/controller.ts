import {Driver} from "../../handlers/driver";

export function driverGet(req, res, next) {
    try {
        const driver = Driver.aboutMe(req.driver);
        res.status(200).send(driver)
    } catch (e) {
        next(e)
    }
}
export async function driverCreate(req, res, next) {
    try {
        await Driver.add(req.body);
        res.status(201).send('OK');
    } catch (e) {
        next(e)
    }
}
export async function driverLogin(req, res, next) {
    try {
        const loginResult = await Driver.login(req.body);
        res.status(200).send(loginResult)
    } catch (e) {
        next(e)
    }
}
export async function driverLogout(req, res, next) {
    try {
        await Driver.logout(req.driver, req.token);
        res.status(200).send('OK')
    } catch (e) {
        next(e)
    }
}
export async function driverLogoutAll(req, res, next) {
    try {
        await Driver.logoutAll(req.driver);
        res.status(200).send('OK')
    } catch (e) {
        next(e)
    }
}
