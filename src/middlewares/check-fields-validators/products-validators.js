const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');
const { whitheListValue } = require('../../helpers');

const beerStyles = ["IPA", "APA"];

const fieldsProducts = [
    
    check('name', 'El nombre es obligatorio').trim().not().isEmpty()
    .isLength({min:3}).withMessage('El nombre debe tener 3 caracteres por lo menos'),
    check('style').custom(value => whitheListValue(value, beerStyles)).optional(),
    check('description').trim().isLength({min:10}).withMessage('La descripcion debe tener 10 caracteres por lo menos').optional(),
    check('photo').trim().not().isEmpty().optional(),
    check('source', 'Debes de excribir 3 caracteres por lo menos').trim().isLength({min:3}).optional(),
    fieldsValidation

];

const updateFieldsProducts = [
    
    check('name', 'El nombre es obligatorio').trim().not().isEmpty().isLength({min:3})
    .withMessage('El nombre debe tener 3 caracteres por lo menos').optional(),
    check('style').custom(value => whitheListValue(value, beerStyles)).optional(),
    check('description').trim().isLength({min:10}).withMessage('La descripcion debe tener 10 caracteres por lo menos').optional(),
    check('photo').trim().not().isEmpty().optional(),
    check('source', 'Debes de excribir 3 caracteres por lo menos').trim().isLength({min:3}).optional(),
    fieldsValidation

];


module.exports = {
    fieldsProducts,
    updateFieldsProducts
}