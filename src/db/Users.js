const User = require('../_mongooseDB/models/User');
const ModelsDB = require('./models/Mongoose');
const bcrypt     = require('bcryptjs');
const {jWTGenerator} = require('../helpers');
const { UnauthorizedResponse } = require('../_HTTP-response/errors');


const newUser = async( data ) => {

    const { firstName, lastName, email, password  } = data;
    
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = await ModelsDB.NewPost(User, { firstName, lastName, email, password: passwordHash } );
    await user.save();
  
    return user;
  
  };


  const userLoged = async( data ) => {

  const { email, password } = data;

  const user = await ModelsDB.getOne(User, {email: email});
  if(!user) throw new UnauthorizedResponse('email o password incorrectos');

  const isValidPassword = await bcrypt.compare( password, user.password );
  if(!isValidPassword) throw new UnauthorizedResponse('email o password incorrectos');


  const token = await jWTGenerator(user);


  return { user, token };
};

  module.exports = {
    newUser,
    userLoged
  }