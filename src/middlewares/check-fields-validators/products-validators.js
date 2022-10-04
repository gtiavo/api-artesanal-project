const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');
const { whiteListStyles } = require('../../helpers');



const fieldsProducts = [
    
    check('name', 'name is required').trim().not().isEmpty()
    .isLength({min:3}).withMessage('the name must have at least 3 characters'),
    check('style').custom(whiteListStyles).optional(),
    check('description').trim().isLength({min:10}).withMessage('the description must have at least 10 characters').optional(),
    check('photo').trim().not().isEmpty().optional(),
    check('source', 'the source must have at least 3 characters').trim().isLength({min:3}).optional(),
    fieldsValidation

];

const updateFieldsProducts = [
    
    check('name', 'name is required').trim().not().isEmpty().isLength({min:3})
    .withMessage('the name must have at least 3 characters').optional(),
    check('style').custom(whiteListStyles).optional(),
    check('description').trim().isLength({min:10}).withMessage('the description must have at least 10 characters').optional(),
    check('photo').trim().not().isEmpty().optional(),
    check('source', 'the source must have at least 3 characters').trim().isLength({min:3}).optional(),
    fieldsValidation

];


module.exports = {
    fieldsProducts,
    updateFieldsProducts
}