const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const User = require('../../models/user.model');
const { createToken } = require('../../helpers/utils');

// Los datos del registro vendrán dentro de req.body
router.post('/register',
    body('email')
        .exists()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email tiene un formato incorrecto'),
    body('password')
        .exists()
        .withMessage('La password es requerida')
        .isLength({ min: 4, max: 12 })
        .withMessage('La password debe tener una longitud entre 4 y 12 caracteres'),
    body('age')
        .custom((value) => {
            return value >= 18 && value <= 65;
        })
        .withMessage('La edad debe estar entre 18 y 65 años')
    , async (req, res) => {

        // Comprobar los posibles errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Hay ERRORES
            return res.json(errors.array());
        }


        req.body.password = bcrypt.hashSync(req.body.password, 10);

        const newUser = await User.create(req.body);
        res.json({
            message: 'Usuario registrado correctamente',
            user: newUser
        });
    });

router.post('/login', async (req, res) => {
    // En el body recibo email y password
    // 1 - Comprobamos si el email existe en la BD
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        // El email no está registrado
        return res.json({ error: 'Error en usuario y/o contraseña' });
    }

    const equals = bcrypt.compareSync(req.body.password, user.password);

    if (!equals) {
        // Las password no coinciden
        return res.json({ error: 'Error en usuario y/o contraseña' });
    }

    res.json({
        message: 'Login correcto',
        token: createToken(user)
    });

});

module.exports = router;