const router = require('express').Router();

router.get('/power', (req, res) => {
    res.render('words/power');
});

module.exports = router;