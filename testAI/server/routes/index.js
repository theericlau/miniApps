const router = require('express').Router();
const coins = require('../controllers/coins');

router.get('/', (req, res) => {
  res.send(200);
});

router.get('/coins', coins.get);

module.exports = router;
