const authValidators = require('./auth-validators');
const productsValidators = require('./products-validators');
const stylesValidators = require('./styles-validators');
const commentsValidators = require('./comments-validators');



module.exports = {
    ...authValidators,
    ...productsValidators,
    ...stylesValidators,
    ...commentsValidators 
}