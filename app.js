const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/grammar', (req, res) => {
    res.render('grammar/grammar');
});

app.get('/words', (req, res) => {
    res.render('words/words');
});

app.get('/coding', (req, res) => {
    res.render('coding/coding');
});

app.get('/contact', (req, res) => {
    res.render('contact/contact');
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});