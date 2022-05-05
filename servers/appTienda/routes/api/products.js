const router = require('express').Router();
const Product = require('../../models/product.model');

// GET http://localhost:3000/api/products
router.get('/', (req, res) => {

    console.log(req.user);

    Product.find()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
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
router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT http://localhost:3000/api/products/IDPRODUCT
router.put('/:productId', (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, req.body, { new: true })
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        });
});

// DELETE http://localhost:3000/api/products/IDPRODUCT
router.delete('/:productId', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;