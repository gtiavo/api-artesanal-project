const router = require('express').Router();
const {  getAllComments, getOneComment, newComment,
         updateComment, deleteComment, getTotalsComments, 
         getOneTotalsComments, cancelComment, commentOut } = require('../controllers');
const { validarJWT, isAdmin, fieldsCommnets, updateFieldsCommnets } = require('../middlewares');


router.use(validarJWT);
router.get('/', getAllComments );
router.get('/:id', getOneComment );
router.post('/',fieldsCommnets, newComment );
router.put('/:id',updateFieldsCommnets, updateComment );
router.delete('/:id', deleteComment );

router.use(isAdmin);
router.get('/admin/comments', getTotalsComments );
router.get('/admin/comments/:id', getOneTotalsComments );
router.put('/admin/comments/:id', cancelComment );
router.delete('/admin/comments/:id', commentOut );


module.exports = router;