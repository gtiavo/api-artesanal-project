const { ForbiddenResponse } = require('../_HTTP-response/errors');


module.exports = ( req, res, next ) => {
    
    const rolUserId = req.user.roleId;
    const rolAdminId = 'admin';

    if( rolUserId !== rolAdminId ) throw new ForbiddenResponse();
      
    next();
}