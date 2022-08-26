const { productCreate, getProducts } = require("../db");
const {asyncHandler} = require("../helpers");
const { CreatedResponse, OkResponse } = require("../_HTTP-response/successful");


const newProduct = asyncHandler(async(req, res, next) => {

   const product = await productCreate(req.body);
   new CreatedResponse(res, product, `El producto ${ product.name } se creo con exito`);
    
});

const getAllProduct = asyncHandler(async(req,res,next) => {
    
    const products = await getProducts();
    new OkResponse(res, products)

});


module.exports = {
    newProduct,
    getAllProduct
}