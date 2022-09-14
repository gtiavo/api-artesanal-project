const { Router } = require('express');
const  router    = Router();
const  authPath = require('./auth');
const  productPath = require('./products');
const  seedPath = require('./seed');


router.use('/auth', authPath );
router.use('/products', productPath );
router.use('/seed', seedPath );

   
module.exports = router;



