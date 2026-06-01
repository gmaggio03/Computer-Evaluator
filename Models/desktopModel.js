// This class will perform buisness logic for the desktops, such as creating a new desktop, updating an existing desktop, deleting a desktop, and getting a desktop by its ID. It will also interact with the database through the datamapper to perform these operations.

class Desktops {
    async desktopIsUnique(desktopId, Make, modelName, modelNumber) {
        const db = await getDatabase();
        const findDesktop = await db.collection('Desktops').findOne({Make: Make, ModelName: modelName, ModelNumber: modelNumber});
        if (findDesktop === null) {
            return true;
        }
        return false;
    }
    
    async desktopIsSubscribed(desktopId, userId) {
        const db = await getDatabase();
        const findSubbedDesktop = await db.collection('SubscribedDesktops').findOne({_id: desktopId, userId: userId});
        if (findSubbedDesktop === null) {
            return true;
        }
        return false;
    }
 
}

module.exports = Desktops;
