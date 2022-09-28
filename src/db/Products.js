const ModelsDB = require('./models/Mongoose');
const Product = require('../_mongooseDB/models/Product');
const { isValidObjectId } = require('mongoose');
const { NotFoundResponse, BadRequestResponse } = require('../_HTTP-response/errors');



const productCreate = async( data ) => {

   data.name = data.name.toLowerCase();
   const { name , style, maker, description, photo, source } = data;

   const product = await ModelsDB.NewPost( Product, { name, style, maker, description, photo, source } );
   await product.save();

   return product;

};

const getProducts = async(data) => {

    const { currentPage, nextPage, prevPage, rows, totalPages } = await ModelsDB.getPagination(Product, data);

    if(Number(currentPage) > totalPages - 1) throw new BadRequestResponse(`Solo hay un total de ${totalPages} paginas.`);

    const products = {
        prevPage: prevPage < 0 ? null : 'http://localhost:3000/api/products?page=' + prevPage,            
        currentPage: `http://localhost:3000/api/products?page=${currentPage}`,
        nextPage:  nextPage >= totalPages  ? null : 'http://localhost:3000/api/products?page=' + nextPage ,
        totalPages,
        rows,
    }

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

   data.name = data.name.toLowerCase();
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