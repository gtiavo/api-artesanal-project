const ModelsDB = require('./models/Mongoose');
const Comment = require('../_mongooseDB/models/Comment');
const { isValidObjectId } = require('mongoose');
const { NotFoundResponse, UnauthorizedResponse, BadRequestResponse } = require('../_HTTP-response/errors');
const { paginationPath } = require('../helpers');
const pathModel = 'comments';


const createComment = async( data, userId ) => {

    const { message } = data;

    const comment = await ModelsDB.NewPost(Comment, { message, user: userId} );
    await comment.save();

    return comment;

};

const getComments = async() => {

    const comments = await ModelsDB.getAll(Comment);
    return comments;

};

const commentsList = async(data) => {

    const { rows, currentPage, nextPage, prevPage, totalPages } = await ModelsDB.getPagination(Comment,data);

    const comments = paginationPath(currentPage,totalPages,prevPage,nextPage,rows, pathModel);

    return comments;


};

const oneComment = async( dataId ) => {

    const { id } = dataId;
    let comment;
    if( isValidObjectId(id)) comment = await ModelsDB.getOne(Comment, {_id: id });
    if(!comment || comment.deletedAt) throw new NotFoundResponse('Commnet not found');

    return comment;
    
};

const commentEdit = async( data, dataId, userId ) => {

    const comment = await oneComment(dataId);
    const { message } = data;

    if(comment.user.valueOf() !== userId) throw new UnauthorizedResponse("You can't edit this comment");
    
    await ModelsDB.updatePost(comment, {message});

    return; 

};

const removeComment = async(dataId, userId) => {

    const comment = await oneComment(dataId);

    if(comment.user.valueOf() !== userId) throw new UnauthorizedResponse("You can't delete this comment");

    await ModelsDB.updatePost(comment, {deletedAt: true} );

    return;

};

const totalsComents = async(data) => {

    const { currentPage, nextPage, prevPage, rows, totalPages } = await ModelsDB.getTotalsPaginations(Comment, data);

   const rowsTotals = rows.map( ({_id, user, message, deletedAt, createdAt, updatedAt}) => ({
        id: _id, user, message, deletedAt, createdAt, updatedAt
    }));

    const comments = paginationPath(currentPage,totalPages,prevPage,nextPage,rowsTotals, pathModel);

    return comments;

};

const oneTotalsComments = async(dataId) => {

    const { id } = dataId;
    let comment;
    if( isValidObjectId(id)) comment = await ModelsDB.getOne(Comment, {_id: id });
    if(!comment ) throw new NotFoundResponse('Commnet not found');

    const {_id, user, message, deletedAt, createdAt, updatedAt} = comment;
        
    return { commentDes: { id: _id, user, message, deletedAt, createdAt, updatedAt}, comment };

};

const commentCancel = async(dataId) => {

    const {comment} = await oneTotalsComments(dataId);
    await ModelsDB.updatePost(comment, {deletedAt: true});

    return;

};

const outComment = async( dataId ) => {

    const{ comment } = await oneTotalsComments(dataId);
    await comment.delete();

    return;

};


module.exports = {
    createComment,
    getComments,
    oneComment,
    commentEdit,
    removeComment,
    commentsList,
    totalsComents,
    oneTotalsComments,
    commentCancel,
    outComment
}