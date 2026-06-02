// this file is the data mapper it acts as a middleman between the controller and model the mapper queries the database and passes the information to the model
// the controller calls this file and then the mapper passes the information to the model
const DataBaseSingleton = require('../config/databaseSingleton');
const { ObjectId } = require('mongodb');
const { desktopModel } = require('../Models/desktopModel');
const { laptopModel } = require('../Models/laptopModel');
const { userModel } = require('../Models/userModel');

async function getDatabase() {
    return await DataBaseSingleton.getInstance();
}

class DataMapper {
    
    async getUserById(userId) {
        const db = await getDatabase();
        const user = await db.collection('Users').find({_id: {$all: [userId]} });
        return user;
    }

    async createUser(username, password) {
        const db = await getDatabase();
        const user = (username, password);
        if (!userModel.userIsUnique(userId, username)) {
            console.log("User already exists in database");
            return;
        }
        else {
            const result = await db.collection('Users').insertOne(user);
            console.log("inserted user with Id", result.insertedId);
            console.log("user data", user);
            return
        }
    }

    async updateUser(userId, username, password) {
        const db = await getDatabase();
        await db.collection('Users').updateOne({ _id: userId }, 
            { 
                $set:{ 'Username': username, 'Password': password },
                $currentDate:{lastModified: true},
            }
        );
        return;
    }

    async deleteById(userId) {
        const db = await getDatabase();
        await db.collection('Users').deleteOne({_id: userId});
        return;
    }

    async getLaptops() {
        const db = await getDatabase();
        const laptops = await db.collection('Laptops').find().toArray({});
        return laptops;
    }

    async getLaptopByID(laptopId) {
        const db = await getDatabase();
        const laptop = await db.collection('Laptops').find({_id: {$all: [laptopId]}});
        return laptop;
    }

    async subLaptopById(laptopId) {
        const db = await getDatabase();
        if (!laptopModel.laptopIsSubscribed(laptopId, userId)) {
            console.log("Laptop is already subscribed to user");
            return;
        }
        else {
            const subbedLaptop = await db.collection('SubscribedLaptops').insertOne({_id: laptopId, userId: userId });
            console.log("laptop subscribed to user with Id", subbedLaptop.insertedId);
            return;
        }
    }

    async createLaptop(Make, modelName, modelNumber, cpu, gpu, ram, storage) {
        const db = await getDatabase();
        const newLaptop = (Make, modelName, modelNumber, cpu, gpu, ram, storage);
        if (!laptopModel.laptopIsUnique(laptopId, Make, modelName, modelNumber)) {
            console.log("Laptop already exists in database");
            return;
        }
        else {
            const result = await db.collection('Laptops').insertOne(newLaptop);
            console.log("new laptop inserted with Id", result.insertedId);
            console.log("laptop stats", newLaptop);
            return;
        }

    }

    async updateLaptopById(laptopId, Make, modelName, modelNumber, cpu, gpu, ram, storage) {
        const db = await getDatabase();
        await db.collection('Laptops').updateOne({_id: laptopId},
            {
                $set:{'Make': Make, 'ModelName': modelName, 'ModelNumber': modelNumber, 'CPU': cpu, 'GPU': gpu, 'RAM': ram, 'Storage': storage},
                $currentDate:{lastModified: true},
            }
        );
        return;
    }

    async deleteById(laptopId) {
        const db = await getDatabase();
        await db.collection('Laptops').deleteOne({_id: laptopId});
        return;
    }

    async getDesktops() {
        const db = await getDatabase();
        const desktops = await db.collection('Desktops').find().toArray({});
        return desktops;
    }

    async getDesktopById(desktopId) {
        const db = await getDatabase();
        const desktop = await db.collection('Desktops').find({_id: {$all: [desktopId]}});
        return desktop;
    }

    async createDesktop(Make, modelName, modelNumber, cpu, gpu, ram, storage) {
        const db = await getDatabase();
        const newDesktop = (Make, modelName, modelNumber, cpu, gpu, ram, storage);
        
        if (!desktopModel.desktopIsUnique(desktopId, Make, modelName, modelNumber)) {
            console.log("Desktop already exists in database");
            return;
        }
        else {
            const result = await db.collection('Desktops').insertOne(newDesktop);
            console.log("new desktop inserted with Id", result.insertedId);
            console.log("Desktop stats", newDesktop);
            return;
        }

    }

     async subDesktopById(desktopId, userId) {
        const db = await getDatabase();
        if (!desktopModel.desktopIsSubscribed(desktopId, userId)) {
            console.log("Desktop is already subscribed to user");
            return;
        }
        else {
            const subbedDesktop = await db.collection('SubscribedDesktops').insertOne({_id: desktopId, userId: userId});
            console.log("Desktop subscribed to user with Id", subbedDesktop.insertedId);
            return;
        }
        
    }

    async updateDesktopById(desktopId, Make, modelName, modelNumber, cpu, gpu, ram, storage) {
        const db = await getDatabase();
        await db.collection('Desktops').updateOne({_id: desktopId}, 
            {
                $set:{'Make': Make, 'ModelName': modelName, 'ModelNumber': modelNumber, 'CPU': cpu, 'GPU': gpu, 'RAM': ram, 'Storage': storage},
                $currentDate:{lastModified: true},
            }
        );
        return;
    }

    async deleteById(desktopId) {
        const db = await getDatabase();
        await db.collection('Desktops').deleteOne({_id: desktopId});
        return;
    }
}
module.exports = DataMapper;

