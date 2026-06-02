const datamapper = require('../data/datamapper');
const { createDesktop, deleteDesktop, subDesktop } = require('../Views/pages');

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

async function subscribeDesktop(req, res) {
    const desktopId = req.body.desktopId;
    await datamapper.subDesktopById(desktopId);
    res.redirect('/usersDashboard');
}

async function updateDesktop(req, res) { 
    const desktopId = req.body.desktopId;
    const make = req.body.Make;
    const modelName = req.body.modelName;
    const modelNumber = req.body.modelNumber;
    const cpu = req.body.cpu;
    const gpu = req.body.gpu;
    const ram = req.body.ram;
    const storage = req.body.storage;
    await datamapper.updateDesktopById(desktopId, make, modelName, modelNumber, cpu, gpu, ram, storage);
    res.redirect('/usersDashboard');
}

async function deleteDesktop(req, res) {
    const desktopId = req.body.desktopId;
    await datamapper.deleteDesktopById(desktopId);
    res.redirect('/usersDashboard');
}

module.exports = {
    createDesktop,
    subscribeDesktop,
    updateDesktop,
    deleteDesktop,
}