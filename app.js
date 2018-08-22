const express = require('express');
const app = express();
const path = require('path');
const grammarRoutes = require('./routes/grammar-routets');
const codingRoutes = require('./routes/coding-routes');
const wordsRoutes = require('./routes/words-routs');
const contactRoutes = require('./routes/contact-routes');
const port = process.env.PORT || 3000;

// set up view engine
app.set('view engine', 'pug');


// pug prettify
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

// set up assets
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
});
app.use('/grammar', grammarRoutes);
app.use('/coding', codingRoutes);
app.use('/words', wordsRoutes);
app.use('/contact', contactRoutes);

// home route
app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});


app.listen(port, () => {
    console.log(`Server running at ${port}`);
});