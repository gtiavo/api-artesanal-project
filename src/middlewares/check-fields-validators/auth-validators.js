const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');
const { whiteListRole } = require('../../helpers');

const fieldsRegister = [

    check("firstName", "El nombre es obligatorio").trim().notEmpty(),
    check("firstName", "El nombre debe de tener al menos 3 caracteres").isLength({min:3}),
    check("lastName", "El apellido es obligatorio").trim().notEmpty(),
    check("lastName", "El apellido debe de tener al menos 3 caracteres").isLength({min:3}),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check("password", "El password es obligatorio").trim().notEmpty(),
    check("password", "El password debe de tener al menos 6 caracteres").isLength({min:6}),
    
    fieldsValidation
    
];

const fieldsUserUpdate = [

    check("firstName", "El nombre es obligatorio").trim().notEmpty().optional(),
    check("firstName", "El nombre debe de tener al menos 3 caracteres").isLength({min:3}).optional(),
    check("lastName", "El apellido es obligatorio").trim().notEmpty().optional(),
    check("lastName", "El apellido debe de tener al menos 3 caracteres").isLength({min:3}).optional(),
    check('email', 'El email es obligatorio').not().isEmpty().optional(),
    check('email', 'El email no es valido').isEmail().optional(),
    check("password", "El password es obligatorio").trim().notEmpty().optional(),
    check("password", "El password debe de tener al menos 6 caracteres").isLength({min:6}).optional(),
    
    fieldsValidation
    
];

const fieldsLogin = [

    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check("password", "El password es obligatorio").trim().notEmpty(),
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