const { ForbiddenResponse } = require('../_HTTP-response/errors');


module.exports = ( req, res, next ) => {
    
    const clientParamsId = req.params.id;
    const clientTokenId = req.user.uid;

    if( clientParamsId !== clientTokenId ) throw new ForbiddenResponse('you are not an authorized user');
      
    next();
}