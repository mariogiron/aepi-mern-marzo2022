const router = require('express').Router();

const arrProductos = [
    { name: 'Microondas', price: 300, category: 'kitchen', stock: 100 },
    { name: 'Frigorífico', price: 500, category: 'kitchen', stock: 12 },
    { name: 'Thermomix', price: 1000, category: 'kitchen', stock: 56 },
    { name: 'Lavadora', price: 250, category: 'kitchen', stock: 3 },
]

// GET http://localhost:3000/api/products
router.get('/', (req, res) => {
    res.json(arrProductos);
});

// GET http://localhost:3000/api/products/price/PRECIO
router.get('/price/:amount', (req, res) => {
    const amountNum = parseInt(req.params.amount);
    const productsFiltered = arrProductos.filter((producto) => {
        return producto.price > amountNum;
    });
    res.json(productsFiltered);
});

// GET http://localhost:3000/api/products/price/PRECIO
// router.get('/price/:amount', (req, res) => {
//     res.json(arrProductos.filter(producto => producto.price > parseInt(req.params.amount)));
// });

// POST http://localhost:3000/api/products
router.post('/', (req, res) => {
    res.json({ result: 'Creamos un producto nuevo' });
});

// PUT http://localhost:3000/api/products/IDPRODUCT
router.put('/:productId', (req, res) => {
    res.json({ result: 'Editamos un producto' });
});

// DELETE http://localhost:3000/api/products/IDPRODUCT
router.delete('/:productId', (req, res) => {
    res.json({ result: 'Borramos un producto' });
});

module.exports = router;