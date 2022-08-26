const { Router } = require('express');
const  router    = Router();
const  userPath = require('./users');
const  productPath = require('./products');


router.use('/auth', userPath );
router.use('/products', productPath );

   
module.exports = router;



