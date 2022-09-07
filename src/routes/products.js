const router = require('express').Router();
const { newProduct, getAllProducts, updateProduct, deleteProduct, getOneProduct } = require('../controllers');
const { fieldsProducts, updateFieldsProducts, validarJWT, isAdmin } = require('../middlewares');


router.get('/', getAllProducts );
router.get('/:id', getOneProduct );

router.use(validarJWT);
router.use(isAdmin);
router.post('/', fieldsProducts, newProduct );
router.put('/:id', updateFieldsProducts, updateProduct );
router.delete('/:id', deleteProduct );


module.exports = router;
