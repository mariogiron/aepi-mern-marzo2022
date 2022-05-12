const router = require('express').Router();

const apiClientesRouter = require('./clientes');

router.use('/clientes', apiClientesRouter);

module.exports = router;