const users = require('./users');
const products = require('./products');
const seed = require('./seed');
const styles = require('./styles');
const comments = require('./comments');
const roles = require('./roles');
const uploads = require('./uploads');



module.exports = {
    ...users,
    ...products,
    ...seed,
    ...styles,
    ...comments,
    ...roles,
    ...uploads
}