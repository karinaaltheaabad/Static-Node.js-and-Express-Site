const express = require('express');
const data = require('../data.json');
const { projects } = data;

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { projects: projects });
})

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/project/:id', (req, res, next) => {
    if (projects[req.params.id]) {
        res.render('project', { project: projects[req.params.id] })
    } else {
        const err = new Error();
        err.status = 404; 
        err.message = `Oops! This page does not exist!`;
        console.log('Oops, this page does not exist! (404)');
        next(err);
    }
})

module.exports = router;