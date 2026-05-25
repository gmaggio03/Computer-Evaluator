// this file is the data mapper it acts as a middleman between the controller and model the mapper queries the database and passes the information to the model
// the controller calls this file and then the mapper passes the information to the model
const DataBaseSingleton = require('../config/databaseSingleton');
const { ObjectId } = require('mongodb');

async function getDatabase() {
    return await DataBaseSingleton.getInstance();
}

class UserMapper {
    
    async getUserById(userId) {
        const db = await getDatabase();
        const user = await db.collection('Users').find({_id: {$all: [userId]} });
        return user;
    }

    async createUser(username, password) {
        const db = await getDatabase();
        const user = (username, password);
        const result = await db.collection('Users').insertOne(user);
        console.log("inserted user with Id", result.insertedId);
        console.log("user data", user);
        return
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
}
module.exports = UserMapper;

class LaptopMapper {
    async getLaptops() {
        const db = await getDatabase();

    }

    async getLaptopByID(laptopId) {
        const db = await getDatabase();
        const laptop = await db.collection('Laptops').find({_id: {$all: [laptopId]}});
        return laptop;
    }

    async subLaptopById(laptopId) {
        const db = await getDatabase();
        const subbedLaptop = await db.collection('Laptops').find({_id: {$all: [laptopId]}});
        return;
    }

    async createLaptop(Make, modelName, modelNumber, cpu, gpu, ram, storage) {
        const db = await getDatabase();
        const newLaptop = (Make, modelName, modelNumber, cpu, gpu, ram, storage);
        const result = await db.collection('Laptops').insertOne(newLaptop);
        console.log("new laptop inserted with Id", result.insertedId);
        console.log("laptop stats", newLaptop);
        return;

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
}
module.exports = LaptopMapper;

class DesktopMapper {
    async getDesktops() {
        const db = await getDatabase();

    }

    async getDesktopById(desktopId) {
        const db = await getDatabase();
        const desktop = await db.collection('Desktops').find({_id: {$all: [desktopId]}});
        return desktop;
    }

    async createDesktop(Make, modelName, modelNumber, cpu, gpu, ram, storage) {
        const db = await getDatabase();
        const newDesktop = (Make, modelName, modelNumber, cpu, gpu, ram, storage);
        const result = await db.collection('Desktops').insertOne(newDesktop);
        console.log("new desktop inserted with Id", result.insertedId);
        console.log("Desktop stats", newDesktop);
        return;

    }

     async subDesktopById(desktopId) {
        const db = await getDatabase();
        const subbedDesktop = await db.collection('Desktops').find({_id: {$all: [desktopId]}});
        return; 
    }

    async updateDesktopById(desktopId, Make, modelName, modelNumber, cpu, gpu, ram, stroage) {
        const db = await getDatabase();
        await db.collection('Desktops').updateOne({_id: desktopId}, 
            {
                $set:{'Make': Make, 'ModelName': modelName, 'ModelNumber': modelNumber, 'CPU': cpu, 'GPU': gpu, 'RAM': ram, 'Storage': stroage},
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
module.exports = DesktopMapper;

