const express = require('express');
const app = express(); 
const routes = require('./routes');

app.use(routes);

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use((req, res, next) => {
    const err = new Error('Oops, something went wrong!');
    err.status = 500; 
    next(err); 
})

app.use((err, req, res, next) => {
    res.locals.error = err; 
    res.status(err.status);
    res.render('error');
    console.log('Oops, something went wrong!')
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});