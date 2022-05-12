const router = require('express').Router();

const { getAll } = require('../../models/cliente.model');

router.get('/', (req, res) => {
    getAll()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

module.exports = router;