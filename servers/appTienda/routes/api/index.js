const router = require('express').Router();

const apiProductsRouter = require('./products');
const apiUsersRouter = require('./users');

const { checkToken } = require('../../helpers/middlewares');

router.use('/products', checkToken, apiProductsRouter);
router.use('/users', apiUsersRouter);

// router.use('/users', require('./users'));

module.exports = router;