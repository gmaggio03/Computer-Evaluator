const datamapper = require('../data/datamapper');
const { createLaptop, deleteLaptop, subLaptop } = require('../Views/pages');

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

async function subscribeLaptop(req, res) {
    const laptopId = req.body.laptopId;
    await datamapper.subLaptopById(laptopId);
    res.redirect('/usersDashboard');
}

async function updateLaptop(req, res) {
    const laptopId = req.body.laptopId;
    const make = req.body.Make;
    const modelName = req.body.modelName;
    const modelNumber = req.body.modelNumber;
    const cpu = req.body.cpu;
    const gpu = req.body.gpu;
    const ram = req.body.ram;
    const storage = req.body.storage;
    await datamapper.updateLaptop(laptopId, make, modelName, modelNumber, cpu, gpu, ram, storage);
    res.redirect('/usersDashboard');
}

async function deleteLaptop(req, res) {
    const laptopId = req.body.laptopId;
    await datamapper.deleteLaptopById(laptopId);
    res.redirect('/usersDashboard');
}

module.exports = {
    createLaptop,
    subscribeLaptop,
    updateLaptop,
    deleteLaptop,
}