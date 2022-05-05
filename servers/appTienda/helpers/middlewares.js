const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const User = require('../models/user.model');

const checkToken = async (req, res, next) => {
    // 1 - Si el token viene incluido en la cabecera
    if (!req.headers['authorization']) {
        return res.json({ error: 'Debes incluir la cabecera de Authentication' });
    }

    const token = req.headers['authorization'];

    // 2 - Si el token es correcto
    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' });
    }

    // 3 - Si el token está caducado
    if (dayjs().unix() > obj.exp_at) {
        return res.json({ error: 'El token está caducado' });
    }

    // EL TOKEN ESTÁ CORRECTO
    // Recuperar los datos del usuario activo
    const user = await User.findById(obj.user_id);
    req.user = user;

    next();
}

module.exports = {
    checkToken
}