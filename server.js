// this is the server for the application. Any interactions with the client start here.

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { viewController } = require('./controllers/viewController');

// this line allows the server to access files in the public directory.
app.use('static', express.static(path.join(__dirname, 'public')));


// most basic route possible.
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/landing', (req, res) => {
    res.send(viewController.landing());
})

app.get('/usersDashboard', (req, res) => {
    res.send(viewController.usersDashboard());
})

// this tells the server to listen for requests made to the server on the specified port.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})