const { ForbiddenResponse, NotFoundResponse } = require("../_HTTP-response/errors");


const uploadAllowed = (req,res,next) => {

    const { collection, id } = req.params;
    const { uid, roleId } = req.user;


    switch (collection) {
        case 'users':
            if( id !== uid ) throw new ForbiddenResponse('you are not an authorized user');
            break;
        case 'products':
            if( roleId !== 'admin' ) throw new ForbiddenResponse('you are not an authorized user');
            break;
        case 'styles':
            if( roleId !== 'admin' ) throw new ForbiddenResponse('you are not an authorized user');
            break;
        default:
            throw new NotFoundResponse('Page not found');
    }

    next();
};

module.exports =  uploadAllowed; 