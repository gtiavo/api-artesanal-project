const ModelsDB = require('./models/Mongoose');
const Product = require('../_mongooseDB/models/Product');



const productCreate = async( data ) => {

   const { name, style, description, photo } = data;

   const product = await ModelsDB.NewPost( Product, { name, style, description, photo } );
   await product.save();

   return product;

};

const getProducts = async() => {

    const products = await ModelsDB.getAll(Product);
    return products.filter( product => product.deletedAt === false);

}


module.exports = {
    productCreate,
    getProducts
}