const authValidators = require('./auth-validators');
const productsValidators = require('./products-validators');
const stylesValidators = require('./styles-validators');
const commentsValidators = require('./comments-validators');
const rolesValidators = require('./roles-validators');



module.exports = {
    ...authValidators,
    ...productsValidators,
    ...stylesValidators,
    ...commentsValidators,
    ...rolesValidators 
}