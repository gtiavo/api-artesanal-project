const Users = require('./Users');
const Products = require('./Products');
const Seed = require('./Seed');
const Styles = require('./Styles');


module.exports = {
    ...Users,
    ...Products,
    ...Seed,
    ...Styles
}