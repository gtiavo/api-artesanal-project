const router = require('express').Router();
const { newProduct, getAllProducts, updateProduct, deleteProduct, getOneProduct } = require('../controllers');
const { fieldsProducts, updateFieldsProducts } = require('../middlewares')


router.get('/', getAllProducts );
router.get('/:id', getOneProduct );
router.post('/',fieldsProducts, newProduct );
router.put('/:id', updateFieldsProducts, updateProduct );
router.delete('/:id', deleteProduct );


module.exports = router;
