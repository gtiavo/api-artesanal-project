const { Router } = require('express');
const  router    = Router();
const  userPath = require('./users');
const  productPath = require('./products');
const  seedPath = require('./seed');


router.use('/auth', userPath );
router.use('/products', productPath );
router.use('/seed', seedPath );

   
module.exports = router;



