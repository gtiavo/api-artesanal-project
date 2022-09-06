const User = require('../_mongooseDB/models/User');
const ModelsDB = require('./models/Mongoose');
const { dataUsers } = require('../data')

const initialSeed = async() => {

await ModelsDB.deleteAll(User);    
await ModelsDB.insertAll(User, dataUsers);


}

module.exports = {initialSeed};