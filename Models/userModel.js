
const mapper = require('../data/datamapper');

class Users {
    async userIsUnique(userId, username) {
        const db = await getDatabase();
        const findUser = await db.collection('Users').findOne({_id: userId ,Username: username});
        if (findUser === null) {
            return true;
        }
        return false;
    }
}

module.exports = Users; 