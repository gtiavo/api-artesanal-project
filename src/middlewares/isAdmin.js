const { ForbiddenResponse } = require('../_HTTP-response/errors');


module.exports = ( req, res, next ) => {
    
    const rolUserId = req.user.roleId;
    const rolAdminId = 1;

    if( rolUserId !== rolAdminId ) throw new ForbiddenResponse();
      
    next();
}