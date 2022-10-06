const middlewareError = require("./errors");
const fieldsValidation = require("./fields-validations");
const checkFiedlsValidators = require('./check-fields-validators');
const validarJWT = require('./jwt-validation');
const isAdmin = require('./isAdmin');
const isClient = require('./isClient');
const uploadAllowed = require('./uploadAllowed');
const validExtensionUpload = require('./valid-extension-upload');



module.exports = {
    middlewareError,
    fieldsValidation,
    ...checkFiedlsValidators,
    validarJWT,
    isAdmin,
    isClient,
    uploadAllowed,
    validExtensionUpload
}