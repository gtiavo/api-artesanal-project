const users = require('./users');
const products = require('./products');
const seed = require('./seed');
const styles = require('./styles');
const comments = require('./comments');



module.exports = {
    ...users,
    ...products,
    ...seed,
    ...styles,
    ...comments
}