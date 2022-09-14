const ModelsDB = require('./models/Mongoose');
const Product = require('../_mongooseDB/models/Product');
const { isValidObjectId } = require('mongoose');
const { NotFoundResponse } = require('../_HTTP-response/errors');



const productCreate = async( data ) => {

   data.name = data.name.toLowerCase();
   const { name , style, maker, description, photo, source } = data;

   const product = await ModelsDB.NewPost( Product, { name, style, maker, description, photo, source } );
   await product.save();

   return product;

};

const getProducts = async(data) => {

    const products = await ModelsDB.getPagination(Product, data)
    return products;

};

const oneProduct = async( data ) => {

    const { id } = data;
    let product;

    if( isValidObjectId(id)) product = await ModelsDB.getOne(Product, {_id:id});

    if( !product ) product = await ModelsDB.getOne(Product, {name: id.toLowerCase().trim() });
    
    if( !product || product.deletedAt ) throw new NotFoundResponse('product not found');
    
    return product;

};

const productEdit = async(dataId, data) => {

   const { name, style, maker, description, photo, source } = data;

   const product = await oneProduct(dataId);
   await ModelsDB.updatePost(product, { name, style, maker, description, photo, source } );
   
   return;
};

const removeProduct = async( dataId) => {

   const product = await oneProduct(dataId);
   await ModelsDB.updatePost(product, { deletedAt: true } );

   return;
};


module.exports = {
    productCreate,
    getProducts,
    oneProduct,
    productEdit,
    removeProduct
}