const {asyncHandler} = require("../helpers");
const { roleCreate, getRoles, oneRole, roleEdit, removeRole, restoreRole } = require('../db');
const { CreatedResponse, OkResponse } = require("../_HTTP-response/successful");


const getAllRoles = asyncHandler(async(req,res,next) => {

    const roles = await getRoles();
    new OkResponse(res,{roles});

});

const getOneRole = asyncHandler(async(req,res,next) => {

    const role = await oneRole(req.params);
    new OkResponse(res, {role});

});

const newRole = asyncHandler(async(req,res,next) => {

    const role = await roleCreate(req.body);
    new CreatedResponse(res, {role});

});

const updateRole = asyncHandler(async(req,res,next) => {

    await roleEdit(req.params, req.body);
    new OkResponse(res,[]);

});

const deleteRole = asyncHandler(async(req,res,next) => {

    await removeRole(req.params);
    new OkResponse(res,[]);

});

const resetRole = asyncHandler(async(req,res,next) => {

    await restoreRole(req.params);
    new OkResponse(res,[]);

});



module.exports = { 
    getAllRoles, 
    getOneRole, 
    newRole, 
    updateRole, 
    deleteRole,
    resetRole 
 }