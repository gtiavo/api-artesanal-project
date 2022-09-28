const { Router } = require('express');
const  router    = Router();
const  authPath = require('./auth');
const  productPath = require('./products');
const  seedPath = require('./seed');
const  stylesPath = require('./styles');
const  commentsPath = require('./comments');


router.use('/auth', authPath );
router.use('/products', productPath );
router.use('/seed', seedPath );
router.use('/styles', stylesPath );
router.use('/comments', commentsPath );

   
module.exports = router;



