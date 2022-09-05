const { productCreate, getProducts, oneProduct, productEdit, removeProduct } = require("../db");
const {asyncHandler} = require("../helpers");
const { CreatedResponse, OkResponse } = require("../_HTTP-response/successful");


const newProduct = asyncHandler(async(req, res, next) => {

   const product = await productCreate(req.body);
   new CreatedResponse(res, product, `El producto ${ product.name } se creo con exito`);
    
});

const getAllProducts = asyncHandler(async(req,res,next) => {
    
    const products = await getProducts(req.query);
    new OkResponse(res, {products});

});

const getOneProduct = asyncHandler(async(req,res,next) => {
    
    const product = await oneProduct(req.params);
    new OkResponse(res, {product});

});

const updateProduct = asyncHandler(async(req, res, next ) => {
    
    await productEdit(req.params, req.body);
    new OkResponse(res, [], 'El producto se actualizo con exito');

});

const deleteProduct = asyncHandler(async(req,res,next) => {
    await removeProduct(req.params);
    new OkResponse(res, [], 'El producto se elimino con exito');

});


module.exports = {
    newProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}