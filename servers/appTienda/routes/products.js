const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.query);
    // { page: '10', limit: '20' }

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    console.log(page, limit);

    res.send('Recupero los productos paginados');
});

router.get('/edit', (req, res) => {
    res.send('Edit de productos');
});

router.get('/:productId', (req, res) => {
    // { productId: '123' }
    console.log(req.params.productId);
    res.send('Devuelvo el detalle del producto');
});

module.exports = router;

// Create Read Update     Delete
// POST   GET  PUT/PATCH  DELETE

// /writer/:writerId/book/:bookId
// /writer/342/book/278

// /aviones/:from-:to
// /aviones/Madrid-Berlin

// /ficheros/:nombre.:extension
// /ficheros/documento.csv
// /ficheros/documento.pdf
// /ficheros/curriculum.md