const router = require('express').Router();

// grammar-router
router.get('/', (req, res) => {
    res.render('grammar/study');
});

// quiz router
router.get('/quiz', (req,res) => {
    res.render('grammar/quiz');
});


// grammar lectures gallery
router.get('/lectures', (req,res) => {
    res.render('grammar/lectures');
});


module.exports = router;