const middlewareError = require("./errors");
const fieldsValidation = require("./fields-validations");
const checkFiedlsValidators = require('./check-fields-validators');



module.exports = {
    middlewareError,
    fieldsValidation,
    ...checkFiedlsValidators,
}