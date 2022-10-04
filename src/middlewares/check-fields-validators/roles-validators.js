const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');

const fieldsRole = [

    check('name', 'name is required').trim().not().isEmpty()
    .isLength({min:3}).withMessage('the name must have at least 3 characters'),
    check('descrition').trim().isLength({min:10}).withMessage('the description must have at least 10 characters').optional(),
    
    fieldsValidation

];

const fieldsUpdateRole = [

    check('name', 'name is required').trim().not().isEmpty()
    .isLength({min:3}).withMessage('the name must have at least 3 characters').optional(),
    check('descrition').trim().isLength({min:10}).withMessage('the description must have at least 10 characters').optional(),
    
    fieldsValidation

];


module.exports = {
    fieldsRole,
    fieldsUpdateRole
}