const middlewareError = require("./errors");
const fieldsValidation = require("./fields-validations");
const checkFiedlsValidators = require('./check-fields-validators');
const validarJWT = require('./jwt-validation');
const isAdmin = require('./isAdmin');



module.exports = {
    middlewareError,
    fieldsValidation,
    ...checkFiedlsValidators,
    validarJWT,
    isAdmin
}