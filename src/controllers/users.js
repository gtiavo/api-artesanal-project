const { newUser, userLoged } = require("../db");
const asyncHandler = require("../helpers/async-handler");
const {  CreatedResponse, OkResponse } = require("../_HTTP-response/successful");



const register = asyncHandler(async( req , res, next  ) => {

    const user = await newUser( req.body );
    user && new CreatedResponse(res, user, 'El usuario se creo con exito');
    
});


const login = asyncHandler(async( req, res, next ) => {

    const user = await userLoged( req.body );
    user && new OkResponse(res, user)

});






module.exports = {
    register,
    login
}