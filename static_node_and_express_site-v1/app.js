const express = require('express');
const data = require('./data.json');
const app = express(); 

//setting pug as a template engine for your app
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/about', (req, res) => {
    res.render('about.html');
})

app.listen(3000);