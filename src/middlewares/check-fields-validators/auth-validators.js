const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');
const { whiteListRole } = require('../../helpers');

const fieldsRegister = [

    check("firstName", "firstName is required").trim().notEmpty(),
    check("firstName", "the firstName must have at least 3 characters").isLength({min:3}),
    check("lastName", "lastName is required").trim().notEmpty(),
    check("lastName", "the lastName must have at least 3 characters").isLength({min:3}),
    check('email', 'email is required').not().isEmpty(),
    check('email', 'The email is not valid').isEmail(),
    check("password", "password is required").trim().notEmpty(),
    check("password", "the password must have at least 6 characters").isLength({min:6}),
    
    fieldsValidation
    
];

const fieldsUserUpdate = [

    check("firstName", "firstName is required").trim().notEmpty().optional(),
    check("firstName", "the firstName must have at least 3 characters").isLength({min:3}).optional(),
    check("lastName", "lastName is required").trim().notEmpty().optional(),
    check("lastName", "the lastName must have at least 3 characters").isLength({min:3}).optional(),
    check('email', 'email is required').not().isEmpty().optional(),
    check('email', 'The email is not valid').isEmail().optional(),
    check("password", "password is required").trim().notEmpty().optional(),
    check("password", "the password must have at least 6 characters").isLength({min:6}).optional(),
    
    fieldsValidation
    
];

const fieldsLogin = [

    check('email', 'email is required').not().isEmpty(),
    check('email', 'The email is not valid').isEmail(),
    check("password", "password is required").trim().notEmpty(),
    fieldsValidation
    
];

const fieldsRoleChange = [

    check('roleId').custom(whiteListRole).optional(),
    fieldsValidation

];



module.exports = {
    fieldsRegister,
    fieldsUserUpdate,
    fieldsLogin,
    fieldsRoleChange
}