const User = require('../_mongooseDB/models/User');
const ModelsDB = require('./models/Mongoose');
const bcrypt     = require('bcryptjs');
const { isValidObjectId } = require('mongoose');
const {jWTGenerator} = require('../helpers');
const { UnauthorizedResponse, NotFoundResponse } = require('../_HTTP-response/errors');


const newUser = async( data ) => {

    const { firstName, lastName, email, password, photo  } = data;
    
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = await ModelsDB.NewPost(User, { firstName, lastName, email, password: passwordHash, photo } );
    await user.save();
  
    return user;
  
  };


const userLoged = async( data ) => {

  const { email, password } = data;

  const user = await ModelsDB.getOne(User, {email: email});
  if(!user) throw new UnauthorizedResponse('invalid email or password');

  const isValidPassword = await bcrypt.compare( password, user.password );
  if(!isValidPassword) throw new UnauthorizedResponse('invalid email or password');

  if(user.isBanned) throw new UnauthorizedResponse('Banned account');

  const token = await jWTGenerator(user);

  const {_id, firstName, lastName, isActive  } = user;

  
  return { user:{id:_id, firstName, lastName, email: user.email, isActive}, token };
};


const userEdit = async( userId, userData ) => {

  const { firstName, lastName, email, password, photo  } = userData;
  const user = await oneUser(userId);

  if (password) {
    const passwordHash = await bcrypt.hash(password, 10);
    await ModelsDB.updatePost(user, { firstName, lastName, email, passwordHash, photo  });
    return;
  }

    await ModelsDB.updatePost(user, { firstName, lastName, email, photo  });
    return;

};

const removeUser = async( userId ) => {

  const user = await oneUser(userId);
  await ModelsDB.updatePost(user, { isActive: false });
  return;

};

const restoreUser = async( userId ) => {

  const user = await oneUser(userId);
  await ModelsDB.updatePost(user, { isActive: true });
  return;

};

const getUsers = async() => {

  const users = await ModelsDB.getAll(User);
  return users;

};

const oneUser = async( userId ) => {

    const { id } = userId;
    let user;

    if( isValidObjectId(id)) user = await ModelsDB.getOne(User, {_id:id});
    
    if(!user) throw new NotFoundResponse('user not found');
    
    return user;

};

const banned = async(userId) => {

  const user = await oneUser(userId);
  await ModelsDB.updatePost(user, { isBanned: true });
  return;

};

const unBanned = async(userId) => {

  const user = await oneUser(userId);
  await ModelsDB.updatePost(user, { isBanned: false });
  return;

};

  module.exports = {
    newUser,
    userLoged,
    userEdit,
    removeUser,
    restoreUser,
    getUsers,
    oneUser,
    banned,
    unBanned
  }