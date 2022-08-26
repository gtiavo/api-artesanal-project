const router = require('express').Router();
const { newProduct, getAllProduct } = require('../controllers');
const { fieldsProducts } = require('../middlewares')


router.get('/', getAllProduct );
router.post('/',fieldsProducts, newProduct );


module.exports = router;
