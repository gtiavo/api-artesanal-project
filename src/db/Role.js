const ModelsDB = require('./models/Mongoose');
const Role = require('../_mongooseDB/models/Role');
const { isValidObjectId } = require('mongoose');
const { NotFoundResponse } = require('../_HTTP-response/errors');


const roleCreate = async(data) => {

    const { name, description } = data;
    const role = await ModelsDB.NewPost(Role, { name, description } );
    await role.save();
    return role;

};

const getRoles = async() => {

    const roles = await ModelsDB.getAll(Role);
    return roles;

};

const oneRole = async( dataId ) => {

    const { id } = dataId;
    let role;

    if(isValidObjectId(id)) role = await ModelsDB.getOne(Role, {_id: id});

    if( !role ) role = await ModelsDB.getOne(Role, {name: id});

    if( !role ) throw new NotFoundResponse('role not found');

    return role;

};

const roleEdit = async(dataId, data) => {

    const { name, description } = data;    
    const role = await oneRole(dataId);

    await ModelsDB.updatePost(role, { name, description });

    return;

};

const removeRole = async(dataId) => {

    const role = await oneRole(dataId);

    await ModelsDB.updatePost(role, { deletedAt: true });

    return;

};

const restoreRole = async(dataId) => {

    const role = await oneRole(dataId);

    await ModelsDB.updatePost(role, { deletedAt: false });

    return;

}


module.exports = {
    roleCreate,
    getRoles,
    oneRole,
    roleEdit,
    removeRole,
    restoreRole
}