const { asyncHandler } = require('../helpers');
const { createComment, totalsComents, oneComment,
        commentEdit, removeComment, commentsList, 
        oneTotalsComments, commentCancel, outComment } = require('../db');
const { CreatedResponse, OkResponse } = require('../_HTTP-response/successful');



const getAllComments = asyncHandler(async(req,res,next) => {

    const comments = await commentsList(req.query.page);
    new OkResponse(res, {comments});

});

const getOneComment = asyncHandler(async(req,res,next) => {

    const comment = await oneComment(req.params);
    new OkResponse(res, {comment});

});

const newComment = asyncHandler(async(req,res,next) => {

    const comment = await createComment(req.body, req.user.uid );
    new CreatedResponse(res, {comment});

});

const updateComment = asyncHandler(async(req,res,next) => {

    await commentEdit(req.body, req.params, req.user.uid);
    new OkResponse(res, [], 'updated succesful');

});

const deleteComment = asyncHandler(async(req,res,next) => {

    await removeComment(req.params, req.user.uid);
    new OkResponse(res, [], 'deleted succesful');

});

const getTotalsComments = asyncHandler(async(req,res,next) => {

    const comments = await totalsComents(req.query.page);
    new OkResponse(res, {comments});

});

const getOneTotalsComments = asyncHandler(async(req,res,next) => {

    const { commentDes } = await oneTotalsComments(req.params);
    new OkResponse(res, {comment: commentDes});

});

const cancelComment = asyncHandler(async(req,res,next) => {

    await commentCancel(req.params);
    new OkResponse(res, [], 'cancel succesful');

});

const commentOut = asyncHandler(async(req,res,next) => {

    await outComment(req.params);
    new OkResponse(res, [], 'delete succesful');

});

module.exports = {
    getAllComments,
    getOneComment,
    newComment,
    updateComment,
    deleteComment,
    getTotalsComments,
    getOneTotalsComments,
    cancelComment,
    commentOut
}