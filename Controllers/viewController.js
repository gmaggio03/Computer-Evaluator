const dataMapper = require('../data/datamapper');
const desktopMapper = require('../data/datamapper');
const { landing, usersDashboard } = require('../Views/pages');

async function landing(req, res) {
    const desktops = await dataMapper.getDesktops();
    const laptops = await dataMapper.getLaptops();
    res.html('landingPage', { desktops, laptops });
}

async function usersDashboard(req, res) {
    const user = await dataMapper.getUserById(req.session.userId);
    const myDesktops = await dataMapper.getDesktopsByUserId(req.session.userId);
    const myLaptops = await dataMapper.getLaptopsByUserId(req.session.userId);
    res.html('usersDashboard', { user, myDesktops, myLaptops });
}


module.exports = {
    landing,
    usersDashboard,
}