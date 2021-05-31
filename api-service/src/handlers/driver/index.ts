import {ILoginFields, IRegistrationFields} from "./interfaces";
import {comparePassword, ErrorStatus, generateJWTToken, hashPassword} from "../../helpers";
import {DriverModel} from './model'

const forbiddenFields = ['password', 'tokens', '__v'];

export class Driver {

    public static async login(fields: ILoginFields): Promise<{}> {
        // @ts-ignore
        let driver = await Driver.findByCredentials(fields.login, fields.password);
        if (!driver) throw new ErrorStatus(401, 'Wrong login/password');

        /*
        * Looks bad, I see. If I have more time, I would make it better
        * */
        const token = await Driver.generateAuthToken(driver);
        driver = Driver.clearDriverFields(driver);
        return {driver, token}
    }

    public static async add(fields: IRegistrationFields) {
        const errors = await Driver.checkRegistrationFields(fields);
        if (errors.length) {
            throw new ErrorStatus(500, `Wrong params: ${errors.join(', ')}`)
        }
        fields.password = await hashPassword(fields.password);

        const newDriver = new DriverModel(fields);
        return await newDriver.save()
    }

    public static aboutMe(driver) {
        return this.clearDriverFields(driver)
    }

    public static async logout(driver, authToken) {
        driver.tokens = driver.tokens.filter((token) => {
            return token.token !== authToken
        });
        await driver.save()
    }

    public static async logoutAll(driver) {
        driver.tokens.splice(0, driver.tokens.length);
        await driver.save()
    }

    private static clearDriverFields(driver) {
        let clearDriver = JSON.parse(JSON.stringify(driver));
        forbiddenFields.forEach(field => {
            clearDriver[field] = undefined
        });

        return clearDriver
    }
    private static async checkRegistrationFields(fields: IRegistrationFields): Promise<string[]> {
        const errors = [];

        if (!fields.login) errors.push('login');
        if (!fields.password) errors.push('password');
        if (!fields.name) errors.push('name');
        if (!fields.surname) errors.push('surname');
        if (!fields.country) errors.push('country');

        if (!errors.length) {
            const isExist = await DriverModel.findOne({ login: fields.login });
            if (isExist) errors.push('user with this login already exist')
        }

        return errors
    }
    private static async findByCredentials(login: string, password: string) {
        const driver = await DriverModel.findOne({ login });
        if (!driver) {
            return false
        }
        // @ts-ignore
        const isPasswordMatch = await comparePassword(password, driver.password);
        if (!isPasswordMatch) {
            return false
        }

        return driver
    }
    private static async generateAuthToken(driver) {
        const token = generateJWTToken(driver);
        // @ts-ignore
        driver.tokens = driver.tokens.concat({ token });
        // @ts-ignore
        driver.lastLogin = new Date();
        await driver.save();
        return token
    }
}
