import {Error} from "mongoose";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export class ErrorStatus extends Error {
    constructor(private status: number, message: string) {
        super(message);
    }
}

export function createError(status: number, message: string): ErrorStatus {
    return new ErrorStatus(status, message)
}

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 8)
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
}

export function generateJWTToken(driver) {
    return jwt.sign({ _id: driver._id, name: driver.name, lastName: driver.lastName, rank: driver.rank }, process.env.JWT_KEY);
}
