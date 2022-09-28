const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');

const fieldsCommnets = [

    check('message', 'El mensaje es obligatorio').trim().notEmpty(),
    fieldsValidation

];

const updateFieldsCommnets = [

    check('message', 'El mensaje es obligatorio').trim().notEmpty().optional(),
    fieldsValidation

];


module.exports = {
    fieldsCommnets,
    updateFieldsCommnets
}