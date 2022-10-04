const { check } = require('express-validator');
const fieldsValidation = require('../fields-validations');

const fieldsCommnets = [

    check('message', 'message is required').trim().notEmpty(),
    fieldsValidation

];

const updateFieldsCommnets = [

    check('message', 'message is required').trim().notEmpty().optional(),
    fieldsValidation

];


module.exports = {
    fieldsCommnets,
    updateFieldsCommnets
}