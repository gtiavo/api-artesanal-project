const users = require('./users');
const products = require('./products');
const seed = require('./seed');



module.exports = {
    ...users,
    ...products,
    ...seed
}