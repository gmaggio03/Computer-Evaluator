const datamapper = require('../data/datamapper');
const { landing, usersDashboard } = require('../Views/pages');

async function createUser(req, res) {
    const username = req.body.userName;
    const password = req.body.passWord;
    await datamapper.createUser(username, password);
    res.redirect('/usersDashboard');
}

async function deleteUser(req, res) {
    const userId = req.body._id;
    await datamapper.DeleteUser();
    res.redirect('/usersDashboard');
}

async function updateUser(req, res) {
    const userId = req.body._id;
    const username = req.body.userName;
    const password = req.body.passWord;
    await datamapper.updateUser(userId, username, password);
    res.redirect('/usersDashboard');
}