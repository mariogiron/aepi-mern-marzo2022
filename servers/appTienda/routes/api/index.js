const router = require('express').Router();

const apiProductsRouter = require('./products');
const apiUsersRouter = require('./users');

router.use('/products', apiProductsRouter);
router.use('/users', apiUsersRouter);

// router.use('/users', require('./users'));

module.exports = router;