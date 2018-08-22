const router = require('express').Router();

// grammar-router
router.get('/', (req, res) => {
    res.render('grammar/study');
});

// quiz router
router.get('/quiz', (req,res) => {
    res.render('grammar/quiz');
});


module.exports = router;