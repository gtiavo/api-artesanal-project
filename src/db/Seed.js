const {User, Product, Style, Role} = require('../_mongooseDB/models');
const ModelsDB = require('./models/Mongoose');
const { dataUsers, dataProducts, dataStyles, dataRoles } = require('../data')

const initialSeed = async() => {

    await ModelsDB.deleteAll(Role);    
    await ModelsDB.insertAll(Role, dataRoles);    

    await ModelsDB.deleteAll(Style);    
    await ModelsDB.insertAll(Style, dataStyles);    
    
    await ModelsDB.deleteAll(Product);    
    await ModelsDB.insertAll(Product, dataProducts);
    
    await ModelsDB.deleteAll(User);    
    await ModelsDB.insertAll(User, dataUsers);

}

module.exports = {initialSeed};