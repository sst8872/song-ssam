const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('coding/everyone');
});

module.exports = router;
