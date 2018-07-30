const router = require('express').Router();

// grammar-router
router.get('/study', (req, res) => {
    res.render('grammar/study');
});



module.exports = router;