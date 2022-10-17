const router = require('express').Router();
const { register, login, updateUser, deactivateUser, getAllUser, getOneUser, bannedUser, unBannedUser, userRole } = require('../controllers');
const { fieldsRegister, fieldsLogin,fieldsUserUpdate, fieldsRoleChange, validarJWT, isAdmin, isClient } = require('../middlewares');

router.post('/register',fieldsRegister, register );
router.post('/login', fieldsLogin, login );

router.use(validarJWT);
router.put('/:id',isClient,fieldsUserUpdate, updateUser );
router.delete('/account/:id',isClient, deactivateUser );

router.use(isAdmin);
router.get('/admin', getAllUser );
router.get('/admin/:id', getOneUser );
router.delete('/admin/:id', bannedUser );
router.put('/admin/:id', unBannedUser );
router.put('/admin/role/:id',fieldsRoleChange, userRole );


module.exports = router;