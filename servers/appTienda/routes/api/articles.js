const router = require('express').Router();

const Article = require('../../models/article.model');

router.get('/', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

router.post('/', async (req, res) => {
    const article = await Article.create(req.body);
    res.json(article);
});

module.exports = router;