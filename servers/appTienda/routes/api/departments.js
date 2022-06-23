const router = require('express').Router();

const Department = require('../../models/department.model');

router.get('/', (req, res) => {
    Department.find()
        .populate('products')
        .exec()
        .then(departments => res.json(departments))
        .catch(error => res.json({ error: error.message }));
});

router.post('/', (req, res) => {
    Department.create(req.body)
        .then(newDepartment => res.json(newDepartment))
        .catch(error => res.json({ error: error.message }));
});

router.post('/add-product', async (req, res) => {
    const { product_id, department_id } = req.body;

    const department = await Department.findById(department_id);

    department.products.push(product_id);

    await department.save();

    res.json(department);
})

module.exports = router;