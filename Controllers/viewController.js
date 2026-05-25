const datamapper = require('../data/datamapper');
const { landing, usersDashboard, createDesktop, createLaptop, deleteDesktop, deleteLaptop, subDesktop, subLaptop } = require('../Views/pages');

async function landing(req, res) {
    const desktops = await datamapper.getDesktops();
    const laptops = await datamapper.getLaptops();
    res.html('landingPage', { desktops, laptops });
}

async function usersDashboard(req, res) {
    const user = await datamapper.getUserById(req.session.userId);
    const myDesktops = await datamapper.getDesktopsByUserId(req.session.userId);
    const myLaptops = await datamapper.getLaptopsByUserId(req.session.userId);
    res.html('usersDashboard', { user, myDesktops, myLaptops });
}

async function createDesktop(req, res) {
    const make = req.body.Make;
    const modelName = req.body.modelName;
    const modelNumber = req.body.modelNumber;
    const cpu = req.body.cpu;
    const gpu = req.body.gpu;
    const ram = req.body.ram;
    const storage = req.body.storage;
    await datamapper.createDesktop(make, modelName, modelNumber, cpu, gpu, ram, storage);
    res.redirect('/usersDashboard');
}

async function createLaptop(req, res) {
    const make = req.body.Make;
    const modelName = req.body.modelName;
    const modelNumber = req.body.modelNumber;
    const cpu = req.body.cpu;
    const gpu = req.body.gpu;
    const ram = req.body.ram;
    const storage = req.body.storage;
    await datamapper.createLaptop(make, modelName, modelNumber, cpu, gpu, ram, storage);
    res.redirect('/usersDashboard');
}

async function deleteDesktop(req, res) {
    const desktopId = req.body.desktopId;
    await datamapper.deleteDesktopById(desktopId);
    res.redirect('/usersDashboard');
}

async function deleteLaptop(req, res) {
    const laptopId = req.body.laptopId;
    await datamapper.deleteLaptopById(laptopId);
    res.redirect('/usersDashboard');
}

async function subDesktop(req, res) {
    const desktopId = req.body.desktopId;
    await datamapper.subDesktopById(desktopId);
    res.redirect('/usersDashboard');
}

async function subLaptop(req, res) {
    const laptopId = req.body.laptopId;
    await datamapper.subLaptopById(laptopId);
    res.redirect('/usersDashboard');
}

module.exports = {
    landing,
    usersDashboard,
    createDesktop,
    createLaptop,
    deleteDesktop,
    deleteLaptop,
    subDesktop,
    subLaptop
}