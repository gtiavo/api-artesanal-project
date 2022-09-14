const { BadRequestResponse } = require("../_HTTP-response/errors");

const middlewareError = ( error, req, res, next ) => {
    let errorObject;

    if( typeof error.toJson === 'function') {
        errorObject = error.toJson();
    } else if(error.code === 11000){
        errorObject = new BadRequestResponse(`${ JSON.stringify( error.keyValue ) }, ya existe en DB`).toJson();
    } else {
        errorObject = {
            error: true,
            name: 'UnkwnwnError',
            status: 500,
            message: 'Unkwnwn Error ' + error.message,
        };
    }
    
    res.status(errorObject.status).json(errorObject)

}

module.exports = middlewareError;