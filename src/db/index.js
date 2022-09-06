const Users = require('./Users');
const Products = require('./Products');
const Seed = require('./Seed');


module.exports = {
    ...Users,
    ...Products,
    ...Seed
}