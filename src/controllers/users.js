const { newUser, userLoged, getUsers, oneUser, userEdit, removeUser, banned, unBanned, changeRole } = require("../db");
const asyncHandler = require("../helpers/async-handler");
const {  CreatedResponse, OkResponse } = require("../_HTTP-response/successful");



const register = asyncHandler(async( req , res, next  ) => {

    const user = await newUser( req.body );
     new CreatedResponse(res, {user}, 'User created');
    
});


const login = asyncHandler(async( req, res, next ) => {

    const user = await userLoged( req.body );
     new OkResponse(res, user);

});

const updateUser = asyncHandler(async( req, res, next ) => {

    await userEdit(req.params, req.body);
    new OkResponse(res, [], 'User updated');

});


const deactivateUser = asyncHandler(async( req, res, next ) => {

    await removeUser(req.params);
    new OkResponse(res, [], 'User deactivate');

});


const getAllUser = asyncHandler(async( req, res, next ) => {

    const users = await getUsers(req.query.page);
    new OkResponse(res, {users: users});

});

const getOneUser = asyncHandler(async( req, res, next ) => {

    const user = await oneUser( req.params );
    new OkResponse(res, {user: user});

});

const bannedUser = asyncHandler(async( req, res, next ) => {

    await banned(req.params);
    new OkResponse(res, [], 'Banned User');

});

const unBannedUser = asyncHandler(async( req, res, next ) => {

    await unBanned(req.params);
    new OkResponse(res, [], 'Unbanned User');

});

const userRole = asyncHandler(async( req, res, next ) => {

    await changeRole(req.params, req.body);
    new OkResponse(res, [], 'UserRole updated');

});



module.exports = {
    register,
    login,
    updateUser,
    deactivateUser,
    getAllUser,
    getOneUser,
    bannedUser,
    unBannedUser,
    userRole
}