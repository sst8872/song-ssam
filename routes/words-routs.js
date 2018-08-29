const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('words/power');
});

module.exports = router;
