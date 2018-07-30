const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('authentification/profile/profile', {username: req.user.username});
});

module.exports = router;