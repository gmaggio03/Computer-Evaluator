const viewController = require('../controllers/viewController');
const desktopController = require('../controllers/desktopController');
const laptopController = require('../controllers/laptopController');

const express = require('express');
const app = express();

app.get('/landing', (req, res) => {
    res.send(viewController.landing());
});

app.get('/usersDashboard', (req, res) => {
    res.send(viewController.usersDashboard());
});

app.post('/createDesktop', (req, res) => {
    res.send(desktopController.createDesktop(req, res));
});

app.post('/createLaptop', (req, res) => {
    res.send(laptopController.createLaptop(req, res));
});

app.post('/deleteDesktop', (req, res) => {
    res.send(desktopController.deleteDesktop(req, res));
});

app.post('/deleteLaptop', (req, res) => {
    res.send(laptopController.deleteLaptop(req, res));
});

app.post('/subDesktop', (req, res) => {
    res.send(desktopController.subscribeDesktop(req, res));
});

app.post('/subLaptop', (req, res) => {
    res.send(laptopController.subscribeLaptop(req, res));
});

module.exports = app;
