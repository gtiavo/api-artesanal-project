const User = require('../_mongooseDB/models/User');
const Product = require('../_mongooseDB/models/Product');
const ModelsDB = require('./models/Mongoose');
const { dataUsers, dataProducts } = require('../data')

const initialSeed = async() => {

await ModelsDB.deleteAll(Product);    
await ModelsDB.insertAll(Product, dataProducts);

await ModelsDB.deleteAll(User);    
await ModelsDB.insertAll(User, dataUsers);

}

module.exports = {initialSeed};