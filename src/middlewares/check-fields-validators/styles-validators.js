const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');


const fieldsStyles = [

    check('name', 'name is required').trim().not().isEmpty()
    .isLength({min:3}).withMessage('the name must have at least 3 characters'),
    check('description').trim().isLength({min:10}).withMessage('the description must have at least 10 characters').optional(),
    check('photo').trim().not().isEmpty().optional(),
    fieldsValidation

];

const updateFieldsStyles = [

    check('name', 'name is required').trim().not().isEmpty()
    .isLength({min:3}).withMessage('the name must have at least 3 characters').optional(),
    check('description').trim().isLength({min:10}).withMessage('the description must have at least 10 characters').optional(),
    check('photo').trim().not().isEmpty().optional(),
    fieldsValidation
    
];


module.exports = {
    fieldsStyles,
    updateFieldsStyles
}