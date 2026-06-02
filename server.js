// this is the server for the application. Any interactions with the client start here.
const app = require('../public/css/routes');

const path = require('path');
const port = 3000;
const { viewController } = require('./controllers/viewController');

app.listen(port, () => {
    console.log('Server is running on port', port);
})

