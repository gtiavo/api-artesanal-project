const authValidators = require('./auth-validators');
const productsValidators = require('./products-validators');



module.exports = {
    ...authValidators,
    ...productsValidators
}