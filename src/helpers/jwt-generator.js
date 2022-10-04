const jwt = require("jsonwebtoken");


const jWTGenerator = (user) => {
  return new Promise((resolve, reject) => {
    const payload = { uid: user.id, roleId:user.roleId, isActive: user.isActive };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("token not generated");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = jWTGenerator;