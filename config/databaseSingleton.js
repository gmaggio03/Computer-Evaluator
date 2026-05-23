// this is an app that will store information about different models of computers(laptops and desktops) then it will compare
// the differences and advantages of two computers to in form you which one will perform better.

const path = require('path');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config({ path: path.resolve(__dirname, '../.env')});

class DatabaseSingleton {
    // define an instance and a client
    static instance;
    static client;

    // create a new instance of the database
    static async createInstance() {
        if(!process.env.MONGO_URI) {
            throw new Error("Mongo URI not defined check the env file for the uri");
        }
        else {
            // define the client
            DataBaseSingleton.client = new MongoClient(process.env.MONGO_URI);
            await DatabaseSingleton.client.connect();

            // define the database
            const database = DatabaseSingleton.client.db("Computers");
            DatabaseSingleton.instance = database;
            return DatabaseSingleton.instance;
        }
    }

    // get the instance if it exist return it. If not then create a new instance
    static async getInstance() {
        if(!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = createInstance();
        }
        return DatabaseSingleton.instance;
    }
}

module.exports = DatabaseSingleton;