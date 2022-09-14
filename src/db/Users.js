const User = require('../_mongooseDB/models/User');
const ModelsDB = require('./models/Mongoose');
const bcrypt     = require('bcryptjs');
const {jWTGenerator} = require('../helpers');
const { UnauthorizedResponse } = require('../_HTTP-response/errors');


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


  const token = await jWTGenerator(user);


  return { user, token };
};

  module.exports = {
    newUser,
    userLoged
  }