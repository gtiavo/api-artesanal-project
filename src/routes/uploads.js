const router = require('express').Router();
const { upadateImage } = require('../controllers');
const { validarJWT, uploadAllowed, validExtensionUpload } = require('../middlewares');

router.put('/:collection/:id',validarJWT,uploadAllowed,validExtensionUpload, upadateImage);


module.exports = router;