const router = require('express').Router();

router.get('/everyone', (req, res) => {
    res.render('coding/everyone');
});


module.exports = router;