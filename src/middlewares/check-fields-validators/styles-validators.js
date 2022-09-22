const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');


const fieldsStyles = [

    check('name', 'El nombre es obligatorio').trim().not().isEmpty()
    .isLength({min:3}).withMessage('El nombre debe tener 3 caracteres por lo menos'),
    check('description').trim().isLength({min:10}).withMessage('La descripcion debe tener 10 caracteres por lo menos').optional(),
    check('photo').trim().not().isEmpty().optional(),
    fieldsValidation

];

const updateFieldsStyles = [

    check('name', 'El nombre es obligatorio').trim().not().isEmpty()
    .isLength({min:3}).withMessage('El nombre debe tener 3 caracteres por lo menos').optional(),
    check('description').trim().isLength({min:10}).withMessage('La descripcion debe tener 10 caracteres por lo menos').optional(),
    check('photo').trim().not().isEmpty().optional(),
    fieldsValidation
    
];


module.exports = {
    fieldsStyles,
    updateFieldsStyles
}