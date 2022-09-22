const users = require('./users');
const products = require('./products');
const seed = require('./seed');
const styles = require('./styles');



module.exports = {
    ...users,
    ...products,
    ...seed,
    ...styles
}