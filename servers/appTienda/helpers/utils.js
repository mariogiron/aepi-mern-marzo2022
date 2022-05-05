const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user._id,
        exp_at: dayjs().add(5, 'minutes').unix()
    }
    return jwt.sign(obj, 'en un lugar de la mancha');
}

module.exports = {
    createToken
}