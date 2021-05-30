const jwt = require('jsonwebtoken');
const User = require('../src/users/usersModel');

const maybeAuthorized = async (req, res, next) => {
    if (req.header('Authorization')) {
        const token = req.header('Authorization').replace('JWT ', '');
        const data = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ _id: data._id, 'tokens.token': token }, '-password -weight -lastLogin').populate('company', 'name description email phone uraddress inn kpp ogrn bik bank coracc useracc -_id');
        if (!user) {
            next()
        }
        req.user = user;
        req.token = token;
        next()
    } else {
        next()
    }
};

const isAuthorized = async (req, res, next) => {
    if (req.header('Authorization')) {
        const token = req.header('Authorization').replace('JWT ', '');
        const data = jwt.verify(token, process.env.JWT_KEY);
        try {
            const user = await User.findOne({ _id: data._id, 'tokens.token': token }, '-password -weight -lastLogin').populate('company', 'name description email phone uraddress inn kpp ogrn bik bank coracc useracc -_id');
            if (!user) {
                throw new Error()
            }
            req.user = user;
            req.token = token;
            next()
        } catch (error) {
            res.status(401).send({ error: 'Not authorized to access this resource' })
        }
    } else {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
};

const isAdmin = async (req, res, next) => {
    if (req.header('Authorization')) {
        const token = req.header('Authorization').replace('JWT ', '');
        const data = jwt.verify(token, process.env.JWT_KEY);
        try {
            const user = await User.findOne({ _id: data._id, 'tokens.token': token }, '-password').populate('company');
            if (!user) {
                throw new Error()
            }
            const roles = user.roles;
            const isAdmin = roles.find((role) => { return role === 'admin' });
            if (isAdmin) {
                req.user = user;
                req.token = token;
                next()
            } else {
                res.status(403).send({ error: 'You need to be Admin for this function' })
            }
        } catch (error) {
            res.status(401).send({ error: 'Not authorized to access this resource' })
        }
    } else {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
};

const isSuperAdmin = async (req, res, next) => {
    if (req.header('Authorization')) {
        try {
            const token = req.header('Authorization').replace('JWT ', '');
            const data = jwt.verify(token, process.env.JWT_KEY);
            const user = await User.findOne({ _id: data._id, 'tokens.token': token }, '-password').populate('company');
            if (!user) {
                throw new Error()
            }
            const roles = user.roles;
            const isAdmin = roles.find((role) => { return role === 'admin' });
            const isAdminLeast = user.company.name === process.env.COMPANY;
            if (isAdmin && isAdminLeast) {
                req.user = user;
                req.token = token;
                next()
            } else {
                res.status(403).send({ error: `You need to be ${process.env.COMPANY} Admin for this function` })
            }
        } catch (error) {
            res.status(401).send({ error: error.message })
        }
    } else {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
};

module.exports = { maybeAuthorized, isAuthorized, isAdmin, isSuperAdmin };
