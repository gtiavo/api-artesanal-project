const router = require('express').Router();
const { runSeed } = require('../controllers')

router.get('/', runSeed);


module.exports = router;