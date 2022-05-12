const router = require('express').Router();

const apiProductsRouter = require('./products');
const apiUsersRouter = require('./users');
const apiArticlesRouter = require('./articles');

const { checkToken, checkAdmin, checkRole } = require('../../helpers/middlewares');

router.use('/products', checkToken, checkRole('regular'), apiProductsRouter);
router.use('/users', apiUsersRouter);
router.use('/articles', apiArticlesRouter);

// router.use('/users', require('./users'));

module.exports = router;
