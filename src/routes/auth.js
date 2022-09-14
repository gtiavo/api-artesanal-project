const { Router } = require('express');
const router     = Router();
const { register, login }    = require('../controllers');
const { fieldsRegister, fieldsLogin } = require('../middlewares');

router.post('/register',fieldsRegister, register );
router.post('/login', fieldsLogin, login );


module.exports = router;