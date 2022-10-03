const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');

const fieldsRole = [

    check('name', 'El nombre es obligatorio').trim().not().isEmpty()
    .isLength({min:3}).withMessage('El nombre debe tener 3 caracteres por lo menos'),
    check('descrition').trim().isLength({min:10}).withMessage('La descripcion debe tener 10 caracteres por lo menos').optional(),
    
    fieldsValidation

];

const fieldsUpdateRole = [

    check('name', 'El nombre es obligatorio').trim().not().isEmpty()
    .isLength({min:3}).withMessage('El nombre debe tener 3 caracteres por lo menos').optional(),
    check('descrition').trim().isLength({min:10}).withMessage('La descripcion debe tener 10 caracteres por lo menos').optional(),
    
    fieldsValidation

];


module.exports = {
    fieldsRole,
    fieldsUpdateRole
}