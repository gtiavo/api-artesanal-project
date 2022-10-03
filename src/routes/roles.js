const router = require('express').Router();
const { getAllRoles, getOneRole, newRole, updateRole, deleteRole, resetRole  } = require('../controllers');
const { validarJWT, isAdmin, fieldsRole, fieldsUpdateRole } = require('../middlewares');

router.use(validarJWT);
router.use(isAdmin);
router.get('/', getAllRoles);
router.get('/:id', getOneRole);
router.post('/', fieldsRole, newRole);
router.put('/:id', fieldsUpdateRole, updateRole);
router.delete('/delete/:id', deleteRole);
router.put('/restore/:id', resetRole);


module.exports = router;