const jwt = require('jsonwebtoken')
const {unAuthenticatedError} = require('../errors/index')

const Authentication = (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization || !authorization.startsWith('Bearer ')){
        throw new unAuthenticatedError('Authentication Invalid')
    }
    const token = authorization.split(' ')[1];

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user= {userId: payload.userId};
            next();
        } catch (error) {
            throw new unAuthenticatedError('Authentication invalid')
        }
};

module.exports = Authentication;