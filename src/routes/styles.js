const router = require('express').Router();
const {getAllStyles, getOneStyle, newStyle, updateStyle, deleteStyle} = require('../controllers');
const { fieldsStyles, updateFieldsStyles, validarJWT, isAdmin } = require('../middlewares');

router.get('/', getAllStyles);
router.get('/:id', getOneStyle);

router.use(validarJWT);
router.use(isAdmin);
router.post('/',fieldsStyles, newStyle);
router.put('/:id',updateFieldsStyles, updateStyle);
router.delete('/:id', deleteStyle);

module.exports = router;