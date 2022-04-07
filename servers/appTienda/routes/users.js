var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', (req, res) => {
  res.send('Funsiona el POST');
});

module.exports = router;
