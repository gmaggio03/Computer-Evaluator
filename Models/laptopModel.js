// This class will perform buisness logic for the laptops, such as creating a new laptop, updating an existing laptop, deleting a laptop, and getting a laptop by its ID. It will also interact with the database through the datamapper to perform these operations.

class Laptops {
    async laptopIsUnique(laptopId, Make, modelName, modelNumber) {
        const db = await getDatabase();
        const findLaptop = await db.collection('Laptops').findOne({Make: Make, ModelName: modelName, ModelNumber: modelNumber});
        if (findLaptop === null) {
            return true;
        }
        return false;
    }

    async laptopIsSubscribed(laptopId, userId) {
        const db = await getDatabase();
        const findSubbedLaptop = await db.collection('SubscribedLaptops').findOne({_id: laptopId, userId: userId});
        if (findSubbedLaptop === null) {
            return true;
        }
        return false;
    }
}

module.exports = Laptops;