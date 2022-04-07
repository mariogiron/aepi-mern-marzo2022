const router = require('express').Router();

router.get('/edit', (req, res) => {
    res.send('Edit de productos');
});

module.exports = router;

// Create Read Update     Delete
// POST   GET  PUT/PATCH  DELETE