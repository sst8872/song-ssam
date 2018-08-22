const router = require('express').Router();

// grammar-router
router.get('/study', (req, res) => {
    res.render('grammar/study');
});

// quiz router
router.get('/quiz', (req,res) => {
    res.render('grammar/quiz');
});

module.exports = router;