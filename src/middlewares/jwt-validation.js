const jwt = require("jsonwebtoken");
const { UnauthorizedResponse } = require('../_HTTP-response/errors');
             
const validarJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) throw new UnauthorizedResponse( "The authentication token has not been sent" );
 
  jwt.verify(token, process.env.SECRETORPRIVATEKEY, async (error, user) => {
      if (error) return res.status(400).send({ error: true, name: 'BadRequest', status: 400, message: "Invalid Token", data: [] });
      req.user = user;
      next();
  });
};

module.exports = validarJWT;