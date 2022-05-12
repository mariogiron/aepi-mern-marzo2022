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

router.put('/:articleId', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.articleId, req.body, { new: true });
    res.json(article);
});

module.exports = router;