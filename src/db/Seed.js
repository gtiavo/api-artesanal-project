const User = require('../_mongooseDB/models/User');
const Product = require('../_mongooseDB/models/Product');
const Styles = require('../_mongooseDB/models/Style');
const ModelsDB = require('./models/Mongoose');
const { dataUsers, dataProducts, dataStyles } = require('../data')

const initialSeed = async() => {

await ModelsDB.deleteAll(Styles);    
await ModelsDB.insertAll(Styles, dataStyles);    

await ModelsDB.deleteAll(Product);    
await ModelsDB.insertAll(Product, dataProducts);

await ModelsDB.deleteAll(User);    
await ModelsDB.insertAll(User, dataUsers);

}

module.exports = {initialSeed};