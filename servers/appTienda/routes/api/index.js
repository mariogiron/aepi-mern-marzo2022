const router = require('express').Router();

const apiProductsRouter = require('./products');

router.use('/products', apiProductsRouter);

module.exports = router;